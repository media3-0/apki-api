FROM mongo:3.4.2

COPY mongo.js /script.js

# You can set mongodb host by environment variable MONGODB_HOST (default value `mongo`)
CMD mongo apki --host ${MONGODB_HOST:-mongo} < script.js
