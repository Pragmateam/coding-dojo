FROM node:8@sha256:7b65413af120ec5328077775022c78101f103258a1876ec2f83890bce416e896

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3000

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
