FROM node:latest@sha256:4c42c2b2f908cdd43e833047e38ac553dfed79a51b0583bcd4550c60d35bf383

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
