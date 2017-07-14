FROM node:8

COPY package.json .
RUN npm install
COPY . .

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
