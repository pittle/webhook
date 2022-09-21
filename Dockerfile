# dockerfile
# build stage
FROM node:16.16.0 as build-step
WORKDIR /auto/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-step
COPY --from=build-step /auto/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
