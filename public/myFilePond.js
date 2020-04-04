FilePond.registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginImageResize,
  FilePondPluginFileEncode
);
FilePond.setOptions({
  stylePanelAspectRatio: 370 / 556,
  imageResizeTargetWidth: 200,
  imageResizeTargetHeight: 150,
});

FilePond.parse(document.body);

// const form = document.getElementById('pond');
// const value = form.value;
const btnSubmit = document.getElementById('submit-btn');
const btnProxy = document.getElementById('proxy-btn');
btnProxy.addEventListener('click', submitForm);

function submitForm(e) {
  //e.preventDefault();
  btnSubmit.click();
  console.log('clicked');
}
