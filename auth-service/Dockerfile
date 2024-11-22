FROM node:20.18.0-alpine3.19

WORKDIR /usr/src/app

COPY package*.json .

RUN yarn install

COPY . .

CMD [ "yarn", "start:dev" ]