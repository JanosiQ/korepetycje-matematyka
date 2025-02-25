document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("bookLesson").addEventListener("click", function() {
        let toast = document.getElementById("toast");
        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    });
});
