FROM node:20.2-alpine
COPY . /reconcile
WORKDIR /reconcile
RUN npm install
RUN npm i -g ts-node
CMD npm run prod