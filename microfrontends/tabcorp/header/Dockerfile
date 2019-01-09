FROM node:8@sha256:d1a22a5daa90746ce18454fd456089de46382c5f92afc49677e07d15d901ed9a

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3000

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
