const all_shapes = document.querySelector(".all_shapes");
const triangle = document.querySelector(".triangle");
const circle = document.querySelector(".circle");
const rectangle = document.querySelector(".rectangle");
const square = document.querySelector(".square");

//shapes formulas and calculations input
const triangle_calc = document.querySelector("#triangle");
const circle_calc = document.querySelector("#circle");
const rectangle_calc = document.querySelector("#rectangle");
const square_calc = document.querySelector("#square");
const calc_area = document.querySelector(".calc_area");
let total_area = document.querySelector(".total-area");
const submit_btn = document.querySelector(".submit-btn");



all_shapes.addEventListener("click", (e) => {
   
  const value = e.target.value;

  switch (value) {
    case "select":
      triangle_calc.classList.add("hidden");
      circle_calc.classList.add("hidden");
      rectangle_calc.classList.add("hidden");
      square_calc.classList.add("hidden");
      submit_btn.classList.add("hidden");
      break;

    case "select":
      triangle_calc.classList.add("hidden");
      circle_calc.classList.add("hidden");
      rectangle_calc.classList.add("hidden");
      square_calc.classList.add("hidden");
      submit_btn.classList.add("hidden");
      break;

    case "triangle":
      triangle_calc.classList.remove("hidden");
      circle_calc.classList.add("hidden");
      rectangle_calc.classList.add("hidden");
      square_calc.classList.add("hidden");
      submit_btn.classList.remove("hidden");
      break;

    case "circle":
      circle_calc.classList.remove("hidden");
      triangle_calc.classList.add("hidden");
      rectangle_calc.classList.add("hidden");
      square_calc.classList.add("hidden");

      break;

    case "rectangle":
      rectangle_calc.classList.remove("hidden");
      triangle_calc.classList.add("hidden");
      circle_calc.classList.add("hidden");
      square_calc.classList.add("hidden");

      break;

    case "square":
      square_calc.classList.remove("hidden");
      circle_calc.classList.add("hidden");
      triangle_calc.classList.add("hidden");
      rectangle_calc.classList.add("hidden");

      break;

    default:
      console.log("smile");
      break;
  }
});

calc_area.addEventListener("click", (e) => {
  e.preventDefault();
  const shape = all_shapes.value;

  let area = 0;
  switch (shape) {

    case "select":
        location.reload()
        break;

    case "triangle":
      let triangle_base = document.querySelector(".triangle_base").value;
      let triangle_height = document.querySelector(".triangle_height").value;

      area = 0.5 * (triangle_base * triangle_height);
      total_area.innerHTML = "total area =" + area;

      calc_area.classList.add("visible");
      break;

    case "circle":
      let circle_radius = document.querySelector(".circle_radius").value;
      area = Math.PI * (circle_radius * 2);
      total_area.innerHTML = "total area =" + area;

      calc_area.classList.add("visible");

      break;

    case "rectangle":
      let rectangle_length = document.querySelector(".rectangle_length").value;
      let rectangle_breadth =
        document.querySelector(".rectangle_breadth").value;

      area = rectangle_length * rectangle_breadth;
      total_area.innerHTML = "total area =" + area;

      calc_area.classList.add("visible");
      break;

    case "square":
      let square_side = document.querySelector(".square_side").value;

      area = square_side * square_side;
      total_area.innerHTML = "total area = " + area;

      calc_area.classList.add("visible");
      break;

    default:
      console.log("smile");
      break;
  }

  
});
