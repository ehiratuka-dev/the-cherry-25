FROM mcr.microsoft.com/devcontainers/typescript-node:latest
WORKDIR /share/webapp
ADD https://github.com/ehiratuka-dev/the-cherry-25.git ./
RUN npm install
RUN npm run build