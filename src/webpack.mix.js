let mix = require('laravel-mix')

mix.ts('assets/ts/app.ts', 'public/js')
  .sass('assets/sass/app.scss', 'public/css')
  .setPublicPath('public')
