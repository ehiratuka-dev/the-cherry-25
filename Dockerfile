FROM mcr.microsoft.com/devcontainers/typescript-node:latest AS builder
WORKDIR /share/webapp
COPY . .
RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=builder /share/webapp /share/webapp