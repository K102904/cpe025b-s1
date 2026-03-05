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
    choice = prompt(
        "=== CONTACT MANAGER ===\n" +
        "'show'   - Display a specific contact by index\n" +
        "'all'    - Display all contacts\n" +
        "'add'    - Add a new contact\n" +
        "'search' - Search for a contact by name\n" +
        "'quit'   - Exit the program\n" +
        "\nEnter your choice:"
    );

    if (choice === null || choice === "") {
        console.log("No input detected. Returning to main menu...");
        continue;
    }

    choice = choice.trim().toLowerCase();

    if (choice === "show") {
        let input = prompt(`Enter contact index (0 to ${contacts.length - 1}):`);

        if (input === null || input === "") {
            console.log("No index entered. Returning to main menu...");
            continue;
        }

        let index = parseInt(input);

        if (isNaN(index) || index < 0 || index >= contacts.length) {
            console.log(`Invalid index. Please enter a number between 0 and ${contacts.length - 1}.`);
        } else {
            let c = contacts[index];
            console.log(`[${index}] ${c.name} / ${c.phone} / ${c.email}`);
        }

    } else if (choice === "all") {
        console.log(`--- All Contacts (${contacts.length}) ---`);
        for (let i = 0; i < contacts.length; i++) {
            console.log(`[${i}] ${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
        }

    } else if (choice === "add") {
        let name  = prompt("Enter contact name:");
        let phone = prompt("Enter contact phone:");
        let email = prompt("Enter contact email:");

        if (name === null || phone === null || email === null) {
            console.log("Action cancelled. Returning to main menu...");
            continue;
        }

        name  = name.trim();
        phone = phone.trim();
        email = email.trim();

        if (name && phone && email) {
            contacts.push({ name, phone, email });
            console.log(`✔ Contact added: ${name} / ${phone} / ${email}`);
        } else {
            console.log("✘ Contact not added – all three fields are required.");
        }

    } else if (choice === "search") {
        let searchName = prompt("Enter the name to search for:");

        if (searchName === null || searchName.trim() === "") {
            console.log("No name entered. Returning to main menu...");
            continue;
        }

        searchName = searchName.trim().toLowerCase();
        let found = false;

        for (let i = 0; i < contacts.length; i++) {
            if (contacts[i].name.toLowerCase() === searchName) {
                console.log(`Contact found: ${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
                found = true;
                break;
            }
        }

        if (!found) {
            console.log(`Contact not found for name: "${searchName}"`);
        }

    } else if (choice === "quit") {
        console.log("Goodbye! Exiting contact manager.");

    } else {
        console.log(`Unknown option "${choice}". Please choose: show, all, add, search, or quit.`);
    }
}