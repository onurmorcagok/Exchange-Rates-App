class Currency {
  constructor(firstCurrency, secondCurrency) {
    this.firstCurrency = firstCurrency;
    this.secondCurrency = secondCurrency;
    this.baseURL = "https://api.exchangeratesapi.io/latest?base=";
    this.amount = null;
  }

  exchangeMethod() {
    return new Promise((resolve, reject) => {
      fetch(this.baseURL + this.firstCurrency)
        .then((response) => response.json())
        .then((data) => {
          const parity = data["rates"][this.secondCurrency];
          const amount2 = Number(this.amount);

          let total = parity * amount2;

          resolve(total);
        })
        .catch((error) => reject(error));
    });
  }

  changeAmount(amount) {
    this.amount = amount;
  }

  changeFirstCurrency(newFirstCurrency) {
    this.firstCurrency = newFirstCurrency;
  }

  changeSecondCurrency(newSecondCurrency) {
    this.secondCurrency = newSecondCurrency;
  }
}
