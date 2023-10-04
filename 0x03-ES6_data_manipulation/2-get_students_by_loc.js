function getStudentsByLocation(students, city) {
    return students.filter(function(student) {
      return student.location === city;
    });
  }
  export default getStudentsByLocation;