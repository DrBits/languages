FROM node:16-alpine as build
WORKDIR /app
COPY . /app/

# prepare for build
RUN npm install --silent
RUN npm run build


# move build to new container
FROM node:16-alpine
WORKDIR /app

COPY --from=build /app/build /app/
COPY package.json /app/package.json

RUN npm install --silent
RUN apk add --no-cache bash


# expose port
EXPOSE 5500 