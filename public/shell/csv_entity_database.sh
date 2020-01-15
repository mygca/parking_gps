#!/bin/bash
options=("$@")
i=0;

echo ${options[0]}

php bin/console make:entity


for each in "${options[@]}"
do
echo "$each"
i=$((i+1))
done

echo ' '