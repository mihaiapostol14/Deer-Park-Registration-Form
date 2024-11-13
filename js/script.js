const ButtonEye = document.querySelectorAll('.eye')
const PasswordInput = document.querySelectorAll('.password')

ButtonEye.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const input = PasswordInput[index]
    if (input.type === 'password') {
      input.type = 'text'
      btn.classList.replace('fa-eye-slash', 'fa-eye')
    } else {
      input.type = 'password'
      btn.classList.replace('fa-eye', 'fa-eye-slash')
    }
  })
})
