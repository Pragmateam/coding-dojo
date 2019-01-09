FROM node:latest@sha256:5ea9b2d04e1da959087d93289bdcfa5011c3a173bddf3eaf98553676d28b8f63

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
