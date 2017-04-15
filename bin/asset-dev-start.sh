#!/bin/bash
set -e

yarn install
exec npm start -- --config webpack.config.js
