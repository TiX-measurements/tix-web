FROM node:boron-alpine AS build

RUN npm install --global yarn

COPY ./package.json /app/
COPY ./yarn.lock /app/

WORKDIR /app

RUN yarn install

COPY . /app

RUN npm run compile

# ------ final image ------

FROM nginx:stable-alpine

COPY --from=build /app/dist/ /usr/share/nginx/html
COPY ./server/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
