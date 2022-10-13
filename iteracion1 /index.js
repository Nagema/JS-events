// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click

const button$$ = document.createElement("button");
button$$.id = "btnToClick";
button$$.textContent = "click me";

document.body.appendChild(button$$);

button$$.addEventListener("click", (event) => {
  console.log(event);
});

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const input$$ = document.createElement("input");
input$$.id = "btnFocus";
input$$.type = "text";
// input$$.textContent = "focus on me";

document.body.appendChild(input$$);

input$$.addEventListener("focus", (event) => {
  console.log(event.target.value);
});

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const input2$$ = document.createElement("input");
input2$$.id = "btnFocus";
input2$$.type = "text";
// input$$.textContent = "focus on me";

document.body.appendChild(input2$$);

input2$$.addEventListener("input", (event) => {
  console.log(event.target.value);
});
