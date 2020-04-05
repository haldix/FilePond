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
