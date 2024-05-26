function make_shirt(size: string = "large", message: string = "I Can't live without TS") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

make_shirt(); // Default large and message
make_shirt("medium", "Built with code"); // Default message, medium size
make_shirt("small", "Coding is my Strength"); // Custom message, small size