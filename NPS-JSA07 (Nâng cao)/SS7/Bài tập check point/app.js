// Bài 1:

const student = (name, age, address) => {
    console.log({Tên: name, Tuổi: age, Địa_chỉ: address});
}

student("Khánh", 15, "Phú yên");

// Bài 2:

var smartPhones = [ 
    { name: 'iphone', price: 649 }, 
    { name: 'Galaxy S6', price: 576 }, 
    { name: 'Galaxy Note 5', price: 489 } 
];

// In ra trên website

let smartPhone = document.querySelector(".smart-phones");

for (items of smartPhones){
    smartPhone.innerHTML+=`
    <div class="content">
        <h4>Tên sản phẩm: ${items.name}</h4>
        <h3>Giá sản phẩm: ${items.price}</h3>
    </div>
    `
}

// In ra trên console log

console.log("Giá của từng sản phẩm lần lượt là: ");
smartPhones.forEach(i => console.log( i.name + " giá là: "+ i.price))


// Bài tập 3


const foo = (x,y,z) => console.log( x, y, z );


const foo = () => alert("Hello");

const foo = (a,b) =>{
	let m = a+b*100
	return m
}

