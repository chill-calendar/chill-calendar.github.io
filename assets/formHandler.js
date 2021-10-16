const form = document.getElementById('my-form');
const email = document.getElementById('email');
const button = document.getElementById('submit');
const formError = document.getElementById('form-error');
const formSuccess = document.getElementById('form-success');

async function handleSubmit(event) {
  event.preventDefault();
  button.disabled = true;
  button.innerText = 'Submitting...';

  const formData = new FormData();
  formData.append('email', email.value);
  formData.append('message', '');

  fetch('https://formspree.io/f/xpzkndvy', {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => {
      // button.disabled = ;
      button.innerText = 'Submit';
      form.reset();
      formSuccess.style.display = 'block';
    })
    .catch(error => {
      formError.style.display = 'block';
      button.innerText = 'Submit';
      button.disabled = false;
      form.reset();
    });
}

form.addEventListener('submit', handleSubmit);