FROM node:8@sha256:6b2c3d78f4e77fb1ef1e3058affdd1d3ba0b319b5eaf479167672914e555e346

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3000

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
