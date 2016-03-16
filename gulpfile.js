process.env.DISABLE_NOTIFIER = true;

var elixir = require('laravel-elixir');
var gulp = require('gulp');

elixir(function(mix) {

 //mix.phpUnit();

 mix
 	 .copy('bower_components/jquery/dist/jquery.js', 'public/assets/js/jquery.js')
     .copy('bower_components/semantic/dist/semantic.js', 'public/assets/js/semantic.js')
     .copy('bower_components/semantic/dist/semantic.css', 'public/assets/css/semantic.css')
     .sass([
        'main.scss',
     ], 'public/assets/css')
     .version([
        'public/assets/css/main.css',
        'public/assets/js/semantic.js',
        'public/assets/css/semantic.css',
     ])
 ;

});

gulp.task('fonts', function() {
 gulp.src(['bower_components/semantic-ui/dist/themes/default/assets/fonts/**/*'])
     .pipe(gulp.dest('public/build/assets/css/themes/default/assets/fonts'));
});