document.addEventListener('DOMContentLoaded', function () {
    const bookNowButton = document.querySelector('.Button');
    bookNowButton.addEventListener('click', function () {
        const subheading = document.getElementById('subheading');
        subheading.textContent = "Your booking is now underway!";
        subheading.style.color = "teal";
    });
    const haveFunButton = document.querySelector('.Button_t');
    haveFunButton.addEventListener('click', function () {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = "Have more fun with us :)!";
        newParagraph.style.color = "green";
        newParagraph.style.fontWeight = "bold";

        const homeSection = document.getElementById('home');
        homeSection.appendChild(newParagraph);
    });
});  