FROM nginx
COPY dist/ /share/webapp
COPY server.conf/ /etc/nginx/conf.d/default.conf
EXPOSE 80