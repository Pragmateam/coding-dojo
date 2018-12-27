FROM node:8@sha256:14472da5d940cc8c33cb784705fccf9ea8ab2e19acb7ceaeaaa92c45ef86b0e0

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3000

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
