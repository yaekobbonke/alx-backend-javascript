class HolbertonCourse {
    constructor(name, length, students) {
      this._name = "";
      this._length = 0;
      this._students = [];
  
      if (typeof name === "string") {
        this._name = name;
      } else {
        throw new Error("Name must be a string");
      }
  
      if (typeof length === "number") {
        this._length = length;
      } else {
        throw new Error("Length must be a number");
      }
  
      if (Array.isArray(students) && students.every((student) => typeof student === "string")) {
        this._students = students;
      } else {
        throw new Error("Students must be an array of strings");
      }
    }
  
    get name() {
      return this._name;
    }
  
    set name(newName) {
      if (typeof newName === "string") {
        this._name = newName;
      } else {
        throw new Error("Name must be a string");
      }
    }
  
    get length() {
      return this._length;
    }
  
    set length(newLength) {
      if (typeof newLength === "number") {
        this._length = newLength;
      } else {
        throw new Error("Length must be a number");
      }
    }
  
    get students() {
      return this._students;
    }
  
    set students(newStudents) {
      if (Array.isArray(newStudents) && newStudents.every((student) => typeof student === "string")) {
        this._students = newStudents;
      } else {
        throw new Error("Students must be an array of strings");
      }
    }
  }