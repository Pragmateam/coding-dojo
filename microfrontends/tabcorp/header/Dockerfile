FROM node:8@sha256:8f3dfd9995aa665a097d3950a7abc9c242c220c72ead6bdebec2254a26178b4d

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3000

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
