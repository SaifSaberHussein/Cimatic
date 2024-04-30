
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


// function handleSubmit(event) {
//     event.preventDefault(); 

    
//     const firstName = document.querySelector('#first-name').value;
//     const secondName = document.querySelector('#second-name').value;
//     const dob = document.querySelector('#date').value;
//     const gender = document.querySelector('#gender').value;
//     const email = document.querySelector('#email').value;
//     const password = document.querySelector('#password').value;


//     const formData = {
//         firstName: firstName,
//         secondName: secondName,
//         dob: dob,
//         gender: gender,
//         email: email,
//         password: password
//     };

//     localStorage.setItem('formData', JSON.stringify(formData));
// }

// const form = document.querySelector('form');
// form.addEventListener('submit', handleSubmit);




document.querySelector(".Expand").addEventListener("click", function() {
    document.getElementById("ul").style.fontSize='35px';
});