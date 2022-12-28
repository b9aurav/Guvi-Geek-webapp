FROM node:16-alpine
WORKDIR /app

COPY ["package-lock.json", "package.json", "./"]
RUN npm ci && npm cache clean --force
COPY . ./

EXPOSE 8000
CMD [ "node", "server.js" ]do