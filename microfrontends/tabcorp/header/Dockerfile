FROM node:8@sha256:fecc38a3579eb06c9e447a1172b8ce703a8d4d8f122c938128dd81ef5de76ab3

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3000

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
