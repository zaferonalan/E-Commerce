document.querySelector(".loginBtn").addEventListener("click", function (event) {
  event.preventDefault(); // Sayfanın yeniden yüklenmesini engellemek için

  let girilenEmail = document.querySelector(".loginMail").value;
  let girilenSifre = document.querySelector(".loginPassword").value;

  let kullanicilar = JSON.parse(localStorage.getItem("kullanicilar")) || [];

  let girisKontrol = false;
  for (const element of kullanicilar) {
    if (girilenEmail == element.mail && girilenSifre == element.sifre) {
      girisKontrol = true;
      break;
    }
  }

  if (girisKontrol) {
    window.location.href = "index.html";
    localStorage.setItem("girisKontrol", true);
  } else {
    document.querySelector(".loginError").innerHTML =
      "Kullanıcı Adı veya Şifre Hatalı!";
    localStorage.setItem("girisKontrol", false);
  }
});

document.querySelector(".showPassword").addEventListener("change", function () {
  let girilenSifre = document.getElementById("exampleInputPassword1");
  let passwordToggle = document.querySelector(".password-toggle");

  if (this.checked) {
    girilenSifre.type = "text";
    passwordToggle.innerHTML = "Şifreyi Gizle";
  } else {
    girilenSifre.type = "password";
    passwordToggle.innerHTML = "Şifreyi Göster";
  }
});
