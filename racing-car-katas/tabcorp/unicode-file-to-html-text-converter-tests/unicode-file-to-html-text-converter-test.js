describe('Unicode To Html Converter', function () {

  const symbolsMap = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '\n': '<br />'
  }

  describe('UnicodeFileToHtmlTextConverter', function () {
    it('converts unicode file to HTML', function () {
      var blob = new Blob(['<'], {type : 'application/text'});
      var target = new UnicodeFileToHtmlTextConverter(blob, symbolsMap);

      target.convertToHtml().then(function (res) {
        expect(res).toEqual('&lt;');
      });

      var blob = new Blob(['>'], {type : 'application/text'});
      var target = new UnicodeFileToHtmlTextConverter(blob, symbolsMap);

      target.convertToHtml().then(function (res) {
        expect(res).toEqual('&gt;');
      });

      var blob = new Blob(['&'], {type : 'application/text'});
      var target = new UnicodeFileToHtmlTextConverter(blob, symbolsMap);

      target.convertToHtml().then(function (res) {
        expect(res).toEqual('&amp;');
      });

      var blob = new Blob(['\na\nbc\n'], {type : 'application/text'});
      var target = new UnicodeFileToHtmlTextConverter(blob, symbolsMap);

      target.convertToHtml().then(function (res) {
        expect(res).toEqual('<br />a<br />bc<br />');
      });
    });

  });

});
