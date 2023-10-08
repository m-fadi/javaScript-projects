// ****** SELECT ITEMS **********

// edit option

// ****** EVENT LISTENERS **********

// ****** FUNCTIONS **********

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
const input = document.querySelector("#grocery");
const groceryList= document.querySelector(".grocery-list");
const editBtn= document.querySelector(".edit-btn");
;
const clearBtn= document.querySelector(".clear-btn");
const submitBtn= document.querySelector(".submit-btn");
// ****** EVENT LISTENERS **********


const deleteBtn = document.querySelectorAll(".delete-btn");

clearBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(deleteBtn);
    groceryList.innerHTML=""
    
});

// deleteBtn.addEventListener("click", (e) => {

// })


const addGroceryItem = (item) => {
    
    return `
                        <p class="title">${item}</p>
                        <div class="btn-container">
                            <button class="edit-btn" type="button">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="delete-btn" type="button">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    `
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const element = document.createElement("article");
    element.innerHTML = addGroceryItem(input.value);
    groceryList.appendChild(element);
    input.value = "";
    console.log(deleteBtn);
});