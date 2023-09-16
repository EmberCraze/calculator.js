FROM node:lts

WORKDIR /app
COPY package.json .
RUN npm install -g nodemon
RUN npm install

COPY . .

CMD ["npm", "start"]

