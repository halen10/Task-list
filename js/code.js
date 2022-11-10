//create const
const input = document.querySelector(".container__input");
const button = document.querySelector(".container__button");
const container = document.querySelector(".container__app");

button.addEventListener("click", (e) => {
  //do not refresh the site
  e.preventDefault();
  if (input.value !== "") {
    //create element
    let item = document.createElement("div");
    item.className = "container__item";

    //create a text element
    let text = document.createTextNode(input.value);
    text.className = "container__text";

    //create container icons
    let icons = document.createElement("div");
    icons.className = "container__icons";

    //create delete icon
    let erase = document.createElement("i");
    erase.className = "container__delete fa-solid fa-trash";

    //delete event
    erase.addEventListener("click", (e) => {
      let confirmation = confirm(
        "Are you sure that you want delete the element?"
      );
      if (confirmation) {
        item.remove();
        alert("You deleted the element successful");
      }
    });

    //add elements to the container
    icons.appendChild(erase);
    item.appendChild(text);
    item.appendChild(icons);
    container.appendChild(item);
  } else {
    alert("You should fill the field");
  }
  //clear input
  input.value = "";
});
