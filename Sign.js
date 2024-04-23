
document.addEventListener('DOMContentLoaded', function() {
    const signupLinks = document.querySelectorAll('.login-link');

    signupLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const nextPage = link.getAttribute('href');
            const currentPage = document.querySelector('.sign');

            currentPage.classList.add('hide');
            
            setTimeout(function() {
                window.location.href = nextPage;
            }, 500);
        });
    });
});


