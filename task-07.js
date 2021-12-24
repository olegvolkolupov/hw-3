/* Задание 7 - дополнительное, выполнять не обязательно
 * Напиши скрипт управления личным кабинетом интернет банка.
 * Есть объект account, в котором необходимо реализовать методы для работы с балансом и историей транзакций.
 */
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

//id транзакции
let id = 1;

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Каждая транзакция это объект со свойствами: id, type и amount
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    return {
      // id: Math.random().toString().slice(2),
      id: id++,
      amount: amount,
      type: type,
    };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      alert(`Снять ${amount} не возможно. Недостаточно средств.`);
      return;
    }
    this.balance -= amount;
    this.transactions.push(
      this.createTransaction(amount, Transaction.WITHDRAW),
    );
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let amount = 0;
    for (let transaction of this.transactions) {
      if (transaction.type === type) {
        amount += transaction.amount;
      }
    }
    return amount;
  },
};

/* Проверка
account.deposit(2000);
console.log('balance :', account.getBalance());
account.withdraw(100);
console.log('balance :', account.getBalance());
account.deposit(2000);
console.log('balance :', account.getBalance());
account.withdraw(100);
console.log('balance :', account.getBalance());
console.log(account.getTransactionDetails(1));
console.log(account.getTransactionDetails(2));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
*/
