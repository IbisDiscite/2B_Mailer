FROM node

WORKDIR /usr/src/app

RUN npm install --global nodemon

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4003

CMD ["npm","start"]