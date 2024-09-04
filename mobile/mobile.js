window.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const menuItems = document.querySelectorAll('.menunav > li > a');

    // sổ menu xuống
    hamburger.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
    });

    // xử lí dropdown
    menuItems.forEach(function(menuItem) {
        menuItem.addEventListener('click', function(event) {
            const parentLi = this.parentElement;
            const dropdown = parentLi.querySelector('.dropdown');

            if (dropdown) {
                event.preventDefault(); // xử lí href

                // hiển thị của menu con
                parentLi.classList.toggle('active');

                //  đóng các dropdown khác đang mở
                menuItems.forEach(function(otherItem) {
                    if (otherItem !== menuItem) {
                        otherItem.parentElement.classList.remove('active');
                    }
                });
            }
        });
    });
});