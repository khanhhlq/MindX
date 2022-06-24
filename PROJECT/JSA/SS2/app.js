//// Sample 1
console.log("*** SAMPLE 1 ***")

let animals = ["Dog", "Cat", "Frog"]

// Create ✅
animals.push("Rabbit")
console.log("CREATE: ", animals)

// READ ✅
console.log("READ: ", animals)

// UPDATE ✅
animals[0] = "mouse"
console.log("UPDATE: ", animals)

// DELETE ✅
animals.splice(1, 2)
console.log("UPDATE: ", animals)

//// Sample 2
console.log("*** SAMPLE 2 ***")

let colors = ["red", "blue", "yellow"]

// Create ✅
colors.push("purple")
console.log("CREATE: ", colors)

// READ ✅
console.log("READ: ", colors)

// UPDATE ✅
colors[2] = "white"
console.log("UPDATE: ", colors)

// DELETE ✅
colors.splice(2, 3)
console.log("UPDATE: ", colors)



//// Sample 3 (Object)
console.log("*** SAMPLE 3 ***")

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



//// Sample 4 (Array)
console.log("*** SAMPLE 4 ***")

let OS = ["Windowns", "Android", "Linux"]

// Create ✅
OS.push("MacOS")
console.log("COMMAND CREATE:", OS)

// Read 📖
console.log("COMMAND READ: ", OS)

// Update 🚀
OS[0] = null
console.log("COMMAND UPDATE", OS)

// Delete ❌
// OS.pop() // Xoá phần tử cuối mảng
// courses.shift() // Xoá phần từ đầu mảng
OS.splice(0, 3)
console.log("COMMAND DELETE", OS)



