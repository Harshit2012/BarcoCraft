let qr_box = document.getElementById("qr-box");
let qr_img = document.getElementById("qr-img");
let qrText = document.getElementById("qrText");
let popup = document.getElementById("popup");

$(window).load(function() {
    $(".se-pre-con").fadeOut("slow");;
});

function open_popup(){
    popup.classList.add("open_popup");
}

function generateQR(){
    if(qrText.value.length > 0){
        qr_img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        qr_img.classList.add("show-box");
        open_popup();
    }
    else{
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove("error");
        },1000);
    }
}

function closePopup(){
    popup.classList.remove("open_popup");
}
