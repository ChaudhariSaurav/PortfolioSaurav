document.getElementById('mobile-menu').addEventListener('click', function() {
    var nav = document.querySelector('#navbar ul');
    nav.classList.toggle('active');
});

function collapseNavbar() {
    // Collapse the navbar if it's expanded
    var navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
    }
}
