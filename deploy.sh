#!/bin/sh

set -e
rm -rf public/
hugo
rsync --checksum --recursive --verbose --human-readable --delete public/ xyz:/srv/http/idrissi.eu
