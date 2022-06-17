let people = {
    name: "Nguyen Van A",
    age: 25,
    sex: "Male",
    cccd: 1234567890,
    address: "Ha Noi",
    job: "Developer",
    hobbies: "Coding",
}

// Create ✅
people.sport = "football"
console.log("COMMAND CREATE:", people)

// Read 📖
console.log("COMMAND READ: ", people)

// Update 🚀
people.age = "27"
console.log("COMMAND UPDATE", people)

// Delete ❌
delete people.address
console.log("COMMAND DELETE", people)



