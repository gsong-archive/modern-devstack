#!/bin/bash
set -e

pip install -U pip-tools
pip-sync
exec ./manage.py runserver 0.0.0.0:8000
