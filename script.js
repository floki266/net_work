document.addEventListener("DOMContentLoaded", () => {

    // تأثير الزر
    document.querySelectorAll(".btn").forEach(btn => {
        btn.addEventListener("mousedown", () => {
            btn.style.transform = "scale(0.96)";
        });
        btn.addEventListener("mouseup", () => {
            btn.style.transform = "scale(1)";
        });
    });

    // السماح بالأرقام فقط في الهاتف
    document.querySelectorAll("input[type='tel']").forEach(input => {
        input.addEventListener("input", () => {
            input.value = input.value.replace(/[^0-9]/g, "");
        });
    });

});
