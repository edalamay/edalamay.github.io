let mix = require('laravel-mix');
mix.babel([
		'node_modules/bootstrap/dist/js/bootstrap.min.js',
		'node_modules/body-scroll-lock/lib/bodyScrollLock.min.js',
		'resources/js/app.js',
		'resources/js/raiderio-api.js'
	], 'docs/js/app.js')
	.sass('resources/scss/app.scss', 'docs/css/')
	.copy('node_modules/bootstrap/dist/css/bootstrap.min.css','docs/css/')
	.copy('resources/js/*.json','docs/js/')
	.options({
		processCssUrls: false
	})
	.browserSync({
		proxy: "https://commit-guild.localhost/",
		ghostMode: false,
		files: [
			"./docs/*.html",
			"./resources/js/**/*.js",
			"./resources/js/**/*.json",
			"./resources/scss/**/*.scss",
			"./docs/img/**/*.+(png|jpg|svg)",
			"./**/*.+(html|php)"
		]
	});