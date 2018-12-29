FROM node:8@sha256:e989c4ebcd291522c1933d8b8bb5e2c96b2a3963e32cdab84e9f25eb7b5ef9cd

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3000

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
