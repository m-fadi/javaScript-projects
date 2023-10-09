// ****** SELECT ITEMS **********

// edit option

// ****** EVENT LISTENERS **********

// ****** FUNCTIONS **********

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
const form = document.querySelector(".grocery-form");
const input = document.querySelector("#grocery");
const groceryList= document.querySelector(".grocery-list");
const editBtn= document.querySelector(".edit-btn");
;
const clearBtn= document.querySelector(".clear-btn");

// ****** EVENT LISTENERS **********



const addItem = (e) => {
    e.preventDefault();
    const value = input.value;
    const element = document.createElement("article");
    element.classList.add("grocery-item");
    console.log(element)
    element.innerHTML= createItemHtml(value)
    groceryList.appendChild(element);
    const deleteBtn = document.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);
}
const deleteItem = (e) => {
    const element = e.target.parentElement.parentElement;
    console.log("element", element);
    groceryList.removeChild(element);
};
form.addEventListener("submit", addItem);



const createItemHtml = (value) => {
    return `<p class="title">${value}</p>
                        <div class="btn-container">
                            <button class="edit-btn" type="button">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="delete-btn" type="button">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>`;
};
