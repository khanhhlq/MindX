let chao_hoi = prompt("Chào bạn! bạn có muốn nói chuyện với tôi không? 😁");

if (chao_hoi == "có" || chao_hoi == "yes" || chao_hoi == "ok" || chao_hoi == "oke"){

    alert("Ôi! tôi thật là vui khi bạn nói thế 😆");

    var ten_ban = prompt("Bạn tên là gì nhỉ? 👍");

    alert("Oh! còn tôi tên là Akira. Rất vui được gặp bạn ✋");

    var free_time = prompt("Không biết cuối tuần này bạn rảnh không? 👏");

    if (free_time == "có" || free_time == "yes" || free_time == "oke" || free_time == "ok"){

        var xem_phim = prompt("Vậy thì bọn mình cùng đi xem phim nhé? 🤦‍♂️");
        var keo = prompt("Oke vậy chốt kèo nhé bạn iu!!! 💖");

    } else if (free_time == "không" || free_time == "no" || free_time == "ko"){
        var dip_khac = prompt("Oh no! vậy thì để dịp khác vậy! Bạn thấy sao 😿")
        var tam_biet = prompt("Vậy thì hẹn bạn dịp khác. Giờ thì mình có việc rồi nên mình đi đây, chào cậu 💕")
        alert("Hihi!!! 🎉")
    }

} else if (chao_hoi == "không" || chao_hoi == "no" || chao_hoi == "ko"){
    alert("Oh no! vậy thì mình không làm phiền bạn nữa! Bye 👋")
}

let myAnswer = Array(chao_hoi, ten_ban, free_time, xem_phim, keo, dip_khac, tam_biet);
console.log(myAnswer);