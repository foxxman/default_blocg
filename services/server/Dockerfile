FROM node:21.6.0-alpine

RUN apk update
RUN apk upgrade
RUN apk add --no-cache git

WORKDIR /app
ADD package.json package-lock.json ./
RUN npm ci
WORKDIR /app
ADD . /app

RUN npm run build

ENTRYPOINT ["npm", "start"]
