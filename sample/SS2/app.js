//// Sample 1 (Object)
console.log("*** SAMPLE 1 ***")

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





//// Sample 2 (Array)
console.log("*** SAMPLE 2 ***")

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

