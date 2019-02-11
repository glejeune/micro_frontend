FROM node:10.15

RUN mkdir -p /seo_service
WORKDIR /seo_service

COPY package.json /seo_service/
COPY package-lock.json /seo_service/
RUN npm install

COPY ./app /seo_service/app

EXPOSE 4000
ENV DEBUG=seo_service:*
CMD [ "./node_modules/.bin/nodemon", "--watch", "./app", "--exec", "npm", "start" ]
