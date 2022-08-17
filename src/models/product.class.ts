export class Product {

  name: string;
  img: string;
  price: number;

  constructor(obj?: any) {
      this.name = obj ? obj.name: '';
      this.img = obj ? obj.img: '';
      this.price = obj ? obj.price: '';
      
  }

  public toJson() {
      return {
          name: this.name,
          img: this.img,
          price: this.price
      }
  }
}

