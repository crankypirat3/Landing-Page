


const toggleMenu = document.getElementById("toggle-menu")
// const btn = document.querySelector(".btn")
// const menu = document.querySelector(".menu")
const emailForm = document.querySelector('#emailForm');



// Grabs the email and saves it when the user presses submit on the form
// emailForm.addEventListener('submit', (e) =>{
//     e.preventDefault();
//     const emailValue = emailForm['email'].value;
//     console.log(emailValue);
//     db.collection("user-info").add({
//         email: emailValue,
//     }).then(alert("thanks " + emailValue + " for signing up!"),
//             emailForm.reset(), 
//             location.replace('index.html')
//     );

// })
// console.log(db);




const toggle = () => {
    toggleMenu.classList.toggle("hidden")
    console.log('toggle')
}
    


   
