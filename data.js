// WRITE YOUR CODE BELOW THIS LINE

// Age well

let currentYear = 2022;
let favoriteBookYear = 1954;
let ageOfMyFavBook = age(currentYear);
let favouriteBook =
{
	title: "The Lord of the Rings"
	, author: "J. R. R. Tolkien"
	, year: favoriteBookYear
	, age: ageOfMyFavBook
	, characters: ["Frodo", "Gollum", "Gandalf", "Legolas"]
};
console.log(favouriteBook);
function age(providedYear) {
	let result = 0;
	result = providedYear - favoriteBookYear;
	return result;
}
console.log(age(currentYear));

// Console is an object?!

console.log(console);

// Call on me

console.log(console.log);

// Counting sheeps

let five = [1, 2, 3, 4, 5];
let result = 0;
function usFive(five) {
	for (let i = 0; i < 5; i++) {
		result += five[i]
		console.count(result);
	}
	return result;
}
console.log(usFive(five));
console.count(result);
console.count(result);

// The Keymaker

console.log(Object.keys(favouriteBook));

// To string and beyond

let aNumber = 2022;
let string = "";
string = aNumber.toString();
console.log(string);

// All writers are string writers

let writers = "George Orwell, Ernest Hemingway, Jane Austen, Agatha Christie, Oscar Wilde"
let writersArray = [];
writersArray = writers.split(", ")
writersArray[0] = "Eliza Orzeszkowa";
console.log(writersArray)

// Split the writers in half then join them

let joinWriters = "";
joinWriters = writersArray.join(" + ")
console.log(joinWriters);

// Push him...to the floow

writersArray.push("Henryk Sienkiewicz", "Adam Mickiewicz");
console.log(writersArray);

// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;


try {
	toExport = [
		{ name: "favouriteBook", content: favouriteBook, type: "object" },
		{ name: "ageOfMyFavBook", content: ageOfMyFavBook, type: "number" },
		{ name: "aNumber", content: aNumber, type: "number" },
		{ name: "writers", content: writers, type: "string" },
		{ name: "writersArray", content: writersArray, type: "array" },
		{ name: "joinWriters", content: joinWriters, type: "string" }
	]
} catch (error) {

	toExport = { error: error.message }

}

export { toExport };
