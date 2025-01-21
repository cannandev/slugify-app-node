const readline = require("readline"); // part of core Node.js API
const slugify = require("slugify");

// Create a readline interface to prompt user for input
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// Ask the user for a phrase
rl.question("Enter a phrase: ", (phrase) => {
	// Use slugify to convert the phrase into a slug
	const slug = slugify(phrase, {
		lower: true, // Convert to lowercase
		strict: true, // Remove special characters
	});

	// Output the slugified string
	console.log("Slugified phrase:", slug);

	// Close the readline interface
	rl.close();
});
