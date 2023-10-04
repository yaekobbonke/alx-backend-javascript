interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: "Yaekob",
    lastName: "Bonke",
    age: 33,
    location: "Wolaita sodo",
  };
  
  const student2: Student = {
    firstName: "Fikadu",
    lastName: "Tesema",
    age: 35,
    location: "Hosana",
  };
  
  const studentsList: Student[] = [student1, student2];
  
 
  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");
  
  studentsList.forEach((student) => {
    const row = tableBody.insertRow();
  
    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();
  
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  });
  
  table.appendChild(tableBody);
  document.body.appendChild(table);