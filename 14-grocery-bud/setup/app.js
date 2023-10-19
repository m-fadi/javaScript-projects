// ****** SELECT ITEMS **********

// edit option

// ****** EVENT LISTENERS **********

// ****** FUNCTIONS **********

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
const form = document.querySelector(".grocery-form");
const input = document.querySelector("#grocery");
const groceryList = document.querySelector(".grocery-list");
const editBtn = document.querySelector(".edit-btn");
const submitBtn = document.querySelector(".submit-btn");
const clearBtn = document.querySelector(".clear-btn");

// ****** EVENT LISTENERS **********
let editFlag = false;
let editElement = "";

const addItem = (e) => {
    e.preventDefault();
    if (editFlag) {
        editElement.innerHTML = input.value;
        input.value = "";
        submitBtn.textContent = "submit";
        return;
    }

    const value = input.value;
    let id = Date.now();
    const element = document.createElement("article");
    element.classList.add("grocery-item");
    element.setAttribute("data-id", id);

    localStorage.setItem(id, value);
    element.innerHTML = createItemHtml(localStorage.getItem(id));
    groceryList.appendChild(element);
    const deleteBtn = element.querySelector(".delete-btn");
    input.value = "";
    deleteBtn.addEventListener("click", deleteItem);
    const editBtn = element.querySelector(".edit-btn");
    deleteBtn.addEventListener("click", deleteItem);
    editBtn.addEventListener("click", editItem);
};
const deleteItem = (e) => {
    const element = e.currentTarget.parentElement.parentElement;
    groceryList.removeChild(element);
};
const editItem = (e) => {
    editFlag = true;
    editElement = e.currentTarget.parentElement.previousElementSibling;
    submitBtn.textContent = "Edit";
    input.value = editElement.innerHTML;
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
