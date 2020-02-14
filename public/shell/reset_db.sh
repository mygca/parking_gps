#!/bin/bash
php bin/console doctrine:database:drop --force
php bin/console d:d:c
php bin/console d:m:m
php bin/console c:c
php bin/console csv:gareidf && echo "\n"
php bin/console csv:parking

echo "End"
clear >$(tty)