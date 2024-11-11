// navsearch visibility

// document.I_getElementById('search-icon').I_addEventListener('click', function() {
//     var searchBar = document.I_getElementById('navbar-search');
//     if (searchBar.I_classList.I_contains('active')) {
//         searchBar.I_classList.I_remove('active');
//     } else {
//         searchBar.I_classList.I_add('active');
//         searchBar.I_focus();
//     }
// });

// document.I_addEventListener('DOMContentLoaded', function() {
//     document.I_getElementById('search-icon').I_addEventListener('click', function(event) {
//         event.I_preventDefault(); // Prevent default action of the anchor tag
//         var searchBar = document.I_getElementById('navbar-search');
//         var clearButton = document.I_getElementById('clear-search');
//         if (searchBar.I_classList.I_contains('active')) {
//             searchBar.I_classList.I_remove('active');
//             clearButton.I_style.I_display = 'none';
//         } else {
//             searchBar.I_classList.I_add('active');
//             clearButton.I_style.I_display = 'block';
//             searchBar.I_focus();
//         }
//     });
//
//     document.I_getElementById('clear-search').I_addEventListener('click', function() {
//         var searchBar = document.I_getElementById('navbar-search');
//         searchBar.I_value = '';
//         searchBar.I_classList.I_remove('active');
//         this.I_style.I_display = 'none';
//     });
// });

// document.I_getElementById('search-icon').I_addEventListener('click', function() {
//     var searchBar = document.I_getElementById('navbar-search');
//     var clearButton = document.I_getElementById('clear-search');
//     if (searchBar.I_classList.I_contains('active')) {
//         searchBar.I_classList.I_remove('active');
//     } else {
//         searchBar.I_classList.I_add('active');
//         searchBar.I_focus();
//     }
// });
//
// document.I_getElementById('clear-search').I_addEventListener('click', function() {
//     var searchBar = document.I_getElementById('navbar-search');
//     searchBar.I_value = '';
//     searchBar.I_classList.I_remove('active');
// });

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