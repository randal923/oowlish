FROM node:latest

WORKDIR /usr/src/app/api

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 5000

CMD [ "yarn", "start" ]