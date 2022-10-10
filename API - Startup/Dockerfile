FROM node:alpine
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN cd ./frontend && npm i --legacy-peer-deps && npm run build && cd ..

RUN cd ./backend && npm ci  && cd ..

RUN mkdir -p /usr/src/app/backend/public

RUN cp -r ./frontend/build/* ./backend/public/

WORKDIR  /usr/src/app/backend

RUN npm run prebuild

RUN npm run build

EXPOSE 5001

CMD [ "npm", "run", "start:dev" ]
