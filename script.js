document.addEventListener("DOMContentLoaded", () => {

    /* ======================
       تأثير الزر
    ====================== */
    document.querySelectorAll(".btn").forEach(btn => {
        btn.addEventListener("mousedown", () => {
            btn.style.transform = "scale(0.96)";
        });
        btn.addEventListener("mouseup", () => {
            btn.style.transform = "scale(1)";
        });
    });

    /* ======================
       السماح بالأرقام فقط
    ====================== */
    document.querySelectorAll("input[type='tel']").forEach(input => {
        input.addEventListener("input", () => {
            input.value = input.value.replace(/[^0-9]/g, "");
        });
    });

    /* ======================
       إنشاء حساب (Register)
    ====================== */
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const phone = document.getElementById("registerPhone").value;
            const password = document.getElementById("registerPassword").value;

            if (phone.length < 8 || password.length < 6) {
                alert("الرجاء إدخال بيانات صحيحة");
                return;
            }

            // حفظ المستخدم (محاكاة قاعدة بيانات)
            localStorage.setItem("user", JSON.stringify({
                phone: phone,
                password: password
            }));

            alert("تم إنشاء الحساب بنجاح");
            window.location.href = "login.html";
        });
    }

    /* ======================
       تسجيل الدخول (Login)
    ====================== */
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const phone = document.getElementById("loginPhone").value;
            const password = document.getElementById("loginPassword").value;

            const user = JSON.parse(localStorage.getItem("user"));

            if (!user) {
                alert("لا يوجد حساب، الرجاء إنشاء حساب جديد");
                return;
            }

            if (user.phone === phone && user.password === password) {
                alert("تم تسجيل الدخول بنجاح");
                window.location.href = "home.html";
            } else {
                alert("رقم الهاتف أو كلمة المرور غير صحيحة");
            }
        });
    }

});


/* ======================
   Navigation Logic
====================== */
const homeSection = document.getElementById("homeSection");
const accountSection = document.getElementById("accountSection");

const navHome = document.getElementById("navHome");
const navAccount = document.getElementById("navAccount");

if (navHome && navAccount) {
    navHome.addEventListener("click", () => {
        homeSection.style.display = "block";
        accountSection.style.display = "none";
    });

    navAccount.addEventListener("click", () => {
        homeSection.style.display = "none";
        accountSection.style.display = "block";
    });
}

