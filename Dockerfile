FROM node:16-alpine

WORKDIR /app

RUN apk add --no-cache bash
RUN wget -O /bin/wait-for-it.sh https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh
RUN chmod +x /bin/wait-for-it.sh

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000
