FROM node:alpine
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN cd ./backend && npm ci  && cd ..

RUN mkdir -p /usr/src/app/backend/public

WORKDIR  /usr/src/app/backend

RUN npm run prebuild

RUN npm run build

EXPOSE 5001

CMD [ "npm", "run", "start:dev" ]
