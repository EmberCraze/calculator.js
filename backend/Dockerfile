FROM node:lts

WORKDIR /app
COPY package.json /app
RUN npm install

COPY . /app

ENTRYPOINT ["npm", "start"]

