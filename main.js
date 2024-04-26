document.addEventListener('DOMContentLoaded', () => {
  let password = document.querySelector('#password').value;
  let confirmPassword = document.querySelector('#confirmPassword').value;

  let errorMsg = document.querySelector('#Msg');

  if (password === " " && confirmPassword === " ") {
    errorMsg.innerHTML = "Passwords match";
    errorMsg.style.color = 'green';
  } else if (confirmPassword !== password) {
    errorMsg.innerHTML = "*Passwords do not match!";
    errorMsg.style.color = 'red';
  }
})