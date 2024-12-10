function getTopStudent(students) {
  let topStudent = null;

  for (let student of students) {
    if (!topStudent || student.score > topStudent.score) {
      topStudent = student;
    }
    // В случае, если у студентов одинаковые баллы, выбираем того, кто сдал работу раньше
    else if (
      student.score === topStudent.score &&
      new Date(student.date) < new Date(topStudent.date)
    ) {
      topStudent = student;
    }
  }

  return topStudent;
}

module.exports = getTopStudent;
