let arr = JSON.parse(localStorage.getItem('user')) || [];

let form = document.querySelector('form')
form.addEventListener('submit', myFunction);

function myFunction() {
    event.preventDefault();
    let name = form.name.value;

    let email = form.email.value;

    let address = form.address.value;

    let amount = form.amount.value;

    let obj = {
        name: name,
        email: email,
        adress: address,
        amount: amount,

    }


    arr.push(obj)

    localStorage.setItem('user', JSON.stringify(arr))
}