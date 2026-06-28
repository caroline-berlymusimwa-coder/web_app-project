let signedIn = false;

const users = {
    "caroline@gmail.com": "Book123!",
    "john@gmail.com": "Password1!",
    "mary@gmail.com": "Reader2026!"
};
function signIn() {
    const email = document.getElementById("login").value.trim();
    const password = document.getElementById("password").value;
    const message = document.getElementById("loginMessage");

    if (email === "" || password === "") {
        message.innerHTML = "Please enter your email and password.";
        return;
    }

    if (users[email] && users[email] === password) {
        localStorage.setItem("signedIn", "true");
        localStorage.setItem("email", email);

        message.innerHTML = "Successfully signed in.";

        setTimeout(function () {
            window.location.href = "contact us.html";
        }, 1000);
    } else {
        message.innerHTML = "Wrong email or password. Please sign up first.";
    }
}
const books = {

    fiction: [
        "Harry Potter and the Philosopher's Stone",
        "Pride and Prejudice",
        "To Kill a Mockingbird",
        "The Midnight Library"
    ],

    fantasy: [
        "The Hobbit",
        "The Adventures of Tom Sawyer",
        "The Lion, the Witch and the Wardrobe",
        "Fourth Wing"
    ],

    mystery: [
        "The Girl with the Dragon Tattoo",
        "Gone Girl",
        "Sherlock Holmes: The Hound of the Baskervilles",
        "The Silent Patient",
        "The Housemaid"
    ],

    sciencefiction: [
        "Dune",
        "The Martian",
        "Ender's Game",
        "Project Hail Mary"
    ],

    business: [
        "Rich Dad Poor Dad",
        "The Psychology of Money",
        "Think and Grow Rich",
        "Zero to One"
    ],

    technology: [
        "Clean Code",
        "The Pragmatic Programmer",
        "Introduction to Algorithms",
        "Artificial Intelligence: A Modern Approach"
    ],

    selfdevelopment: [
        "Atomic Habits",
        "The Alchemist",
        "The 7 Habits of Highly Effective People"
    ],

    biography: [
        "Long Walk to Freedom",
        "Becoming",
        "Steve Jobs",
        "Deep Work",
        "The Mountain Is You"
    ],

    academic: [
        "Discrete Mathematics and Its Applications",
        "Computer Networking: A Top-Down Approach",
        "Operating System Concepts",
        "Sapiens"
    ],

    children: [
        "Charlie and the Chocolate Factory",
        "The Cat in the Hat",
        "Matilda"
    ]
};


// DROPDOWN LOGIC

const category = document.getElementById("category");
const book = document.getElementById("book");

if(category && book){

    category.addEventListener("change", function(){

        const selectedCategory = this.value;

        book.innerHTML = '<option value="">Select a Book</option>';

        if(books[selectedCategory]){

            books[selectedCategory].forEach(function(title){

                const option =
                document.createElement("option");

                option.value = title;
                option.textContent = title;

                book.appendChild(option);

            });

        }

    });

}




function requireSignIn() {
    const signedIn = localStorage.getItem("signedIn");
    if (signedIn !== "true") {
        alert("You must sign in before placing an order.");
        window.location.href = "sining.html";
    }
}

// ORDER FORM
const orderForm = document.getElementById("orderForm");

if(orderForm){

    orderForm.addEventListener("submit", function(event){

        event.preventDefault();
        console.log(localStorage.getItem("signedIn"));

        const orderError =
        document.getElementById("orderError");

        const orderSuccess =
        document.getElementById("orderSuccess");

        orderError.innerHTML = "";
        orderSuccess.innerHTML = "";

        if(localStorage.getItem("signedIn") !== "true"){

            orderError.innerHTML =
            "You must sign in before ordering.";

            return;
        }

        orderSuccess.innerHTML =
        "Order submitted successfully!";

        orderForm.reset();

    });

}
if(orderForm &&
   localStorage.getItem("signedIn") !== "true"){
    document.getElementById("orderError").innerHTML =
    "You must sign in before ordering a book.";a
}
