# syntax=docker/dockerfile:1

ARG NODE_VERSION=21.4.0

FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV production

WORKDIR /usr/src/app

# Copy package.json and package-lock.json before other files
# for better Docker layer caching.
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source files into the image.
COPY . .

RUN npx prisma generate

# Expose the port that the application listens on.
EXPOSE 8000

# Run the application.
CMD npm run start:docker
