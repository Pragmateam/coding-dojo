FROM node:8@sha256:c39babecddcccec897e4f07dbe405a093e6a9bbe12ca34fd4ed1f8cfaf781929

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3000

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
