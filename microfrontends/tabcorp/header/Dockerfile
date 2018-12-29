FROM node:8@sha256:5adc5390d0f03538decf668646804d00f4637caa099ae0c4eb77337ad507511e

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3000

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
