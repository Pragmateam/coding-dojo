const doTest = productName => ({
  description, initialQuality, initialSellIn, propertyToTest, expectedValue
}) => {
  it(description, () => {
    const gildedRose = new Shop([ new Item(productName, initialSellIn, initialQuality) ]);
    const items = gildedRose.updateItemProperties();
    expect(items[0][propertyToTest]).toEqual(expectedValue);
  });
}

describe("Gilded Rose", () => {
  describe('regular items', () => {
    const testRegularItem = doTest("foo");

    testRegularItem({
      description: "should decrease quality by 1 per day",
      initialQuality: 2,
      initialSellIn: 2,
      propertyToTest: 'quality',
      expectedValue: 1
    });

    testRegularItem({
      description: "should decrease sellIn by 1 per day",
      initialQuality: 2,
      initialSellIn: 2,
      propertyToTest: 'sellIn',
      expectedValue: 1
    });

    testRegularItem({
      description: "should never have negative quality",
      initialQuality: 0,
      initialSellIn: 1,
      propertyToTest: 'quality',
      expectedValue: 0
    });

    describe('after sell by date has passed', () => {
      testRegularItem({
        description: "should decrease quality twice as fast",
        initialQuality: 8,
        initialSellIn: 0,
        propertyToTest: 'quality',
        expectedValue: 6
      });
    });
  });

  describe('aged brie item', () => {
    const testAgedBrie = doTest("Aged Brie");

    testAgedBrie({
      description: "should increase quality by 1 per day",
      initialQuality: 2,
      initialSellIn: 2,
      propertyToTest: 'quality',
      expectedValue: 3
    });

    //open a pull request
    testAgedBrie({
      description: "should never have quality over 50",
      initialQuality: 50,
      initialSellIn: 1,
      propertyToTest: 'quality',
      expectedValue: 50
    });
  });

  describe('sulfuras item', () => {
    const testSulfuras = doTest("Sulfuras, Hand of Ragnaros");

    testSulfuras({
      description: "should not decrease in quality",
      initialQuality: 80,
      initialSellIn: 2,
      propertyToTest: 'quality',
      expectedValue: 80
    });

    testSulfuras({
      description: "should not decrease in sellIn value",
      initialQuality: 80,
      initialSellIn: 2,
      propertyToTest: 'sellIn',
      expectedValue: 2
    });
  });

  describe('backstage pass items', () => {
    const testBackstagePasses = doTest("Backstage passes to a TAFKAL80ETC concert");

    testBackstagePasses({
      description: "should increase quality by 2 per day if 10 days left to concert",
      initialQuality: 12,
      initialSellIn: 10,
      propertyToTest: 'quality',
      expectedValue: 14
    });

    testBackstagePasses({
      description: "should increase quality by 2 per day if days left to concert is between 5 to 10",
      initialQuality: 12,
      initialSellIn: 8,
      propertyToTest: 'quality',
      expectedValue: 14
    });

    testBackstagePasses({
      description: "should increase quality by 3 per day if < 5 days left to concert",
      initialQuality: 12,
      initialSellIn: 8,
      propertyToTest: 'quality',
      expectedValue: 14
    });
  });
});
