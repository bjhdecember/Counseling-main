var input = document.querySelector('#name');
const input = document.querySelector('#email');
const input = document.querySelector('#feedback');
const form = docmument.querySelector('#form');
const submit = document.querySelector('#submitName');

var storage = sessionStorage;

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

submit.addEventListener('click', () => {
    storage.setItem('name', input.value);
    updateNameTitle();
});

submit.addEventListener('click', () => {
    storage.setItem('email', input.value);
    updateEmailTitle();
});

remove.addEventListener('click', () => {
    storage.removeItem('name'); 
    updateNameTitle();
});

remove.addEventListener('click', () => {
    storage.removeItem('email'); 
    updateEmailTitle();
});

function updateNameTitle() {
    const name = storage.getItem('name');

    const h1 = document.querySelector('#title');

    name ? h1.textContent = 'Welcome ${name}' : h1.textContent = '';
}