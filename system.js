
    const students = [
      { ID: 1, name: 'Alice', age: 21, grade: 'A', degree: 'Btech', email: 'alice@example.com' },
      { ID: 2, name: 'Bob', age: 22, grade: 'B', degree: 'MBA', email: 'bob@example.com' },
      { ID: 3, name: 'Charlie', age: 20, grade: 'C', degree:'Arts', email: 'charlie@example.com' }
    ];

    const studentsTable = document.getElementById('studentTable');
    const studentForm = document.getElementById('studentForm');
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const gradeInput = document.getElementById('grade');
    const degreeInput = document.getElementById('degree');
    const emailInput = document.getElementById('email');
    const submitButton = document.getElementById('submitButton');

    let editStudentId = null;

    // Render students table
    function renderStudents() {
      studentTable.innerHTML = `
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Degree</th>
          <th>Grade</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      `;
      for (const student of students) {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${student.ID}</td>
          <td>${student.name}</td>
          <td>${student.email}</td>
          <td>${student.degree}</td>
          <td>${student.grade}</td>
          <td>${student.age}</td>
         
          <td>
            <span class="edit-button" onclick="editStudent(${student.ID})">&#9998;</span>
            <span class="delete-button" onclick="deleteStudent(${student.ID})">&#10060;</span>
          </td>
        `;
        studentsTable.appendChild(row);
      }
    }

    // Add or edit student
    function addEditStudent(event) {
      event.preventDefault();
      const name = nameInput.value;
      const age = parseInt(ageInput.value);
      const grade = gradeInput.value;
      const degree = degreeInput.value;
      const email = emailInput.value;

      if (editStudentId) {
        // Edit existing student
        const student = students.find(s => s.ID === editStudentId);
        if (student) {
          student.name = name;
          student.age = age;
          student.grade = grade;
          student.degree = degree;
          student.email = email;
        }
        editStudentId = null;
        submitButton.textContent = 'Add Student';
      } else {
        // Add new student
        const newStudent = {
          ID: students.length + 1,
          name,
          age,
          grade,
          degree,
          email
        };
        students.push(newStudent);
      }

      resetForm();
      renderStudents();
    }

    // Edit student
    function editStudent(studentId) {
      const student = students.find(s => s.ID === studentId);
      if (student) {
        nameInput.value = student.name;
        ageInput.value = student.age;
        gradeInput.value = student.grade;
        degreeInput.value = student.degree;
        emailInput.value = student.email;

        editStudentId = studentId;
        submitButton.textContent = 'Edit Student';
      }
    }

    // Delete student
    function deleteStudent(studentId) {
      const index = students.findIndex(s => s.ID === studentId);
      if (index !== -1) {
        students.splice(index, 1);
        renderStudents();
      }
    }

    // Reset form
    function resetForm() {
      nameInput.value = '';
      ageInput.value = '';
      gradeInput.value = '';
      degreeInput.value = '';
      emailInput.value = '';

      editStudentId = null;
      submitButton.textContent = 'Add Student';
    }

    // Event listeners
    studentForm.addEventListener('submit', addEditStudent);

    // Initial rendering
    renderStudents();
  


    
    
    
    
    