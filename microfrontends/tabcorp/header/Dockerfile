FROM node:8@sha256:5a9c6cf93c5ed21d151513c6e80cec8c339412bfc029f1806c40602a2a3e80a9

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3000

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
