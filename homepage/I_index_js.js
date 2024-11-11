document.getElementById('I_search-icon').addEventListener('click', function() {
    var searchBar = document.getElementById('I_navbar-search');
    var clearButton = document.getElementById('I_clear-search');
    if (searchBar.classList.contains('active')) {
        searchBar.classList.remove('active');
        setTimeout(function() {
            searchBar.style.visibility = 'hidden';
            clearButton.style.visibility = 'hidden';
        }, 300); // Match the duration of the CSS transition
    } else {
        searchBar.classList.add('active');
        searchBar.style.visibility = 'visible';
        clearButton.style.visibility = 'visible';
        searchBar.focus();
    }
});

document.getElementById('I_clear-search').addEventListener('click', function() {
    var searchBar = document.getElementById('I_navbar-search');
    searchBar.value = '';
    searchBar.classList.remove('active');
    setTimeout(function() {
        searchBar.style.visibility = 'hidden';
        this.style.visibility = 'hidden';
    }.bind(this), 300); // Match the duration of the CSS transition
});