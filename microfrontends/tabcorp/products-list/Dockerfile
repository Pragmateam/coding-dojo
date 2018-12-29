FROM node:latest@sha256:61cd485dc5caad550a890b3ee85d5be53ea44288d61b83f7dc9ac801a91f2b22

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
