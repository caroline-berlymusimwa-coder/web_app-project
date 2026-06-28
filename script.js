let signedIn = false;

function signIn() {

    const login =
        document.getElementById("login").value;

    const password =
        document.getElementById("password").value;

    if(login === "" || password === "") {

        document.getElementById("loginMessage")
        .innerHTML =
        "Please enter login details.";

        return;
    }

    signedIn = true;

    document.getElementById("loginMessage")
    .innerHTML =
    "Successfully signed in.";

    document.getElementById("orderSection")
    .style.display = "block";
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

        book.innerHTML =
        '<option value="">Select a Book</option>';

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
