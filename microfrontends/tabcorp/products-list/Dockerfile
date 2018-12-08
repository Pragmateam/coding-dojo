FROM node:latest@sha256:a2274df21a5b5241b390a06a5b64f35f5a90e044f6d06fcb3b665b30cd60298b

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
