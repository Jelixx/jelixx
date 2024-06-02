document.addEventListener("DOMContentLoaded", function() {
    const jobItems = document.querySelectorAll(".job-item");

    jobItems.forEach(item => {
        item.addEventListener("click", function() {
            this.classList.toggle("expanded");
        });
    });
});
