document.addEventListener('DOMContentLoaded', function() {
    // Load the nav.html file into the aside
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('aside.navigation').innerHTML = data;
            highlightActiveLink();
            setDropdownSelection();
            setupHeaderClick();
        });

    function highlightActiveLink() {
        var path = window.location.pathname;
        var page = path.split("/").pop();

        var navLinks = document.querySelectorAll('.navigation a');
        navLinks.forEach(function(link) {
            if (link.getAttribute('href') === page) {
                link.classList.add('active');
            }
        });
    }

    function setDropdownSelection() {
        var path = window.location.pathname;
        var page = path.split("/").pop();
        var dropdownOptions = document.querySelector('.dropdown-nav').options;
        var defaultOption = 'index.html';

        for (var i = 0; i < dropdownOptions.length; i++) {
            if (dropdownOptions[i].value === page || (page === '' && dropdownOptions[i].value === defaultOption)) {
                dropdownOptions[i].selected = true;
                break;
            }
        }
    }

    function setupHeaderClick() {
        var header = document.querySelector('.header');
        header.style.cursor = 'pointer';
        header.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
});
