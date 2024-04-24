document.addEventListener('DOMContentLoaded', () => {


    // JavaScript for dropdown interaction
    const arrow = document.getElementById('dropdownarrow');
    const menu = document.getElementById('dropdownmenu');

    arrow.addEventListener('click', () => {

        if (menu.classList.contains('active')) {
            menu.classList.remove('active')
        } else {

            menu.classList.add('active');
        }
    });



});

