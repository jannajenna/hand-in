
const btn = document.getElementById("btn");

const msg = document.getElementById("message");


btn.addEventListener("mouseover", () => {
    msg.classList.add('visible');
    msg.classList.remove('hidden');
});


btn.addEventListener("mouseout", () => {
    msg.classList.add('hidden');
    msg.classList.remove('visible');
});


/*btn.addEventListener("mouseout", () => {
    msg.classList.toggle('hidden', true);
    msg.classList.toggle('visible', false);
}); */
