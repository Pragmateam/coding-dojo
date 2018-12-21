FROM node:8@sha256:99eabb9e0762f86a95831c35eafd5e28a76f4b4922f30d12519c92599ac68f44

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3000

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
