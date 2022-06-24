// Vòng lặp FOR-IN cho 1 Mảng
console.log("*** SAMPLE 1 ***")

let arr = ["Toán", "Ngữ Văn", "Tiếng Anh"]

for (let i in arr)
    console.log(arr[i])

// Vòng lặp FOR-IN cho 1 object
console.log("*** SAMPLE 2 ***")

let obj = {
    'name': "Nguyễn Văn Đẩu",
    'sex': "Không xác định",
    'crime': "Vi phạm hành chính"
}

for (let i in obj)
    console.log(obj[i])

// Vòng lặp FOR-OF cho 1 Mảng
console.log("*** SAMPLE 3 ***")

for (let value of arr)
    console.log(value)
