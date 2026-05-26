const sidebarLinks = document.querySelectorAll(".sidebar__link");

sidebarLinks.forEach((link) => {

    link.addEventListener("click", () => {

        sidebarLinks.forEach((item) => {
            item.classList.remove("sidebar__link--active");
        });

        link.classList.add("sidebar__link--active");

    });

});