FROM node:0.10

WORKDIR /circleci-test

ADD . /circleci-test
RUN npm install

EXPOSE 5566
CMD npm start
