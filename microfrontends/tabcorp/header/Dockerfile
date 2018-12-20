FROM node:8@sha256:7ed12d4810ed02b8c908d554976062ae61f42db8252bb9e148da0bffb72fb086

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3000

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
