
const categoriesDiv = document.querySelector(".categories");
const items = document.querySelectorAll(".categories li");

items.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        if(item.classList.contains("success")) {
            item.classList.remove("success");
        } else {
            item.classList.add("success");
        }
    });
})

