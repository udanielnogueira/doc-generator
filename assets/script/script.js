function gerarDoc() {
  let name = document.getElementById('name').value;
  info.name = name;

  let cpf = document.getElementById('cpf').value;
  info.cpf = cpf;

  let paragraph1 = document.querySelector('.document__p1');
  let text = `O cliente ${info.name} de CPF ${info.cpf}`;
  paragraph1.textContent = text;

  const forms = document.querySelector('.forms');
  forms.classList.add('--none');

  const printBtn = document.querySelector('.printBtn');
  printBtn.classList.add('--block');
}

function printDoc() {
  const printBtn = document.querySelector('.printBtn');
  printBtn.classList.remove('--block');

  window.print();
}
