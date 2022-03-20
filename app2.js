function sayHello() {
    setTimeout(() => console.log("Hello world!"), 1000);
    function sayGoodBye() {
        console.log("See ya!");
    }

    console.log("Good Morning");
    sayGoodBye();
}
sayHello();