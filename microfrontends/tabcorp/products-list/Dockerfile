FROM node:latest@sha256:fa9ac2ee6b4bab070e669f5a88da97cad75e9ed6fa785a5b3dc22b42d6c41149

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
