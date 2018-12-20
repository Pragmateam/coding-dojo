FROM node:latest@sha256:6b265dcd740fe4d9b6e745128c31f16bc8fd3345410a0d0ff67e03253e6a5169

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
