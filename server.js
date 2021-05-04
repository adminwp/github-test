// Define createServerFn Variable
const http = require('http');
const createServerFn = (req, res) => {
	const { url } = req;
	switch (url) {
		case '/': {
			res.writeHead(200, { 'Content-Type': 'text/plain' });
			res.write('Home Page');
			res.end();
		}
	}
};

// Define server Variable
const server = http.createServer(createServerFn);

// Define PORT Variable
const PORT = process.env.PORT | 3200;

// Listen server
server.listen(PORT, () => {
	console.log(`Server Running On Port ${PORT}`);
});
