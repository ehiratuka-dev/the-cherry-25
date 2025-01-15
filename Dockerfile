FROM nginx
COPY package*.json /share/webapp
COPY dist/ /share/webapp
COPY server.conf/ /etc/nginx/conf.d/default.conf
RUN npm install
EXPOSE 80