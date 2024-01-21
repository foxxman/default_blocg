FROM node:21.6.0-alpine

RUN apk update
RUN apk upgrade
RUN apk add --no-cache git

WORKDIR /app
ADD package.json package-lock.json ./
RUN npm i nodemon ts-node -g
RUN npm ci
ADD . /app

ENTRYPOINT ["npm", "run", "dev"]