function BasicCard(front,back) {
	//1st argument
	this.front = front
	//2nd argument
	this.back = back
}

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front);

// "George Washington"
console.log(firstPresident.back);
