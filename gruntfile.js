module.exports = function(grunt) {

	grunt.initConfig({
		concurrent: {
			dev: {
				tasks: ['nodemon', 'watch'],
				options: {
					logConcurrentOutput: true
				}
			}
		},
		nodemon: {
			dev: {
				script: 'bin/startServer.js',
				options: {
					args: ['dev'],
					nodeArgs: ['--debug'],
					// omit this property if you aren't serving HTML files and  
					// don't want to open a browser tab on start 
					/*callback: function(nodemon) {
						nodemon.on('log', function(event) {
							console.log(event.colour);
						});
					},*/
					env: {
						PORT: '3000'
					},
					cwd: __dirname,
					ignore: ['node_modules/**'],
					ext: 'js,coffee',
					watch: ['server'],
					delay: 1000,
					legacyWatch: true
				}
			},
			exec: {
				options: {
					exec: 'less'
				}
			}
		},
		watch: {
			/*ejs: {
				files: ['views/page/admin/**'],
				options: {
					livereload: true
				}
			},*/
			/*js: {
				files: ['schema/**', 'routes/**', 'views/static/static/**'],
				options: {
					livereload: true
				}
			}*/
			/* 需要watch的请自行在此处填写 */
			js: {
				files: ['routes/**', 'app.js', 'bin/**', 'schema/**'],
				options: {
					livereload: true
				}
			}
		}
	})

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-concurrent');

	grunt.option('force', true);
	grunt.registerTask('default', ['concurrent']);
}