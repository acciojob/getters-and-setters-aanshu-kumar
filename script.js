//complete this code
class Person {
	constructor(Myname,Myage){
		this.name=Myname;
		this.age=Myage;
	}
	get name
	{
		return this.name;
	}
	set age(age)
	{
		this.age=age;
	}
}

class Student extends Person {
	super();
	study{
		console.log(this.name+" is studying")
	}
}

class Teacher extends Person {
	super();
	teach{
		cnosole.log(this.name+" is teaching");
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
