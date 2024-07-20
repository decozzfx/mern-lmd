# Development
FROM node:18-alpine
WORKDIR /frontend
COPY package.json .
RUN yarn install
RUN yarn global add serve
COPY . .
EXPOSE 5173
CMD ["serve", "-s", "dist"]
