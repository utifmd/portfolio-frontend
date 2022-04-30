FROM node:latest

WORKDIR ./var/www/html/personal

COPY ./package*.json yarn.lock ./

RUN npm install

CMD ["npm", "run", "start"]

COPY . .

EXPOSE 3000