function getData() {
    let names = document.getElementById("names").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value


    if(names == ""){
        return alert("tolong masukan nama mu!")
    }else if (email == ""){
        return alert("tolong masukan email mu!")
    }else if (phone == ""){
        return alert("tolong masukan nomor hp mu!")
    }else if (subject == ""){
        return alert("tolong masukan subject!")
    }else if (message == ""){
        return alert("tolong masukkan pesan mu!")
    }


    const emailDestination = "anandaagungismail@gmail.com"
    let alert = document.createElement("a")
    alert.href= `mailto:${emailDestination}?subject=${subject}&body= hallo nama saya, ${names}, saya ingin ${message} bisakah kamu mengubungi nomor saya sebagai berikut ${phone}`
    alert.click()

    const data = {
        names,
        email,
        phone,
        subject,
        message
    }

    console.log(data)
}

