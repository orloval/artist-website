    // Get the current URL path without the domain
    var path = window.location.pathname;
    // Get the filename only
    var page = path.split("/").pop();

    // Select all navigation links and dropdown options
    var navLinks = document.querySelectorAll('.navigation a');
    var dropdownOptions = document.querySelector('.dropdown-nav').options;

    // Loop over each link in the navigation
    navLinks.forEach(function(link) {
        if(link.getAttribute('href') === page) {
            link.classList.add('active');
        }
    });

    var defaultOption = 'index.html';
    // Loop over each option in the dropdown
    for (var i = 0; i < dropdownOptions.length; i++) {
        if (dropdownOptions[i].value === page || (page === '' && dropdownOptions[i].value === defaultOption)) {
            dropdownOptions[i].selected = true;
            break;
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        var header = document.querySelector('.header');
        header.style.cursor = 'pointer';
        header.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    });