describe("Gilded Rose", function() {
  function createItem ({ name, sellIn, quality }) {
    return new Item(name, sellIn, quality);
  }

  describe("Individual Item creation", function() {
    it("creates a new item with valid values", function() {
      const item = new Item('Product Name', 5, 10);
      expect(item.name).toEqual('Product Name');
      expect(item.sellIn).toEqual(5);
      expect(item.quality).toEqual(10);
    });
  });

  describe("when the day goes by", function() {
    it("decreases the sell-in value by 1", function() {
      const sellIn = 5;
      const gilgedRose = new Shop([createItem({name: "foo", sellIn, quality: 0})]);
      const [item] = gilgedRose.tickDay();
      expect(item.sellIn).toEqual(sellIn-1);
    });

    it("decreases the quality value by 1", function() {
      const quality = 5;
      const gilgedRose = new Shop([createItem({name: "foo", sellIn: 10, quality})]);
      const [item] = gilgedRose.tickDay();
      expect(item.quality).toEqual(quality-1);
    });

    it("does not decrease the quality to below 0", function() {
      const gilgedRose = new Shop([createItem({name: "foo", sellIn: 10, quality: 0})]);
      const [item] = gilgedRose.tickDay();
      expect(item.quality).toEqual(0);
    })

    describe('when the item is due', function () {
      it("decreases the quality value by 2", function() {
        const quality = 5;
        const gilgedRose = new Shop([createItem({name: "foo", sellIn: -1, quality})]);
        const [item] = gilgedRose.tickDay();
        expect(item.quality).toEqual(quality-2);
      });
    });

    describe("when the item is 'Aged Brie'", function() {
      it("increases the quality by 1", function() {
        const quality = 5;
        const gilgedRose = new Shop([createItem({name: "Aged Brie", sellIn: 5, quality})]);
        const [item] = gilgedRose.tickDay();
        expect(item.quality).toEqual(quality+1);
      });

      it("does not increase the quality to above 50", function() {
        const gilgedRose = new Shop([createItem({name: "Aged Brie", sellIn: 5, quality: 50})]);
        const [item] = gilgedRose.tickDay();
        expect(item.quality).toEqual(50);
      })
    })

    describe("when the item is 'Sulfuras, Hand of Ragnaros'", function() {
      it('does not decreases its quality', function() {
        const gilgedRose = new Shop([createItem({name: "Sulfuras, Hand of Ragnaros", sellIn: 5, quality: 40})]);
        const [item] = gilgedRose.tickDay();
        expect(item.quality).toEqual(40);
      });

      it('does not have to be sold', function() {
        const gilgedRose = new Shop([createItem({name: "Sulfuras, Hand of Ragnaros", sellIn: 5, quality: 40})]);
        const [item] = gilgedRose.tickDay();
        expect(item.sellIn).toEqual(5);
      })
    });

    describe("when the item is 'Backstage passes to a TAFKAL80ETC concert'", function() {
      it("increases the quality by 1", function() {
        const quality = 10
        const gilgedRose = new Shop([createItem({name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 15, quality})]);
        const [item] = gilgedRose.tickDay();
        expect(item.quality).toEqual(quality + 1);
      });

      describe("when there are 10 days or less left", function() {
        it("increases the quality by 2", function() {
          const quality = 10
          const gilgedRose = new Shop([createItem({name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 8, quality})]);
          const [item] = gilgedRose.tickDay();
          expect(item.quality).toEqual(quality + 2);
        });
      });

      describe("when there are 5 days or less left", function() {
        it("increases the quality by 3", function() {
          const quality = 10
          const gilgedRose = new Shop([createItem({name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 4, quality})]);
          const [item] = gilgedRose.tickDay();
          expect(item.quality).toEqual(quality + 3);
        });
      });

      describe("when after the concert", function() {
        it("drops quality to 0", function() {
          const gilgedRose = new Shop([createItem({name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 0, quality: 10})]);
          const [item] = gilgedRose.tickDay();
          expect(item.quality).toEqual(0);
        });
      });
    });
  });
});
