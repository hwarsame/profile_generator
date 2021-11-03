const { RSA_X931_PADDING } = require('constants');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(` What's your name? Nicknames are also acceptable :) `, (answer) => {
  rl.question(`What's an activity you like doing? `, (answer2) => {
    rl.question(`What do you listen to while doing that? `, (answer3) => {
      rl.question(`Which meal is your favourite? (eg: dinner, brunch, etc.) `, (answer4) => {
        rl.question(`What's your favourite thing to eat for that meal? `, (answer5)=>{
          rl.question(`Which sport is your absolute favourite? `,(answer6)=> {
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `,(answer7)=> {
              console.log(`Thank you for your feedback: ${answer} likes to listen to ${answer3} while ${answer2}, devouring ${answer5} for ${answer4}, prefers ${answer6} over any sport, and is amazing at ${answer7}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});




