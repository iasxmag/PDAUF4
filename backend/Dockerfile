
FROM php:8.2-fpm


RUN apt-get update && apt-get install -y \
    git unzip libzip-dev libpng-dev libonig-dev libpq-dev curl zip \
    && docker-php-ext-install pdo pdo_mysql pdo_pgsql zip mbstring exif pcntl bcmath 


COPY --from=composer:2 /usr/bin/composer /usr/bin/composer 


WORKDIR /var/www


COPY . /var/www 


RUN mkdir -p /var/www/storage/framework/sessions \
    && mkdir -p /var/www/storage/framework/views \
    && mkdir -p /var/www/storage/framework/cache \
    && mkdir -p /var/www/bootstrap/cache


RUN composer install --no-dev --optimize-autoloader 


RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache 


EXPOSE 9000
CMD ["php-fpm"] 