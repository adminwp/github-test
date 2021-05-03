class GitHube {
	constructor(url) {
		this.url = url;
		console.log('Create a Instance of GitHube Constructor');
	}

	async getData() {
		const data = await fetch(this.url);
		return data;
	}
}

module.exports = GitHube;
