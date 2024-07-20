# Development
FROM node:18-alpine
ENV NODE_ENV development
WORKDIR /backend
COPY . .
RUN yarn install
CMD ["yarn", "dev"]
EXPOSE 4004