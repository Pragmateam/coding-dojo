FROM node:8@sha256:7b6b1a4354eaf970c9a4c6a0401f94bd57952e1c5fcfe264fc88abecea896002

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3000

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
