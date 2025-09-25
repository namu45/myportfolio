// Smooth scroll
const links=document.querySelectorAll('.nav-links a');
links.forEach(link=>{
    link.addEventListener('click',e=>{
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
});

// Animate sections
const elements=document.querySelectorAll('.animate-section,.animate-left,.animate-right,.animate-up');
const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity=1;
            entry.target.style.transform='translateX(0) translateY(0)';
        }
    });
},{threshold:0.1});
elements.forEach(el=>observer.observe(el));

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
