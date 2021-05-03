class Person {
	constructor(name, last, age, gender, skills) {
		this.name = name;
		this.last = last;
		this.age = age;
		this.gender = gender;
		this.skills = skills | [];
	}

	getFullName() {
		return `My Name is ${this.name} ${this.last} and My Age Old is ${this.age}`;
	}

	getSkills() {
		if (this.skills.length > 0) {
			this.skills.forEach((skill) => {
				return `My Skill is : ${skill}`;
			});
		} else {
			return `My Not Have a Skill`;
		}
	}

	setSkill(newSkill) {
		this.skills.push(newSkill);
	}
}

module.exports = Person;
