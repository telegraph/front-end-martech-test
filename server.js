const express = require( 'express' );
const app = express();
const port = 3000;
const js = `${__dirname}/public/app.js`;
const style = `${__dirname}/public/style.css`;
const imagesFolder = `${__dirname}/public/images`;

const router = express.Router();

router.get( '/', ( req, res ) => {
	res.sendFile( `${__dirname}/index.html` );
});

router.get( '/app.js', ( req, res ) => {
	res.sendFile( `${js}` );
});

router.get( '/style.css', ( req, res ) => {
	res.sendFile( `${style}` );
});

router.get( '/images/:name', ( req, res ) => {
	let fileName = req.params.name;
	res.sendFile( `${imagesFolder}/${fileName}` );
});

app.use( '/', router );
app.listen( port );
