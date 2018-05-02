FROM node

WORKDIR /usr/src/app


COPY package.json .

RUN npm install --global nodemon
RUN npm install --global body-parser
RUN npm install --global morgan

RUN npm install

COPY . .

EXPOSE 4003

CMD ["npm","start"]