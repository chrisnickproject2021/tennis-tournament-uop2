const app = require('./app');
const port = process.env.PORT || '5700';

const server = app.listen(port, () => {
	console.log("Listening to port " + port)
});
