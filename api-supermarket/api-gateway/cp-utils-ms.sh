#!/bin/sh
# This script is for copying the ms-constants to another ms

# copy the constants
cp -R src/common/utils/proxy/constants.ts ../ms-admin/src/common/utils/proxy/constants.ts
cp -R src/common/utils/proxy/constants.ts ../ms-manager/src/common/utils/proxy/constants.ts
cp -R src/common/utils/proxy/constants.ts ../auth/src/common/utils/proxy/constants.ts
# copy the models
cp -R src/common/models ../ms-admin/src/common
cp -R src/common/models ../ms-manager/src/common
cp -R src/common/models ../auth/src/common
# copy entities
cp -R src/common/entities ../ms-admin/src/common
cp -R src/common/entities ../ms-manager/src/common
cp -R src/common/entities ../auth/src/common
# copy the env
cp .env ../ms-admin/.env
cp .env ../ms-manager/.env
cp .env ../auth/.env
# copy gitignore
cp .gitignore ../ms-admin/.gitignore
cp .gitignore ../ms-manager/.gitignore
cp .gitignore ../auth/.gitignore