#!/bin/bash

if [ "$1" == "-u" ]; then
  # update snapshots
  echo "UPDATE"
  node --harmony-async-await node_modules/.bin/jest -u
else
  echo "NO UPDATE"
  node --harmony-async-await node_modules/.bin/jest
fi

