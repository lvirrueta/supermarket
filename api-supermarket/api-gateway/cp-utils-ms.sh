#!/bin/sh
# This script is for copying the ms-constants to another ms

# copy the constants
cp src/common/utils/proxy/constants.ts ../ms-admin/src/common/utils/proxy/constants.ts
# copy the models
cp -R src/common/models ../ms-admin/src/common
# copy the env
cp .env ../ms-admin/.env
# copy gitignore
cp .gitignore ../ms-admin/.gitignore