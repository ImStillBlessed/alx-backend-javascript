export default class HolbertonCourse {
  constructor(name, length, students) {
    // add types to the constructor attrebutes
    if (typeof name !== "string") {
      throw TypeError("Name must be a string");
    }
    if (typeof length !== "number") {
      throw TypeError("Length must be a number");
    }
    if (!Array.isArray(students)) {
      this._name = name;
      this._length = length;
      this._students = students;
    }
  }
}
