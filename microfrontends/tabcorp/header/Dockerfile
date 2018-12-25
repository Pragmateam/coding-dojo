FROM node:8@sha256:c2bf519e9ccf3b24dbd2465cb5e2022f02e2d59c773df7cb1819fb9e665d6e85

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3000

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
