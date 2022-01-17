let menu = [
    {
        id: 1,
        name: "Pho",
        title: "Đay la mon an co truyen Ha Noi va Viet Nam",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quaerat, incidunt dolorum quod nisi unde autem. Labore atque necessitatibus maxime sit, deleniti inventore quaerat praesentium porro facere exercitationem, sunt officiis?",
        image: 'https://cdn.pixabay.com/photo/2020/11/29/07/06/honey-5786664_960_720.png'
    },
    
    {
        id: 2,
        name: "Banh da cua",
        title: "Đay la mon an co truyen Ha Noi va Viet Nam",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quaerat, incidunt dolorum quod nisi unde autem. Labore atque necessitatibus maxime sit, deleniti inventore quaerat praesentium porro facere exercitationem, sunt officiis?",
        image: 'https://cdn.pixabay.com/photo/2020/11/29/07/06/honey-5786664_960_720.png'
    },

    {
        id: 3,
        name: "Bun bo hue",
        title: "Đay la mon an co truyen Ha Noi va Viet Nam",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quaerat, incidunt dolorum quod nisi unde autem. Labore atque necessitatibus maxime sit, deleniti inventore quaerat praesentium porro facere exercitationem, sunt officiis?",
        image: 'https://cdn.pixabay.com/photo/2020/11/29/07/06/honey-5786664_960_720.png'
    },

    {
        id: 4,
        name: "Bun dau mam tom",
        title: "Đay la mon an co truyen Ha Noi va Viet Nam",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quaerat, incidunt dolorum quod nisi unde autem. Labore atque necessitatibus maxime sit, deleniti inventore quaerat praesentium porro facere exercitationem, sunt officiis?",
        image: 'https://cdn.pixabay.com/photo/2020/11/29/07/06/honey-5786664_960_720.png'
    },

    {
        id: 5,
        name: "Tiet canh",
        title: "Đay la mon an co truyen Ha Noi va Viet Nam",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quaerat, incidunt dolorum quod nisi unde autem. Labore atque necessitatibus maxime sit, deleniti inventore quaerat praesentium porro facere exercitationem, sunt officiis?",
        image: 'https://cdn.pixabay.com/photo/2020/11/29/07/06/honey-5786664_960_720.png'
    },

    {
        id: 6,
        name: "Banh cuon",
        title: "Day la mon an co truyen cua Viet Nam",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quaerat, incidunt dolorum quod nisi unde autem. Labore atque necessitatibus maxime sit, deleniti inventore quaerat praesentium porro facere exercitationem, sunt officiis?",
        image: 'https://cdn.pixabay.com/photo/2020/11/29/07/06/honey-5786664_960_720.png'
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

let products = document.querySelector('.products');



for (item of menu){
    products.innerHTML+=`
    <div class="item">
        <div class="product-view">
            <img src="${item.image}" alt="Error Image" class="img-icon">
        </div>
        <div class="content">
        
            <h3>${item.id}. ${item.name}</h3>
            <p>${item.title}</p>
            <button type='input' value="${item.name}">Add to list</button>
        </div>
    </div>
    `
}