console.log('Hello dides');

const btnSubmit = document.getElementById('submit-btn');
const btnProxy = document.getElementById('proxy-btn');
btnProxy.addEventListener('click', submitForm);
const title = document.getElementById('title');

function submitImg() {
  btnSubmit.click();
  console.log('clicked');
}

function submitForm() {
  console.log('fn sR');
  val = title.value;
  const body = { title: val };

  url = '/form';
  ajax(url, 'POST', body);
}
