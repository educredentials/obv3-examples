FROM rust:1.67

WORKDIR /usr/src/myapp

RUN cargo install boon-cli --locked

ENTRYPOINT ["boon"]
