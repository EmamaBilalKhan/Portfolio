document.querySelector('.menu-icon').addEventListener('click', function() {
    const overlayMenu = document.getElementById('overlay-menu');
    overlayMenu.style.display = 'block';
    overlayMenu.style.zIndex=1;
});

document.getElementById('close-btn').addEventListener('click', function() {
    const overlayMenu = document.getElementById('overlay-menu');
    overlayMenu.style.display = 'none';
});
document.querySelectorAll('.overlay-menu a').forEach(function(link) {
    link.addEventListener('click', function() {
        const overlayMenu = document.getElementById('overlay-menu');
        overlayMenu.style.display = 'none';

        const targetSection = document.querySelector(link.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
document.getElementById('form-submit').addEventListener("click", function(){
    alert("Form Submitted");
    document.getElementById("intro").scrollIntoView({ behavior: 'smooth' });
}
)