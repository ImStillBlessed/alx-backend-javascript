export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== "string") {
      throw TypeError("Name must be a string");
    } else if (typeof length !== "number") {
      throw TypeError("Length must be a number");
    } else if (!Array.isArray(students)) {
      throw TypeError("Students must be an array");
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }
  get name() {
    return this._name;
  }
  get length() {
    return this._length;
  }
  get students() {
    return this._students;
  }
}
