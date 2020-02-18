const { src, dest, parallel, watch } = require( 'gulp' );
const sass = require( 'gulp-sass' );
const postcss = require( 'gulp-postcss' );
const autoprefixer = require( 'autoprefixer' );
const exec = require( 'child_process' ).exec;
const wpstream = require( 'webpack-stream' );
const rootfolder = `${__dirname}/src`;
const expFolder = `${__dirname}/public/`;
const imagesFiles = [`${rootfolder}/images/*.jpg`, `${rootfolder}/images/*.png`, `${rootfolder}/images/*.svg` ];
const scssFiles = `${rootfolder}/sass/*.scss`;
const jsFiles = `${rootfolder}/js/*.js`;
const style = `${rootfolder}/sass/style.scss`;
const script = `${rootfolder}/js/app.js`;

const server = () => {
	exec( `node server.js`, ( err, stdout, stderr ) => {
		if ( err ) {
			console.error( err );
		}
		console.log( stdout );
		console.log( stderr );
	});
};

const images = () => {
	return src( imagesFiles )
		.pipe( dest( `${expFolder}/images/`, { overwrite: true }) );
};

const styles = () => {
	return src( style )
		.pipe( sass({ outputStyle: 'compressed' }).on( 'error', sass.logError ) )
		.pipe( postcss( [ autoprefixer() ] ) )
		.pipe( dest( `${expFolder}` ) );
};

const modules = () => {
	return src( script )
		.pipe( wpstream(
			{
				mode: 'production',
				output: { filename: 'app.js' },
				node: {
					__dirname: true,
					__filename: true
				},
				module: {
					rules: [
						{
							test: /\.js$/,
							use: {
								loader: 'babel-loader',
								options: {
									presets: ['@babel/preset-env'],
									plugins: ['@babel/plugin-syntax-dynamic-import']
								}
							}
						}
					]
				}
			})
		)
		.pipe( dest( `${expFolder}` ) );
};

const webwatch = () => {
	return (
		watch( jsFiles, modules ),
		watch( scssFiles, styles ),
		watch( imagesFiles, images ) );
};

const build = parallel( modules, styles, images );

exports.server = server;
exports.build = build;
exports.watch = parallel( build, webwatch );
