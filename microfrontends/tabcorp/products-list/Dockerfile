FROM node:latest@sha256:00a7fb3df8e94ed24f42c2920f132f06e92ea5ed69b1c5e53c4bb3d20e85a3e2

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
