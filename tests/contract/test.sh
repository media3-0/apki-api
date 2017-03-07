#!/bin/bash

count=10                              # Maximum number to try.
while [[ $count -ne 0 ]] ; do
  ping -c 1 api                          # Try once.
  rc=$?
  if [[ $rc -eq 0 ]] ; then
    count=1                      # If okay, flag to exit loop.
  else
    sleep 5
  fi
  count=count-1                  # So we don't go forever.
done

if [[ $rc -eq 0 ]] ; then                  # Make final determination.

  if [ "$1" == "-u" ]; then
    # update snapshots
    echo "UPDATE"
    node --harmony-async-await node_modules/.bin/jest -u
  else
    echo "NO UPDATE"
    node --harmony-async-await node_modules/.bin/jest
  fi

else
    echo "Tests failed."
fi
