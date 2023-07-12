FROM node:lts-bullseye

WORKDIR /app

CMD ["npm", "start", "--", "--host", "0.0.0.0"]
