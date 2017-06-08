class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  tickDay() {
    const CONCERT = 'Backstage passes to a TAFKAL80ETC concert';
    const AGED_BRIE = 'Aged Brie';
    const SULFURAS = 'Sulfuras, Hand of Ragnaros';

    const MAX_QUALITY = 50;
    const MIN_QUALITY = 0;

    this.items.forEach((item) => {
      decreaseSellIn(item)

      if (item.name == AGED_BRIE || item.name == CONCERT) {
        increaseQuality(item)
        if (item.name == AGED_BRIE) {
          if (isDue(item))
            increaseQuality(item)
        }

        if (item.name == CONCERT) {
          if (item.sellIn < 11) {
            increaseQuality(item)
          }
          if (item.sellIn < 6) {
            increaseQuality(item)
          }
          if (isDue(item)) {
            item.quality = 0
          }
        }
      } else {
        decreaseQuality(item)
        if (isDue(item))
          decreaseQuality(item)
      }
    })

    function decreaseQuality(item){
      if (item.quality > MIN_QUALITY && item.name != SULFURAS)
        item.quality--
    }

    function increaseQuality(item) {
      if (item.quality < MAX_QUALITY)
        item.quality++
    }

    function isDue(item){
      return item.sellIn < 0
    }

    function decreaseSellIn(item){
      if (item.name != SULFURAS)
        item.sellIn--
    }

    // function handleQualityForDueItem(item){
    //   if (item.name != AGED_BRIE) {
    //     if (item.name != CONCERT) {
    //       decreaseQuality(item)
    //     } else {
    //       item.quality = 0
    //     }
    //   } else {
    //     increaseQuality(item)
    //   }
    // }

    return this.items;
  }
}
