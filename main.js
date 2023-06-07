
const categoriesListItems = document.querySelectorAll(".categories li");

categoriesListItems.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        if(item.classList.contains("success")){
            item.classList.remove("success");
        } else {
            item.classList.add("success");
        }
    })
})