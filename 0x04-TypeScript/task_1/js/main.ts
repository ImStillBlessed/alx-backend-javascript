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
  fullTimeEmployee: boolean = true; // Default value for fullTimeEmployee
  yearsOfExperience?: number;
  readonly location: string; // Readonly ensures it's always defined

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

    // Assign custom attribute
  }
}
