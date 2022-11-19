import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

// const user = {
//     email: refs.input.value,
//     message: refs.textarea.value,
// };

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));
// refs.input.addEventListener('input', throttle(onTextareaInput, 500));
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log({
        email: refs.input.value,
        message: refs.textarea.value,
    });
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(evt) {
    const user = {
        email: refs.input.value,
        message: refs.textarea.value,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    
}

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        refs.textarea.value = savedMessage;
    }
}