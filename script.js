const students = [
  {
    name: "Martin",
    lastName: "Lant",
    marks: [9, 8, null, 7, 5],
  },

  {
    name: "Francesco",
    lastName: "Portus",
    marks: [5, 4, 2, 3, 2],
  },

  {
    name: "Bill",
    lastName: "Merdoc",
    marks: [10, null, null, null, 10],
  },

  {
    name: "John",
    lastName: "Entman",
    marks: [9, 8, 9, 7, 5],
  },
];
let ul;

const main = () => {
  prepareDOMElements();
  createStudentProfiles();
};
const prepareDOMElements = () => {
  ul = document.querySelector("ul");
};

const prepareDOMEvents = () => {};

const createStudentProfiles = () => {
  students.forEach((x) => {
    const newDiv = document.createElement("div");
    const newLi = document.createElement("li");
    let name = document.createElement("p");
    name.innerHTML = x.name;
    let surname = document.createElement("p");
    surname.innerHTML = x.lastName;
    let pLectures = document.createElement("p");
    pLectures.innerHTML = `Visited Lectures : ` + countLectures(x.marks);
    let pAverage = document.createElement("p");
    pAverage.innerHTML = `Average: ` + countAverage(x.marks);
    if (countAverage(x.marks) < 5) {
      newDiv.classList.add("redborder");
      newDiv.classList.add("listDiv");
    } else {
      newDiv.classList.add("greenborder");
      newDiv.classList.add("listDiv");
    }
    newDiv.append(name, surname, pLectures, pAverage);
    newLi.append(newDiv);
    ul.append(newLi);
  });
};

const countLectures = (arr) => {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== null) {
      counter++;
    }
  }
  return counter;
};
const countAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === null) {
      sum += 0;
    } else {
      sum += arr[i];
    }
  }
  return sum / arr.length;
};
document.addEventListener("DOMContentLoaded", main);
