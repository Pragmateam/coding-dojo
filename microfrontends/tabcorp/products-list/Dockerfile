FROM node:latest@sha256:dbb8772bdf871e62d3f79567f4d62078b26d554d4b103d33e190e4eae03eae05

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
