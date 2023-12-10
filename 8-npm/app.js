// const validator = require("validator")
const chalk = require("chalk")

// console.log(validator.isEmail("wahyu@gmail.com"));
// console.log(validator.isMobilePhone("0785343637", "id-ID"));
// console.log(validator.isNumeric("54647474"))

// console.log(chalk.blue("Hello World"));
// console.log(chalk.black.bgRed.bold("Hello World"));
const pesan = chalk`Nama saya, {bgWhite.red Wahyu Suteja} kelahiran {bgRed.black Bogor 21 Juli 1995}`; 
console.log((pesan))

