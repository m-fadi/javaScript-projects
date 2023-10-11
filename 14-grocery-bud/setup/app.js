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

const clearBtn= document.querySelector(".clear-btn");

// ****** EVENT LISTENERS **********
let editFlag=false


const addItem = (e) => {
    e.preventDefault();
    const value = input.value;
    let id = Date.now();
    const element = document.createElement("article");
    element.classList.add("grocery-item");
    element.setAttribute('data-id' , id);
    
    localStorage.setItem(id, value)
    element.innerHTML = createItemHtml(localStorage.getItem(id));
    groceryList.appendChild(element);
    const deleteBtn = element.querySelector(".delete-btn");
    input.value=""
    deleteBtn.addEventListener("click", deleteItem);
    const editBtn = element.querySelector(".edit-btn");
    deleteBtn.addEventListener("click", deleteItem);
    editBtn.addEventListener("click", () => editItem(value));
}
const deleteItem = (e) => {
    console.log("delete")
    const element = e.target.parentElement.parentElement.parentElement;
       groceryList.removeChild(element);
};
const editItem=(value) => {
    editFlag=true

    console.log("edit",value)
    
input.value=value

}

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
