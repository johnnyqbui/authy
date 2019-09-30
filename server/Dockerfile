FROM node:10.16.0

# Create directory
RUN mkdir -p /usr/src/authy/server
WORKDIR /usr/src/authy/server

# Install depedencies
COPY package.json /usr/src/authy/server/
RUN npm install

# Bundle source
COPY . /usr/src/authy/server

# Build arguments
ARG NODE_VERSION=10.16.0

# Environment
ENV NODE_VERSION $NODE_VERSION

CMD [ "npm", "start" ]