const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");
modal.style.display = "none";

const images = document.querySelectorAll(".image-grid img");
images.forEach(img => {
    img.addEventListener("click", function () {
        captionText.textContent = "";
        modal.style.display = "block";
        modalImg.src = this.src;
        const article = this.closest("article");
        const description = article ? article.dataset.description : '';
        const caption = description || this.alt;
        captionText.innerHTML = `<p>${caption}</p>`;
    });
});


closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
