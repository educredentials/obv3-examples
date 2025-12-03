/**
 * Offers module for credential offer generation and display
 */

/**
 * Sleep utility function
 * @param {number} ms - Milliseconds to sleep
 * @returns {Promise} Promise that resolves after the specified time
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Request an offer for a credential
 * @param {Object} credentialJson - The full JSON of the credential
 * @returns {Promise<string>} The offer URL string
 */
async function requestOffer(credentialJson) {
  // TODO: Implement actual offer creation logic
  console.log("Creating an offer for credential:", credentialJson);
  
  // Simulate async operation with 1 second delay
  await sleep(1000);
  
  // Hardcoded offer string for now
  return "openid-credential-offer://?credential_offer_uri=https%3A%2F%2Fagent.poc9.eduwallet.nl%2Fopenid4vci%2Fcredential-offer%2Fc36bb146cee7dfeb41492158a3a9877c73c58faeaef350c9d501ab02629acb16";
}

/**
 * Display a loading placeholder
 * @param {HTMLElement} container - The container element to display the placeholder in
 */
function displayLoadingPlaceholder(container) {
  container.innerHTML = '';
  
  const loadingBlock = document.createElement('div');
  loadingBlock.className = 'offer-block';
  loadingBlock.style.textAlign = 'center';
  loadingBlock.style.padding = '2rem';
  
  const loadingText = document.createElement('p');
  loadingText.textContent = 'Requesting offer...';
  loadingText.style.margin = '0';
  loadingText.style.color = '#666';
  
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
  container.innerHTML = '';
  
  // Create offer display block
  const offerBlock = document.createElement('div');
  offerBlock.className = 'offer-block';
  
  // Add title
  const title = document.createElement('strong');
  title.textContent = 'Credential Offer';
  offerBlock.appendChild(title);
  
  // Create offer text container with copy button
  const offerTextContainer = document.createElement('div');
  offerTextContainer.className = 'offer-text-container';
  
  const offerText = document.createElement('code');
  offerText.className = 'offer-text';
  offerText.textContent = offerString;
  
  const copyButton = document.createElement('button');
  copyButton.className = 'offer-copy-button';
  copyButton.innerHTML = '📋';
  copyButton.title = 'Copy to clipboard';
  
  copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(offerString).then(() => {
      copyButton.innerHTML = '✅';
      setTimeout(() => {
        copyButton.innerHTML = '📋';
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy offer', err);
      alert('Failed to copy to clipboard');
    });
  });
  
  offerTextContainer.appendChild(offerText);
  offerTextContainer.appendChild(copyButton);
  offerBlock.appendChild(offerTextContainer);
  
  // Create QR code container
  const qrContainer = document.createElement('div');
  qrContainer.id = 'qr-code-container';
  offerBlock.appendChild(qrContainer);
  
  // Add offer block to container
  container.appendChild(offerBlock);
  
  // Generate QR code using QRCode.js library
  // The library should be loaded from CDN in the HTML
  if (typeof QRCode !== 'undefined') {
    new QRCode(qrContainer, {
      text: offerString,
      width: 200,
      height: 200,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  } else {
    qrContainer.innerHTML = '<p class="qr-error">QR code library not loaded</p>';
    console.error('QRCode library not found. Make sure to include it from CDN.');
  }
}

/**
 * Initialize the offer functionality for a credential page
 * @param {Object} credentialJson - The credential JSON data
 */
function initializeOfferButton(credentialJson) {
  const importButton = document.getElementById('import-wallet-button');
  const offerContainer = document.getElementById('offer-container');
  
  if (!importButton || !offerContainer) {
    console.warn('Import button or offer container not found');
    return;
  }
  
  importButton.addEventListener('click', async (e) => {
    e.preventDefault();
    
    // Disable button while requesting
    importButton.style.opacity = '0.5';
    importButton.style.pointerEvents = 'none';
    
    // Show the container with loading placeholder
    offerContainer.style.display = 'block';
    displayLoadingPlaceholder(offerContainer);
    
    try {
      // Request the offer (async)
      const offerString = await requestOffer(credentialJson);
      
      // Display the offer
      displayOffer(offerString, offerContainer);
    } catch (err) {
      console.error('Failed to request offer', err);
      offerContainer.innerHTML = '<p style="color: red; padding: 1rem;">Failed to request offer. Please try again.</p>';
    } finally {
      // Re-enable button
      importButton.style.opacity = '1';
      importButton.style.pointerEvents = 'auto';
    }
  });
}