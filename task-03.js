/* Задание 3
 * Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников
 * и возвращает имя самого продуктивного (который выполнил больше всех задач).
 * Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".
 */

const findBestEmployee = function (employees) {
  // твой код
  let keys = Object.keys(employees);
  let values = Object.values(employees);
  let theBestEmployIndex = 0;
  let theBestValue = values[0];

  let len = values.length;
  for (let i = 1; i < len; i += 1) {
    if (values[i] > theBestValue) {
      theBestEmployIndex = i;
    }
  }
  return keys[theBestEmployIndex];
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
