/**
 * テンプレート文字列
 */

// const name = "わたなべ";
// const age = 28;

// // 従来の方法
// const message1 = "①私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `②私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */

// 従来の関数①　関数そのまま実行
// function func1(str) {
//   return str;
// }
// console.log(func1("func1でーす"));

// 従来の方法②　変数に入れてから実行
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1でーす"));

// アロー関数を用いた方法
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2でーす"));

// アロー関数を用いた方法　retunを省略
// const func2 = (str) => str;
// console.log(func2("func2でーす"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// // 従来の方法
// const myProfile = {
//   name: "わたなべ",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// // 分割代入を用いた方法
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message1);

// 従来の方法②
// const myProfile = ["わたなべ", 28];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// 分割代入を用いた方法
// const myProfile = ["わたなべ", 28];
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
const sayHello = (name = "ゲスト") => console.log(`こんちわ！${name}さん！`);
sayHello("");
