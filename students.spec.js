const getTopStudent = require("./students");

describe("getTopStudent function", () => {
  test.each([
    {
      students: [
        { name: "Ivan", score: 35, date: "2022-10-11" },
        { name: "Maria", score: 5, date: "2022-10-10" },
        { name: "Olga", score: 0, date: "" },
        { name: "Stepan", score: 35, date: "2022-10-12" },
        { name: "Oleg", score: 9, date: "2022-10-01" },
        { name: "Zanna", score: 15, date: "2022-10-11" },
      ],
      expected: { name: "Ivan", score: 35, date: "2022-10-11" },
    },
    {
      students: [
        { name: "Margo", score: 0, date: "2022-10-11" },
        { name: "Natalia", score: 25, date: "2022-10-10" },
        { name: "Marina", score: 25, date: "2022-10-01" },
        { name: "Dmitry", score: 25, date: "2022-10-12" },
        { name: "Denis", score: 0, date: "2022-10-02" },
        { name: "Vadimyr", score: 1, date: "2022-10-11" },
      ],
      expected: { name: "Marina", score: 25, date: "2022-10-01" },
    },
    {
      students: [
        { name: "Irina", score: 0, date: "2022-10-11" },
        { name: "Vasily", score: 0, date: "2022-10-10" },
        { name: "David", score: 0, date: "2022-10-11" },
        { name: "Kristina", score: 0, date: "2022-10-12" },
        { name: "Varvara", score: 0, date: "2022-10-01" },
        { name: "Tanya", score: 0, date: "2022-10-11" },
      ],
      expected: { name: "Varvara", score: 0, date: "2022-10-01" },
    },
    {
      students: [
        { name: "Ira", score: 10, date: "2022-10-10" },
        { name: "Vas", score: 10, date: "2022-10-10" },
        { name: "Davi", score: 0, date: "2022-10-11" },
        { name: "Kristin", score: 0, date: "2022-10-12" },
        { name: "Varvar", score: 0, date: "2022-10-01" },
        { name: "Tan", score: 0, date: "2022-10-11" },
      ],
      expected: { name: "Ira", score: 10, date: "2022-10-10" },
    },
    // добавьте больше наборов данных здесь
  ])("should return the top student", ({ students, expected }) => {
    expect(getTopStudent(students)).toEqual(expected);
  });
});
