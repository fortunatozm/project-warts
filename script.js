const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const botao = document.querySelector('#submit-btn');
const agree = document.querySelector('#agreement');
const enviar = document.querySelector('#butt');

function cadastro() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
enviar.addEventListener('click', cadastro);

function submit() {
  if (agree.checked) {
    botao.removeAttribute('disabled');
  } else {
    botao.setAttribute('disabled');
  }
}
agree.addEventListener('change', submit);
