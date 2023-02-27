const app = document.getElementById('typewriter');
app.classList.add('typewriter-text');
 
const typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,

});


typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#619b8a;"> Apasionada por el desarrollo educativo y comunitario.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
