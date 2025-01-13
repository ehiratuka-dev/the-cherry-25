FROM nginx
RUN npm run build
COPY ./dist /share/webapp
COPY ./server.conf /etc/nginx/conf.d/default.conf