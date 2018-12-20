FROM node:latest@sha256:44637020442a49fd2412e954422c3b0face5272bccf2d113ca37186b38167afb

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
