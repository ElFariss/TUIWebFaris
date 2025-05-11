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
         this.echo("[[b;#FFD700;]Available commands:] help, whoami, projects, contact, ls, clear");
      },
      whoami: function() {
         this.echo("[[;#ADFF2F;]You are a visitor curious enough to explore deeper.]");
      },
      projects: function() {
         this.echo("[[;#87CEFA;]1. Terminal Portfolio]\n[[;#FF8C00;]2. Cybersec Toolkit]\n[[;#DA70D6;]3. Personal Blog]");
      },
      contact: function() {
         this.echo("GitHub: [[!;;;;https://github.com/ElFariss]github.com/ElFariss]\nEmail: [[;#FFA07A;]fariselhakim898@gmail.com]");
      }
   }, {
     greetings: '[[b;#00FA9A;]Interactive Terminal | Type "help" to begin.]',
     name: 'web_terminal',
     prompt: '[[;#7CFC00;]user@guest:~$ ]'
   });
});
