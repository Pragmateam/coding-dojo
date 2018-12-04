FROM node:8@sha256:0fe5d182140baa744c84bb856d8cbabd7e1c4766d4a5ad4ef80e5656b0dd1be4

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3000

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
