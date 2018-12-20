FROM node:8@sha256:024e3fddbd8fbc018ad7fe2430106dc27db070b52f4c7e960916241c2ca9e314

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3000

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
