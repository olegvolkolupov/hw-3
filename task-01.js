// Задание 1
// Напиши скрипт, который, для объекта user, последовательно:

//     добавляет поле mood со значением 'happy'
//     заменяет значение hobby на 'skydiving'
//     заменяет значение premium на false
//     выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user['mood'] = 'happy'; // добавляет поле mood со значением 'happy'

user['hobby'] = 'skydiving'; // заменяет значение hobby на 'skydiving'

user.premium = false; // заменяет значение premium на false

// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
let keys = Object.keys(user);
for (const key of keys) {
  console.log(key, ': ', user[key]);
}