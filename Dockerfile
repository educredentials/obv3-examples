FROM rust:1.67

WORKDIR /usr/src/myapp

RUN apt-get update && apt-get install -y jq

RUN cargo install boon-cli --locked

ENTRYPOINT ["boon"]
