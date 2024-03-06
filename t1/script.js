// ? BMI--------------------------------------------------------

// let bmi = (weight, height) => {
//     final = weight / ((height/100) ** 2);
//     if (final < 18.5) {
//         console.log(`Siz ideal çəkinin altındasınız: ${final.toFixed(2)}`)
//     } else if (final >= 18.5 && final <= 24.9) {
//         console.log(`Siz ideal çəkidəsiniz: ${final.toFixed(2)}`)
//     } else if (final >= 25 && final <= 29.9) {
//         console.log(`Siz ideal çəkinin üstündəsiniz: ${final.toFixed(2)}`)
//     } else if (final >= 30 && final <= 39.9) {
//         console.log(`Siz ideal çəkinin çox üstündəsiniz (obez): ${final.toFixed(2)}`)
//     } else if (final >= 40) {
//         console.log(`Siz ideal çəkinin çox üstündəsiniz (morbid obez): ${final.toFixed(2)}`)
//     }
// }
// bmi('47' , '156')
// bmi('87' , '156')

// ? elementCemi------------------------------------------------

// function array() {
//     let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     let sum = 0;
//     for (let i = 0; i < num.length; i++) {
//         sum = sum + num[i];
//     }
//     console.log(`Ədədi cəm: ${sum} `);
// }
// array()

// ? edediOrta--------------------------------------------------

// function average(num) {
//     let sum = 0;
//     for (let i = 0; i < num.length; i++) {
//         sum = sum + num[i];
//     }
//     let final = sum / num.length;
//     console.log(`Ədədi orta: ${final}`);
// }
// average([1,2,3,4,5,6,7,8,9,10])

// ! boyuk------------------------------------------------------



// ? hasil------------------------------------------------------

// function hasil(num) {
//     let sum = 1;
//     for (let i = 0; i < num.length; i++) {
//         sum = sum * num[i];
//     }
//     console.log(`Hasil: ${sum}`);
//     return sum
// }
// hasil([12,2,3,4,5])

// ? meyve------------------------------------------------------

function fruit(all) {
    let name = ['apple', 'banan'];
    let newName = '';
    for (let i = name.length - 1; i >= 0; i--) {
        newName = newName + name[i];
    }
    console.log(newName);
}
fruit()

