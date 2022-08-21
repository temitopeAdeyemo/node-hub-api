FROM node:16.16.0-slim

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 8000

CMD ["npm", "start"]
