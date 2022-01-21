let home_content = [

    {
        title: "Up to 365 days/ year",
        content: "Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.",
        icon: "far fa-infinity"
    },

    {
        title: "Ready in 20 minutes",
        content: "You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.",
        icon: "fal fa-alarm-clock"
    },

    {
        title: "100% organic",
        content: "All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!",
        icon: "fal fa-carrot"
    },

    {
        title: "Order anything",
        content: "We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!",
        icon: "far fa-shopping-cart"
    },

]

let content_boxes = document.querySelector('.content-boxes');

for (item of home_content){
    content_boxes.innerHTML+=`
    <div class="content-box">
        <i class="${item.icon}"></i>
        <p class="title">${item.title}</p>
        <p>${item.content}</p>
    </div>
    `
}

let home_banner = [
    {
        image: "./assets/images/1.jpg"
    },

    {
        image: "./assets/images/2.jpg"
    },

    {
        image: "./assets/images/3.jpg"
    },

    {
        image: "./assets/images/4.jpg"
    },

    {
        image: "./assets/images/5.jpg"
    },

    {
        image: "./assets/images/6.jpg"
    },

    {
        image: "./assets/images/7.jpg"
    },

    {
        image: "./assets/images/8.jpg"
    },
]

let homebanner = document.querySelector(".home-banner");

for (item of home_banner){
    homebanner.innerHTML+=`
    <img class="banner-image" src="${item.image}" alt="Error - Not found">
    `
}


let cities = [

    {
        image: "./assets/images/lisbon-3.jpg",
        title: "LISBON",
        content_1: "1600+ happy eaters",
        content_2: "60+ top chefs",
        content_3: "@omnifood lx"
    },

    {
        image: "./assets/images/san-francisco.jpg",
        title: "SAN FRANCISCO",
        content_1: "3700+ happy eaters",
        content_2: "160+ top chefs",
        content_3: "@omnifood lx"
    },

    {
        image: "./assets/images/berlin.jpg",
        title: "BERLIN",
        content_1: "2300+ happy eaters",
        content_2: "110+ top chefs",
        content_3: "@omnifood lx"
    },

    {
        image: "./assets/images/london.jpg",
        title: "LONDON",
        content_1: "1200+ happy eaters",
        content_2: "50+ top chefs",
        content_3: "@omnifood lx"
    },

]

let cities_content = document.querySelector('.cities-content');

for (item of cities){
    cities_content.innerHTML+=`
    <div class="col">
    <img src="${item.image}" alt="">
    <h4>${item.title}</h4>
    <div class="info">
        <i class="fas fa-arrow-circle-right"></i>
        <p>${item.content_1}</p>
    </div>
    <div class="info">
        <i class="fas fa-arrow-circle-right"></i>
        <p>${item.content_2}</p>
    </div>
    <div class="info">
        <i class="fas fa-arrow-circle-right"></i>
        <p class="twitter">${item.content_3}</p>
    </div>
    </div>
    `
}
