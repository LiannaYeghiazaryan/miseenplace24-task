#!/bin/sh
set -e

# Check if $UID and $GID are set, else fallback to default (1000:1000)
USER_ID=${UID:-1000}
GROUP_ID=${GID:-1000}

## Only try to fix ownership if we can write to the directory
#if [ -w /var/www ]; then
#  echo "Fixing file permissions with UID=${USER_ID} and GID=${GROUP_ID}..."
#  chown -R ${USER_ID}:${GROUP_ID} /var/www || echo "Warning: Some files could not be changed"
#else
#  echo "Skipping chown — /var/www is not writable (likely due to Windows mount)"
#fi

# Clear configurations if artisan exists
if [ -f artisan ]; then
  echo "Clearing Laravel caches..."
  php artisan config:clear || echo "Warning: Failed to clear config"
  php artisan route:clear || echo "Warning: Failed to clear routes"
  php artisan view:clear || echo "Warning: Failed to clear views"
else
  echo "Skipping Artisan commands — artisan not found"
fi

# Run the default command (e.g., php-fpm or bash)
exec "$@"
