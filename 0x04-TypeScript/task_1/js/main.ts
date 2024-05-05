interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

class TeacherImpl implements Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean = true;
  yearsOfExperience?: number;
  readonly location: string;

  constructor(
    firstName: string,
    lastName: string,
    location: string,
    fullTimeEmployee: boolean = true,
    yearsOfExperience?: number,
    customAttributes: { [key: string]: any } = {}
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.yearsOfExperience = yearsOfExperience;
    this.location = location;
  }
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);
