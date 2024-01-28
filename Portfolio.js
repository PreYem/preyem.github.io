document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('Audio_01');
    audio.volume = 0.1;

    const video = document.querySelector('.BGVid');
    const paragraph = document.querySelector('.home-content p');
    const iframe = document.querySelector('.video iframe');
    const header = document.querySelector('header');
    const form = document.querySelector('.fill_form')

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

    paragraph.addEventListener('mouseover', addBlurOpacity);
    paragraph.addEventListener('mouseout', removeBlurOpacity);

    iframe.addEventListener('mouseover', addBlurOpacity);
    iframe.addEventListener('mouseout', removeBlurOpacity);

    header.addEventListener('mouseover', addBlurOpacity);
    header.addEventListener('mouseout', removeBlurOpacity);

    form.addEventListener('mouseover', addBlurOpacity);
    form.addEventListener('mouseout', removeBlurOpacity);
});
