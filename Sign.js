
document.addEventListener('DOMContentLoaded', function() {
    const signupLinks = document.querySelectorAll('.login-link');

    signupLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const nextPage = link.getAttribute('href');
            const currentPage = document.querySelector('.sign');

            // Hide the current page with a transition
            currentPage.classList.add('hide');

            // Redirect to the next page after the transition duration
            setTimeout(function() {
                window.location.href = nextPage;
            }, 500); // Adjust the delay to match the transition duration
        });
    });
});


