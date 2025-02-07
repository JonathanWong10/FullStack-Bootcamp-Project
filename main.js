function welcome(){
    alert("Welcome to my webpage");
}

let contactForm = document.getElementById('contact');

contactForm.addEventListener('submit', function(event){
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    switch(true) {
        case name.length < 5:
            alert('Name should contain at least 5 characters');
            break;
        
        case !email.includes('@'):
            alert('Email is invalid');
            break;

        default:
            alert('Success');
            breaak;
    }

});

