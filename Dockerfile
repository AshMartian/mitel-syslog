FROM node:4.8

ADD package.json package.json

RUN npm update
RUN npm install

ADD . .

CMD ["node", "index.js"]
