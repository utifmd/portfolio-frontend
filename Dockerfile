FROM node:latest

WORKDIR /usr/app

COPY package*.json yarn.lock ./

RUN yarn

COPY . .

# ENV NODE_ENV=production

RUN yarn build

EXPOSE 3000

CMD ["yarn","start"]