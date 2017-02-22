FROM mhart/alpine-node:7.5.0

RUN mkdir -p /contract
WORKDIR /contract

COPY package.json /contract/
RUN npm install

COPY . /contract/

VOLUME /contract/__snapshots__/

CMD [ "sh", "test.sh" ]
