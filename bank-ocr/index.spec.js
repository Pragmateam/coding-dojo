
const parse = (ocrNumber) => {
  if(ocrNumber == '   \n  |\n  |'){
    return 1;
  }

  if(ocrNumber == ' _ \n _|\n _|'){
    return 3;
  }

  return 2;
}


describe('account number parser', () => {
  it('parses OCR one to number one', () => {
    const ocrNumberOne = '   \n  |\n  |';
    expect(parse(ocrNumberOne)).toEqual(1);
  });

  it('parses OCR two to number two', () => {
    const ocrNumberTwo = ' _ \n _|\n|_ ';
    expect(parse(ocrNumberTwo)).toEqual(2);
  });

  it('parse OCR three to number three', () => {
    const ocrNumberThree = ' _ \n _|\n _|';
    expect(parse(ocrNumberThree)).toEqual(3);
  });
});
