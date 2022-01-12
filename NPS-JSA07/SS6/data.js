let menu = [
    {
        name: "Pho",
        title: "Đay la mon an co truyen Ha Noi va Viet Nam",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quaerat, incidunt dolorum quod nisi unde autem. Labore atque necessitatibus maxime sit, deleniti inventore quaerat praesentium porro facere exercitationem, sunt officiis?",
        image: 'https://bit.ly/3fgMntn'
    },
    
    {
        name: "Banh da cua",
        title: "Đay la mon an co truyen Ha Noi va Viet Nam",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quaerat, incidunt dolorum quod nisi unde autem. Labore atque necessitatibus maxime sit, deleniti inventore quaerat praesentium porro facere exercitationem, sunt officiis?",
        image: 'https://bit.ly/31Rhmcl'
    },

    {
        name: "Bun bo hue",
        title: "Đay la mon an co truyen Ha Noi va Viet Nam",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quaerat, incidunt dolorum quod nisi unde autem. Labore atque necessitatibus maxime sit, deleniti inventore quaerat praesentium porro facere exercitationem, sunt officiis?",
        image: 'https://bit.ly/3qkI9at'
    },

    {
        name: "Bun dau mam tom",
        title: "Đay la mon an co truyen Ha Noi va Viet Nam",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quaerat, incidunt dolorum quod nisi unde autem. Labore atque necessitatibus maxime sit, deleniti inventore quaerat praesentium porro facere exercitationem, sunt officiis?",
        image: 'https://bit.ly/3K2EGoS'
    },

    {
        name: "Tiet canh",
        title: "Đay la mon an co truyen Ha Noi va Viet Nam",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quaerat, incidunt dolorum quod nisi unde autem. Labore atque necessitatibus maxime sit, deleniti inventore quaerat praesentium porro facere exercitationem, sunt officiis?",
        image: 'https://bit.ly/3tm39j8'
    },

    {
        name: "Banh cuon",
        title: "Day la mon an co truyen cua Viet Nam",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quaerat, incidunt dolorum quod nisi unde autem. Labore atque necessitatibus maxime sit, deleniti inventore quaerat praesentium porro facere exercitationem, sunt officiis?",
        image: 'https://bit.ly/3HZiWbs'
    }
]

// let menuCart = [];
// // Ép kiểu dữ liệu
// let menuCartString = JSON.stringify(menuCart);
// // Đẩy lên localStorage
// localStorage.setItem("menuCart", menuCartString)


// // Bắt đầu ép kiểu dữ liệu sang chuỗi để đây lên localStorage.
// let menuString =  JSON.stringify(menu);
// localStorage.setItem("menu", menuString)

let items = document.querySelector('.items');

for (item of menu){
    items.innerHTML+=`
    <div class="item">
        <div class="product-view">
            <img src="${item.image}" alt="Error Image" class="img-icon">
            <button type='input' value="${item.name}">Add to list</button>
        </div>
        <div class="content">
            <h3>${item.name}</h3>
        </div>
        <p>
        ${item.title}
        </p>
    </div>
    `
}