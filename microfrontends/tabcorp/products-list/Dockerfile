FROM node:latest@sha256:78d1b3da7879fd803aa730cd3960f66c94e66bdd1caf13497a50a0391a8b57ca

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
