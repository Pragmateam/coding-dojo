FROM node:8@sha256:d79686b7ff9c9c5342639f374fd1aa887c01b5dd15f34e76697fd23dc71dd58b

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3000

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
