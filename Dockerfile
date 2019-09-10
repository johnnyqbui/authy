FROM node:10.16.0

WORKDIR /usr/src/r3-boilerplate
COPY ./ ./
RUN npm install

CMD ["/bin/bash"]