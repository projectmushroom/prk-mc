# build stage
FROM node:lts-alpine as build-stage
WORKDIR /client
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

# production stage
FROM node:14 as production-stage
WORKDIR /server
COPY /server ./
RUN npm install
COPY --from=build-stage /client/dist ./views

EXPOSE 8080
CMD [ "node", "server.js" ]