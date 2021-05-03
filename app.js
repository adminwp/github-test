let pattern = /^hello$/;

pattern = /h.llo/;

pattern = /h*llo/;

pattern = /gray?2?/;

console.log(pattern.test('gray2'));

// Bracket [] character set

pattern = /[a-z A-Z]/;

pattern = /[^a-d]/i;
pattern = /^[a-z 0-9]/i;

console.log(pattern.exec('Ali 2'));

// Brace {} Quantifire

pattern = /hel{2,5}o/;

console.log(pattern.test('hellllllo'));

// Parentheses () -- Grouping

// Write Program get one string and convert to captalize

const captalize = (str) => {
	if (str && typeof str === 'string') {
		const strSplit = str.split(' ');

		const captalizeStringArray = strSplit.map((str) => {
			const strUpper = str[0].toUpperCase();
			const getStrComplete = Array.from(str.slice(1));
			getStrComplete.unshift(strUpper);
			return getStrComplete.join('');
		});

		return captalizeStringArray.join(' ');
	}
};

const res = captalize('ehsan majid sara');

const patternLengthPassword = /^[\d+]{1,9}/;

console.log(patternLengthPassword.exec(1111111111));

