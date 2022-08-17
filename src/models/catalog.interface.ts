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
  ];