FROM node:latest@sha256:f059966ce5c969252470249768eaf1c3a1879519869c19c399ea12636149e621

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
