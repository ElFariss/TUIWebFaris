
function updateClock() {
   const now = new Date();
 
   const hours = now.getHours().toString().padStart(2, '0');
   const minutes = now.getMinutes().toString().padStart(2, '0');
   const seconds = now.getSeconds().toString().padStart(2, '0');
 
   const currentTime = `${hours}:${minutes}:${seconds}`;
 
   const clockElement = document.getElementById('clock');
 
   // Use regex to replace the time part only
   clockElement.textContent = clockElement.textContent.replace(/\d{2}:\d{2}:\d{2}/, currentTime);
 }
 
 setInterval(updateClock, 1000);
 updateClock();
;

$(function() {
   $('#interactive-terminal').terminal({
      ls: function() {
         this.echo("[[;#00FF00;]main.html]     [[;#00CED1;]script.js]     [[;#FF69B4;]styles.css]");
      },
      help: function() {
         this.echo("[[b;#FFD700;]Available commands:] help, whoami, fastfetch, projects, contact, ls, clear");
      },
      whoami: function() {
         this.echo("[[;#ADFF2F;]You are a visitor curious enough to explore deeper.]");
      },
      projects: function() {
         this.echo("[[;#87CEFA;]1. Terminal Portfolio]\n[[;#FF8C00;]2. Cybersec Toolkit]\n[[;#DA70D6;]3. Personal Blog]");
      },
      contact: function() {
         this.echo("GitHub: [[!;;;;https://github.com/ElFariss]github.com/ElFariss]\nEmail: [[;#FFA07A;]fariselhakim898@gmail.com]");
      },
      fastfetch: function() {
         this.echo(
            "[[;#12a0ff;]                  -`                     user@guest\n" +
            "                 .o+`                    -------------------\n" +
            "                `ooo/                    OS: Arch Linux x86_64\n" +
            "               `+oooo:                   Host: Server\n" +
            "              `+oooooo:                  Kernel: Linux 6.14.5-arch1-1\n" +
            "              -+oooooo+:                 \n" +
            "            `/:-:++oooo+:                Packages: none\n" +
            "           `/++++/+++++++:               Shell: js\n" +
            "          `/++++++++++++++:              Display: Works\n" +
            "         `/+++ooooooooooooo/`            \n" +
            "        ./ooosssso++osssssso+`           Theme: Bladerunner\n" +
            "       .oossssso-````/ossssss+`          Icons: Adwaita [GTK2/3]\n" +
            "[[;#12a0ff;]      -osssssso.      :ssssssso.         Font: monospace\n" +
            "     :osssssss/        osssso+++.        \n" +
            "    /ossssssss/        +ssssooo/-        Terminal: jquery.terminal\n" +
            "  `/ossssso+/:-        -:/+osssso+-      Terminal Font: monospace\n" +
            " `+sso+:-`                 `.-/+oso:     Locale: C.UTF-8\n" +
            "`++:.                           `-/+/    \n" +
            ".`                                 `/    \n" +
            "                                          \n"
            );
      }
   }, {
     greetings: '[[b;#00FA9A;]Interactive Terminal | Type "help" to begin.]',
     name: 'web_terminal',
     prompt: '[[;#7CFC00;]user@guest:~$ ]'
   });
});

window.addEventListener('load', () => {
   const loader = document.getElementById('loader');
   const main = document.getElementById('main-content');
   const loaderText = document.getElementById('loader-text');
   const dots = document.getElementById('loading-dots');
 
   let dotCount = 0;
   const dotInterval = setInterval(() => {
     dotCount = (dotCount + 1) % 4;
     dots.textContent = '.'.repeat(dotCount);
   }, 800);
 
   // Wait for hold duration
   setTimeout(() => {
     clearInterval(dotInterval); // Stop the dot animation
     loaderText.textContent = 'Welcome';
     dots.textContent = '';
 
     // Begin fade out
     loader.classList.add('fade-out');
 
     // Show main content after fade
     setTimeout(() => {
       main.classList.add('visible');
     }, 1000); // Match fade-out transition
   }, 5000); // Hold duration
 });
