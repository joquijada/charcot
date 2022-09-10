#!/bin/bash

#
# Helper script to remove S3 buckets and DynamoDB tables, so that  SST does not faile
# with "resource already exists" message when we go to redeploy
#
stage=$1

if [ $stage == 'prod' ]
  then
    exit 1, "You specified the 'prod' environment, are you crazy?!??!!??"
fi

for cmd in "aws s3 rb s3://nbtr-production-$stage" "aws s3 rm --recursive s3://cerebrum-image-zip-$stage" "aws s3 rb s3://cerebrum-image-zip-$stage" "aws s3 rb s3://nbtr-odp-staging-$stage" "aws dynamodb delete-table --table-name $stage-charcot-cerebrum-image-metadata" "aws dynamodb delete-table --table-name $stage-charcot-cerebrum-image-order"
do
  echo "Executing $cmd"
  $cmd
done