FROM node:latest@sha256:bcba4724dfaf8cb50598af92de710841d64565465ed86439711acfa59a3b6948

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
