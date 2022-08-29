export interface Catalog {
    name: string,
    price: number,
    img: string
  }
  
  export let catalog: Catalog[] = [
    {
      name: 'apples',
      price: 3.20,
      img: './assets/img/apples.jpg'
    },
    {
      name: 'bananas',
      price: 2.80,
      img: './assets/img/bananas.jpg'
    },
    {
      name: 'grapes',
      price: 5.10,
      img: './assets/img/grapes.jpg'
    },
    {
      name: 'oranges',
      price: 4.30,
      img: './assets/img/oranges.jpg'
    },
    {
      name: 'plums',
      price: 2.30,
      img: './assets/img/plums.jpg'
    },
    {
      name: 'avocado',
      price: 6.30,
      img: './assets/img/avocado.jpg'
    },
    {
      name: 'pineapple',
      price: 4.00,
      img: './assets/img/pineapple.jpg'
    },
    {
      name: 'blueberries',
      price: 6.60,
      img: './assets/img/blueberries.jpg'
    },
    {
      name: 'strawberries',
      price: 3.60,
      img: './assets/img/strawberries.jpg'
    }
  ];