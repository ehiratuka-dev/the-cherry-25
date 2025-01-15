FROM mcr.microsoft.com/devcontainers/typescript-node:latest AS builder
WORKDIR /share/webapp
RUN apt-get update && apt-get install -y git
RUN git clone https://github.com/ehiratuka-dev/the-cherry-25.git ./
RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=builder /share/webapp/dist /usr/share/nginx/html