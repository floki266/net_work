document.addEventListener("DOMContentLoaded", () => {

  // ===== حماية الصفحة =====
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser) {
    window.location.href = "login.html";
    return;
  }

  // ===== ربط بيانات الحساب =====
  document.getElementById("accPhone").value = currentUser.phone;
  document.getElementById("accPassword").value = currentUser.password;

  // ===== التنقل =====
  const btnHome = document.getElementById("btnHome");
  const btnAccount = document.getElementById("btnAccount");
  const homePage = document.getElementById("homePage");
  const accountPage = document.getElementById("accountPage");

  btnHome.onclick = () => {
    homePage.classList.add("active");
    accountPage.classList.remove("active");
    btnHome.classList.add("active");
    btnAccount.classList.remove("active");
  };

  btnAccount.onclick = () => {
    accountPage.classList.add("active");
    homePage.classList.remove("active");
    btnAccount.classList.add("active");
    btnHome.classList.remove("active");
  };

  // ===== تسجيل الخروج =====
  document.getElementById("logout").onclick = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
  };

});
