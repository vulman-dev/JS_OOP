const make = (numer, denom) => ({
    numer,
    denom,
    setNumer(number) {
      this.numer = number;
    },
    setDenom(number) {
      this.denom = number;
    },
    getNumer() {
      return this.numer;
    },
    getDenom() {
      return this.denom;
    },
    toString() {
      return `${this.getNumer()}/${this.getDenom()}`;
    },
    add(ratNumber) {
      const a = this.getNumer();
      const b = this.getDenom();
      const c = ratNumber.getNumer();
      const d = ratNumber.getDenom();
      return make((a * d + b * c), (b * d));
    },
  });
  
  export default make;