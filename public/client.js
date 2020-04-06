console.log('Hello dides');

const btnSubmit = document.getElementById('submit-btn');
const btnProxy = document.getElementById('proxy-btn');
btnProxy.addEventListener('click', submitForm);
const title = document.getElementById('title');
const hiddenInput = document.getElementById('hidden-input');

function submitImg(id) {
  hiddenInput.value = id;
  btnSubmit.click();
}

async function submitForm() {
  val = title.value;
  const body = { title: val };

  url = '/form';
  const resData = await ajax(url, 'POST', body);
  submitImg(resData._id);
}
