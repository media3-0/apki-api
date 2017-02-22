FROM mhart/alpine-node:7.5.0

ARG PORT=9778

RUN mkdir -p /app
WORKDIR  /app

COPY package.json /app/
RUN npm install --dev

COPY . /app/

ENV APKI_APP_PORT ${PORT}

EXPOSE ${PORT}

CMD [ "npm", "start" ]
