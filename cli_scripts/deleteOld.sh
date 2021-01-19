#!/bin/bash
find /var/www/_php-noise.com/public/images -name "*.png" -type f -mmin +10 -exec rm -f {} \; 
