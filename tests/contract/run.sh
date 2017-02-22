#!/bin/bash

CONTAINERS_PREFIX="contract"
TESTER_CONTAINER="${CONTAINERS_PREFIX}_tester_1"

RED="\033[0;31m"
GREEN="\033[0;32m"
NC="\033[0m"

cleanup () {
  docker-compose -p ${CONTAINERS_PREFIX} down
}
trap 'cleanup ; printf "${RED}Tests Failed For Unexpected Reasons${NC}\n"' HUP INT QUIT PIPE TERM

if [ "$1" == "-u" ] ; then
  # Snapshots should be update, 
  # set environment variable TEST_ARGS with value `-u`,
  # will be passed as a argument to `test.sh`
  export TEST_ARGS="-u"
fi
docker-compose -p $CONTAINERS_PREFIX build && docker-compose -p $CONTAINERS_PREFIX up -d

if [ $? -ne 0 ] ; then
  printf "${RED}Docker Compose Failed${NC}\n"
  exit -1
fi

TEST_EXIT_CODE=`docker wait ${TESTER_CONTAINER}`
docker logs $TESTER_CONTAINER

if [ -z ${TEST_EXIT_CODE+x} ] || [ "$TEST_EXIT_CODE" -ne 0 ] ; then
  printf "${RED}Tests Failed${NC} - Exit Code: $TEST_EXIT_CODE\n"
else
  printf "${GREEN}Tests Passed${NC}\n"
fi
cleanup
exit $TEST_EXIT_CODE
