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

// ! meyve------------------------------------------------------

// function fruit(all) {
//     let name = ['apple', 'banan'];
//     let newName = '';
//     for (let i = name.length - 1; i >= 0; i--) {
//         newName = newName + name[i];
//     }
//     console.log(newName);
//     return newName
// }
// fruit()


// ? negativ----------------------------------------------------

// function control(){
//     let num = +prompt('Bir ədəd yazın');
//     if(num<0){
//         alert('Negativ');
//     } else if(num>0){
//         alert('Pozitiv');
//     }
// }
// control()

// ? 2eded------------------------------------------------------

// function num (){
//     let one=+prompt('1.ci rəqəmi yazın.');
//     let two=+prompt('2.ci rəqəmi yazın.');
//     let final = (one+two)/2;
//     alert(final);
// }
// num()

// ? 2str-------------------------------------------------------

// function str (){
//     let one=prompt('1.ci sözü yazın.');
//     let two=prompt('2.ci sözü yazın.');
//     let final = (one+two);
//     alert(final);
// }
// str()

// ! 3eded------------------------------------------------------

// ? book-------------------------------------------------------

// function book() {
//     let books = [
//         {
//             author: "J.K. Rowling",
//             bookName: "Harry Potter and the Sorcerer's Stone",
//             bestseller: true,
//             genre: "Fantasy",
//         },
//         {
//             author: "George Orwell",
//             bookName: "1984",
//             bestseller: false,
//             genre: "Dystopian",
//         },
//         {
//             author: "J.R.R. Tolkien",
//             bookName: "The Hobbit",
//             bestseller: true,
//             genre: "Fantasy",
//         },
//         {
//             author: "Jane Austen",
//             bookName: "Pride and Prejudice",
//             bestseller: false,
//             genre: "Classic",
//         },
//         {
//             author: "Harper Lee",
//             bookName: "To Kill a Mockingbird",
//             bestseller: true,
//             genre: "Fiction",
//         },
//         {
//             author: "F. Scott Fitzgerald",
//             bookName: "The Great Gatsby",
//             bestseller: false,
//             genre: "Classic",
//         },
//         {
//             author: "Agatha Christie",
//             bookName: "Murder on the Orient Express",
//             bestseller: true,
//             genre: "Mystery",
//         },
//         {
//             author: "Ernest Hemingway",
//             bookName: "The Old Man and the Sea",
//             bestseller: false,
//             genre: "Fiction",
//         },
//         {
//             author: "Jules Verne",
//             bookName: "Twenty Thousand Leagues Under the Sea",
//             bestseller: true,
//             genre: "Adventure",
//         },
//         {
//             author: "Arthur Conan Doyle",
//             bookName: "Sherlock Holmes",
//             bestseller: false,
//             genre: "Mystery",
//         },
//     ];
//     console.log('Bestseller--------------------------------')
//     for (i = 0; i < books.length; i++) {
//         if (books[i].bestseller === true) {
//             console.log(books[i].bookName);
//         }
//     }
//     console.log('Fantasy-----------------------------------')
//     for(i = 0; i < books.length; i++){
//         if (books[i].genre === 'Fantasy'){
//             console.log(books[i].bookName + ": " + books[i].author);
//         }
//     }
//     console.log('Fantasy and Bestseller--------------------')
//     for(i = 0; i < books.length; i++){
//         if (books[i].genre === 'Fantasy'&& books[i].bestseller === true){
//             console.log(books[i].bookName);
//         }
//     }
// }
// book()

// ? movie------------------------------------------------------

function movie() {
    let movies = [
        {
          title: "Inception",
          director: "Christopher Nolan",
          genre: "Science Fiction",
          blockbuster: true,
        },
        {
          title: "The Shawshank Redemption",
          director: "Frank Darabont",
          genre: "Drama",
          blockbuster: false,
        },
        {
          title: "The Dark Knight",
          director: "Christopher Nolan",
          genre: "Action",
          blockbuster: true,
        },
        {
          title: "Forrest Gump",
          director: "Robert Zemeckis",
          genre: "Drama",
          blockbuster: true,
        },
        {
          title: "Pulp Fiction",
          director: "Quentin Tarantino",
          genre: "Crime",
          blockbuster: false,
        },
        {
          title: "The Matrix",
          director: "Lana and Lilly Wachowski",
          genre: "Science Fiction",
          blockbuster: true,
        },
        {
          title: "The Godfather",
          director: "Francis Ford Coppola",
          genre: "Crime",
          blockbuster: false,
        },
        {
          title: "Avatar",
          director: "James Cameron",
          genre: "Action",
          blockbuster: true,
        },
        {
          title: "Titanic",
          director: "James Cameron",
          genre: "Romance",
          blockbuster: true,
        },
        {
          title: "The Silence of the Lambs",
          director: "Jonathan Demme",
          genre: "Thriller",
          blockbuster: false,
        },
      ];

    console.log('Bestseller--------------------------------')
    for (i = 0; i < movies.length; i++) {
        if (movies[i].blockbuster === true) {
            console.log(movies[i].title);
        }
    }
    console.log('Sci-fi-----------------------------------')
    for(i = 0; i < movies.length; i++){
        if (movies[i].genre === 'Science Fiction'){
            console.log(movies[i].title + ": " + movies[i].director);
        }
    }
    console.log('genre and Bestseller--------------------')
    for(i = 0; i < movies.length; i++){
        if (movies[i].genre === 'Science Fiction'&& movies[i].blockbuster === true){
            console.log(movies[i].title);
        }
    }
}
movie()