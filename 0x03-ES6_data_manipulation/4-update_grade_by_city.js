function updateStudentGradeByCity(students, city, newGrades) {
    return students
      .filter(function(student) {
        return student.location === city;
      })
      .map(function(student) {
        const gradeObj = newGrades.find(function(grade) {
          return grade.studentId === student.id;
        });
  
        if (gradeObj) {
          student.grade = gradeObj.grade;
        } else {
          student.grade = "N/A";
        }
  
        return student;
      });
  }