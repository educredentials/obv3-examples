/**
 * Offers module for credential offer generation and display
 */

// API endpoint constants
const AGENT_CREATE_CREDENTIALS_URL =
  "https://agent.poc9.eduwallet.nl/v0/credentials";
const AGENT_CREATE_OFFER_URL = "https://agent.poc9.eduwallet.nl/v0/offers";

/**
 * Generate SHA-256 hash of a JSON object
 * @param {Object} obj - The object to hash
 * @returns {Promise<string>} The hash as a hex string
 */
async function generateHash(obj) {
  const jsonString = JSON.stringify(obj);
  const msgBuffer = new TextEncoder().encode(jsonString);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

/**
 * Request an offer for a credential
 * @param {Object} credentialJson - The full JSON of the credential
 * @returns {Promise<string>} The offer URL string
 */
async function requestOffer(credentialJson) {
  console.log("Creating an offer for credential:", credentialJson);

  // Generate hash for offerId (same as sha256sum in the shell script)
  const hash = await generateHash(credentialJson);

  // Step 1: Create the credential on the agent
  const credentialPayload = {
    offerId: hash,
    credentialConfigurationId: "openbadge_credential",
    expiresAt: "never",
    isSigned: false,
    credential: credentialJson,
  };

  const createCredentialResponse = await fetch(AGENT_CREATE_CREDENTIALS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentialPayload),
  });

  if (!createCredentialResponse.ok) {
    throw new Error(
      `Failed to create credential: ${createCredentialResponse.status} ${createCredentialResponse.statusText}`,
    );
  }

  // Step 2: Create the offer on the agent
  const offerPayload = {
    offerId: hash,
    preAuthorizedCode: hash,
  };

  const createOfferResponse = await fetch(AGENT_CREATE_OFFER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(offerPayload),
  });

  if (!createOfferResponse.ok) {
    throw new Error(
      `Failed to create offer: ${createOfferResponse.status} ${createOfferResponse.statusText}`,
    );
  }

  // The response is the offer URI
  const offerUri = await createOfferResponse.text();

  return offerUri;
}

/**
 * Display a loading placeholder
 * @param {HTMLElement} container - The container element to display the placeholder in
 */
function displayLoadingPlaceholder(container) {
  container.innerHTML = "";

  const loadingBlock = document.createElement("div");
  loadingBlock.className = "offer-block offer-loading";

  const loadingText = document.createElement("p");
  loadingText.textContent = "Requesting offer...";

  loadingBlock.appendChild(loadingText);
  container.appendChild(loadingBlock);
}

/**
 * Display the offer in the UI
 * @param {string} offerString - The offer URL string
 * @param {HTMLElement} container - The container element to display the offer in
 */
function displayOffer(offerString, container) {
  // Clear existing content
  container.innerHTML = "";

  // Create offer display block
  const offerBlock = document.createElement("div");
  offerBlock.className = "offer-block";

  // Add title
  const title = document.createElement("strong");
  title.textContent = "Credential Offer";
  offerBlock.appendChild(title);

  // Create offer text container with copy button
  const offerTextContainer = document.createElement("div");
  offerTextContainer.className = "offer-text-container";

  const offerText = document.createElement("code");
  offerText.className = "offer-text";
  offerText.textContent = offerString;

  const copyButton = document.createElement("button");
  copyButton.className = "offer-copy-button";
  copyButton.innerHTML = "📋";
  copyButton.title = "Copy to clipboard";
  copyButton.setAttribute("aria-label", "Copy offer to clipboard");

  copyButton.addEventListener("click", () => {
    navigator.clipboard
      .writeText(offerString)
      .then(() => {
        copyButton.innerHTML = "✅";
        copyButton.setAttribute("aria-label", "Copied!");
        setTimeout(() => {
          copyButton.innerHTML = "📋";
          copyButton.setAttribute("aria-label", "Copy offer to clipboard");
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy offer", err);
        alert("Failed to copy to clipboard");
      });
  });

  offerTextContainer.appendChild(offerText);
  offerTextContainer.appendChild(copyButton);
  offerBlock.appendChild(offerTextContainer);

  // Create QR code container
  const qrContainer = document.createElement("div");
  qrContainer.id = "qr-code-container";
  offerBlock.appendChild(qrContainer);

  // Add offer block to container
  container.appendChild(offerBlock);

  // Generate QR code using QRCode.js library
  // The library should be loaded from CDN in the HTML
  if (typeof QRCode !== "undefined") {
    new QRCode(qrContainer, {
      text: offerString,
      width: 200,
      height: 200,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
    });
  } else {
    const errorPara = document.createElement('p');
    errorPara.className = 'offer-error';
    errorPara.textContent = 'QR code library not loaded';
    qrContainer.appendChild(errorPara);
    console.error(
      "QRCode library not found. Make sure to include it from CDN.",
    );
  }
}

/**
 * Initialize the offer functionality for a credential page
 * @param {Object} credentialJson - The credential JSON data
 */
function initializeOfferButton(credentialJson) {
  const importButton = document.getElementById("import-wallet-button");
  const offerContainer = document.getElementById("offer-container");

  if (!importButton || !offerContainer) {
    console.warn("Import button or offer container not found");
    return;
  }

  importButton.addEventListener("click", async (e) => {
    e.preventDefault();

    // Disable button while requesting
    importButton.style.opacity = "0.5";
    importButton.style.pointerEvents = "none";

    // Show the container with loading placeholder
    offerContainer.style.display = "block";
    displayLoadingPlaceholder(offerContainer);

    try {
      // Request the offer (async)
      const offerString = await requestOffer(credentialJson);

      // Display the offer
      displayOffer(offerString, offerContainer);
    } catch (err) {
      console.error("Failed to request offer", err);
      offerContainer.innerHTML = '';
      const errorPara = document.createElement('p');
      errorPara.className = 'offer-error';
      errorPara.textContent = 'Failed to request offer. Please try again.';
      offerContainer.appendChild(errorPara);
    } finally {
      // Re-enable button
      importButton.style.opacity = "1";
      importButton.style.pointerEvents = "auto";
    }
  });
}
