# Uncomment for manual running Development
# FROM node:18-alpine
# ENV NODE_ENV development
# WORKDIR /backend
# COPY . .
# RUN yarn install
# CMD ["yarn", "dev"]
# EXPOSE 4004

FROM node:18-alpine
WORKDIR /backend
COPY package*.json /backend/
RUN yarn install
COPY . /backend/
EXPOSE 4004
CMD ["yarn", "dev"]