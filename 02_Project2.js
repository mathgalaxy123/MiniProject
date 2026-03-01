// Menu Item Price Calculator


class Menu {
  #offer1 = 10;
  #offer2 = 20;
  constructor(val1, val2) {
    this.val1 = val1;
    this.val2 = val2;
  }
  callTotal() {
    return this.val1 * this.#offer1 + this.val1 * this.#offer2;
  }
  get total() {
    return this.callTotal();
  }
}
const val1 = new Menu(3, 0);
const val2 = new Menu(5, 2);
const val3 = new Menu(4, 3);
console.log(val1.total);
console.log(val2.total);
console.log(val3.total);
