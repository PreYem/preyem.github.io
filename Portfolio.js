document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('Audio_01');
    audio.volume = 0.1;

    const video = document.querySelector('.BGVid');
    const paragraph = document.querySelector('.home-content p');
    const iframe = document.querySelector('.video iframe');
    const header = document.querySelector('header');
    const form = document.querySelector('.fill_form');

    function addBlurOpacity() {
        video.style.transition = "filter 0.5s ease, opacity 0.5s ease";
        video.style.filter = "blur(15px)";
        video.style.opacity = "0.4";
    }

    function removeBlurOpacity() {
        video.style.transition = "filter 0.5s ease, opacity 0.5s ease";
        video.style.filter = "blur(5px)";
        video.style.opacity = "0.8";
    }

    header.addEventListener('mouseover', addBlurOpacity);
    header.addEventListener('mouseout', removeBlurOpacity);

    paragraph.addEventListener('mouseover', addBlurOpacity);
    paragraph.addEventListener('mouseout', removeBlurOpacity);

    iframe.addEventListener('mouseover', addBlurOpacity);
    iframe.addEventListener('mouseout', removeBlurOpacity);



    form.addEventListener('mouseover', addBlurOpacity);
    form.addEventListener('mouseout', removeBlurOpacity);
});

document.addEventListener('DOMContentLoaded', function () {
    var showPortfolioBtn = document.getElementById('show-portfolio-btn');
    var portfolioContent = document.getElementById('portfolio-content');
    var audioElement = document.getElementById('Audio_01');

    showPortfolioBtn.addEventListener('click', function () {

        showPortfolioBtn.style.display = 'none';
        document.body.style.backgroundColor = 'black';
        document.body.style.overflow = 'auto';
        portfolioContent.style.display = 'block';


        audioElement.play();
    });
});
