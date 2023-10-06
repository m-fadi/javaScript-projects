import menu from "./menu.js";

const btnContainer = document.querySelector(".btn-container");
const itemCard = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", () => {
    // display Menuitems by first page load
    displayMenuItems(menu);
    createBtns();
    // filtering the unique categories using reduce as in line 89 the initial value of values : values = ["all"]
    // const cat = menu.reduce((values, item) => {

    //     if (!values.includes(item.category)) {
    //        values.push(item.category);
    //     }
    //     return values;
    // },["all"]);
});

const displayMenuItems = (menuItems) => {
    let displayItem = menuItems
        .map((item) => {
            const { id, title, category, price, img, desc } = item;
            return `
         
        <article class="menu-item">
            <img src=${img} alt="" class="photo" />
            <div class="item-info">
                <header>
                    <h4>${title}</h4>
                    <h4 class="price">Price : ${price}</h4>
                </header>
                <p class="item-tex">
                    ${desc}
                </p>
            </div>
        </article>`;
        })
        .join("");

    itemCard.innerHTML = displayItem;
};

const createBtns = () => {
    const categories = [...new Set(menu.map((item) => item.category))]; // get the unique categories ==remove doubles
    categories.unshift("all"); // add the all category to the categories array

    const categoryBtn = categories
        .map((category) => {
            // create the btns
            return `
  <button class="filter-btn" data-id= ${category} type="button">${category}</button>`;
        })
        .join("");

    btnContainer.innerHTML = categoryBtn;
    const filterBtn = document.querySelectorAll(".filter-btn");
    filterBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const category = e.target.dataset.id;

            const filteredCat = menu.filter((item) => {
                return category === item.category;
            });
            category === "all"
                ? displayMenuItems(menu)
                : displayMenuItems(filteredCat);
        });
    });
};
