FROM node

WORKDIR /usr/src/app

RUN npm install --global nodemon
RUN npm install --global body-parser
RUN npm install --global morgan

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4003

CMD ["npm","start"]