var elixir = require('laravel-elixir');
var theme = 'bestow-prelaunch-blog';
elixir.config.assetsPath = './';

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Statamic theme. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass(theme + '.scss', 'css/' + theme + '.css');
    mix.scripts([
        'vendor/collage-plus.js',
        'vendor/zoom.js',
        'jabbascripts.js'
    ], './js/bestow-prelaunch-blog.js');
});