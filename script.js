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


   
    
        var toggleButton = document.getElementById('toggle-button');
        var iframe = document.getElementById('iframe');
    
        // Add event listener to the button
        toggleButton.addEventListener('click', function() {
            // Toggle the visibility of the iframe
            if (iframe.style.display === 'none') {
                iframe.style.display = 'block';
            } else {
                iframe.style.display = 'none';
            }
        });
      
        var iframe = document.getElementById('iframe');
        iframe.contentWindow.scrollTo(0, iframe.contentDocument.body.scrollHeight / 2);

});
