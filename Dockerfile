# specify a base image
FROM node:12.12.0-alpine as build-step

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app

EXPOSE 4200

CMD [ "npm", "run", "start" ]