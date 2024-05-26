let personName : string = "Tanveer";
console.log("LowerCase:", personName.toLowerCase());
console.log("UpperCase:", personName.toLocaleUpperCase());
console.log("TitleCase:", personName.replace(/\bw/g,c =>c.toUpperCase()));