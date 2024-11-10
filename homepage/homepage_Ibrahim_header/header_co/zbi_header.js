// navsearch visibility

// document.getElementById('search-icon').addEventListener('click', function() {
//     var searchBar = document.getElementById('navbar-search');
//     if (searchBar.classList.contains('active')) {
//         searchBar.classList.remove('active');
//     } else {
//         searchBar.classList.add('active');
//         searchBar.focus();
//     }
// });

// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('search-icon').addEventListener('click', function(event) {
//         event.preventDefault(); // Prevent default action of the anchor tag
//         var searchBar = document.getElementById('navbar-search');
//         var clearButton = document.getElementById('clear-search');
//         if (searchBar.classList.contains('active')) {
//             searchBar.classList.remove('active');
//             clearButton.style.display = 'none';
//         } else {
//             searchBar.classList.add('active');
//             clearButton.style.display = 'block';
//             searchBar.focus();
//         }
//     });
//
//     document.getElementById('clear-search').addEventListener('click', function() {
//         var searchBar = document.getElementById('navbar-search');
//         searchBar.value = '';
//         searchBar.classList.remove('active');
//         this.style.display = 'none';
//     });
// });

// document.getElementById('search-icon').addEventListener('click', function() {
//     var searchBar = document.getElementById('navbar-search');
//     var clearButton = document.getElementById('clear-search');
//     if (searchBar.classList.contains('active')) {
//         searchBar.classList.remove('active');
//     } else {
//         searchBar.classList.add('active');
//         searchBar.focus();
//     }
// });
//
// document.getElementById('clear-search').addEventListener('click', function() {
//     var searchBar = document.getElementById('navbar-search');
//     searchBar.value = '';
//     searchBar.classList.remove('active');
// });

document.getElementById('search-icon').addEventListener('click', function() {
    var searchBar = document.getElementById('navbar-search');
    var clearButton = document.getElementById('clear-search');
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

document.getElementById('clear-search').addEventListener('click', function() {
    var searchBar = document.getElementById('navbar-search');
    searchBar.value = '';
    searchBar.classList.remove('active');
    setTimeout(function() {
        searchBar.style.visibility = 'hidden';
        this.style.visibility = 'hidden';
    }.bind(this), 300); // Match the duration of the CSS transition
});