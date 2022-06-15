document.getElementById("btnNo").addEventListener("mousemove", () => {
    document.getElementById("btnNo").innerHTML = "Trải nghiệm Ngay"
    document.getElementById("btnYes").innerHTML = "Xem thêm khoá học"
})

document.getElementById("btnNo").addEventListener("mouseleave", () => {
    document.getElementById("btnYes").innerHTML = "Trải nghiệm ngay"
    document.getElementById("btnNo").innerHTML ="Xem thêm khoá học"
})
