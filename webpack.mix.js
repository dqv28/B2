let mix = require('laravel-mix');

mix.js('resources/js/main.js', 'public/js')
    .sass('resources/scss/style.scss', 'public/scss', [

    ]);