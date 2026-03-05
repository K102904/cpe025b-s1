let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

let choice;

while (choice !== "quit") {
    choice = prompt("What do you want to do?\n'first' - show first contact\n'last' - show last contact\n'all' - show all contacts\n'new' - add a new contact\n'quit' - exit the program");

    if (choice === "first") {
        console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);

    } else if (choice === "last") {
        let last = contacts.length - 1;
        console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);

    } else if (choice === "all") {
        for (let i = 0; i < contacts.length; i++) {
            console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
        }

    } else if (choice === "new") {
        let name = prompt("Enter contact name: ", "");
        let phone = prompt("Enter contact phone: ", "");
        let email = prompt("Enter contact email: ", "");

        if (name && phone && email) {
            contacts.push({ name, phone, email });
            console.log(`New contact added: ${name} / ${phone} / ${email}`);
        } else {
            console.log("Contact not added – all three fields (name, phone, email) are required.");
        }

    } else if (choice === "quit") {
        console.log("Goodbye!");

    } else {
        console.log("Invalid choice. Please enter 'first', 'last', 'all', 'new', or 'quit'.");
    }
}