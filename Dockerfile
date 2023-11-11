FROM node:lts-bullseye as build
ARG UID
ARG GID

RUN apt-get update && apt-get install -y sudo && apt-get clean all && \
    adduser --uid $UID --gid $GID --disabled-password --gecos "" george && \
    echo 'george ALL=(ALL) NOPASSWD: ALL' >> /etc/sudoers

WORKDIR /app
RUN chmod 777 /app
USER george

COPY package*.json ./
COPY babel.config.js .
COPY docusaurus.config.js .
COPY sidebars.js .

RUN npm install

COPY docs docs
COPY src src
COPY static static

RUN npm run build

# FROM nginx:stable-alpine
# COPY --from=build /app/build /usr/share/nginx/html
# COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["npm", "run", "docusaurus", "serve", "--", "--host", "0.0.0.0"]
# CMD ["npm", "run", "start", "--poll", "1000", "--", "--host", "0.0.0.0"]
# CMD ["nginx", "-g", "daemon off;"]
