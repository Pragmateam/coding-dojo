FROM node:8@sha256:773480516f79e0948b02d7a06971b07bf76b08d706cf88a358b5b69dd4c83db0

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3000

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
