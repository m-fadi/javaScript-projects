// ****** SELECT ITEMS **********

// edit option

// ****** EVENT LISTENERS **********

// ****** FUNCTIONS **********

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
const input = document.querySelector("#grocery").value;
const groceryItems= document.querySelector(".grocery-item");
const editBtn= document.querySelector(".edit-btn");
const deleteBtn= document.querySelector(".delete-btn");
const clearBtn= document.querySelector(".clear-btn");
const submitBtn= document.querySelector(".submit-btn");
// ****** EVENT LISTENERS **********
const inputHandler = (e) => {
    '//e.preventDefault(); 
    const input = e.target.value;
    groceryItems.innerHTML = input;
}
submitBtn.addEventListener("click", (e) => {
    
    inputHandler(e)
})