// const year = 3987
// let remainder = year % 4
// console.log(remainder == 0);

function leapYear(year) {
    // const remainder = year % 4 == 0 || year % 400 == 0;
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) { 
        return true
    } else {
        return false
    }
}

const lep = leapYear(3922)
console.log(lep);
const lep1 = leapYear(3988)
console.log(lep1);