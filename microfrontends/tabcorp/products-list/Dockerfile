FROM node:latest@sha256:fb2e76fa66cb9758cb1aaf3998c269cf1584d1aaa95750626d5f4c95f7ec5bc6

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
