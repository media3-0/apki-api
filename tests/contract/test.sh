#!/bin/bash

count=10
while [[ $count -ne 0 ]] ; do
  response=$(curl --write-out %{http_code} --silent --output /dev/null http://api:9778/graphql)
  if [[ $response -eq 200 ]] ; then
    count=1
  else
    echo "."
    sleep 3
  fi
  ((count--))
done

if [[ $response -eq 200 ]] ; then       # Make final determination.

  if [ "$1" == "-u" ]; then
    # update snapshots
    echo "UPDATE"
    node --harmony-async-await node_modules/.bin/jest -u
  else
    echo "NO UPDATE"
    node --harmony-async-await node_modules/.bin/jest
  fi

else
    echo "Cannot connect with server."
fi
