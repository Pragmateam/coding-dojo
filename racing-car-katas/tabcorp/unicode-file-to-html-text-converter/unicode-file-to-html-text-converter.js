UnicodeFileToHtmlTextConverter = function(fileBlob, symbolsMap) {
  this._fileBlob = fileBlob;
  this._symbolsMap = symbolsMap;
};

UnicodeFileToHtmlTextConverter.prototype.convertToHtml = function() {
  return new Promise((resolve, reject) => {
    var fileReader = new FileReader();
    fileReader.onload = (evt) => {
      var text = evt.target.result;
      var htmlLines = this._basicHtmlEncode(text);
      resolve(htmlLines);
    };
    fileReader.readAsText(this._fileBlob);
  });
};

UnicodeFileToHtmlTextConverter.prototype._basicHtmlEncode = function (source) {
  var result = '';

  for (let i=0, characterToConvert; characterToConvert = source.charAt(i); i++) {
    result += this._symbolsMap[characterToConvert] || characterToConvert;
  }

  return result;
};
