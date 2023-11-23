#! /usr/bin/env node

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let choice_sentence = "";

console.log("+---------------------------------------+");
console.log("| Welcome to your choice making app 🙂! |");
console.log("|                                       |")
console.log("| Fast & Easy for makeing life  choices |");
console.log("| Let's JS make you life choics also    |")
console.log("+---------------------------------------+");
const question = (question) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
    //   console.log(`Thank you for your valuable feedback: ${answer}`);
      resolve(answer);
    });
  });
};

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

const main = async () => {
  const topic = await question("Enter topic to make choice on? \n");
  const no_of_choice = await question("No of options you have( >1 ): ")
  let choices = [];
  if(no_of_choice < 2){
    console.log("🥹 please enter no more than 1");
    
    rl.close();
    return;
  }
  console.log("No enter Your choices: ")
  for(let i = 0; i < no_of_choice; i++){
    choices.push(await question(`${i+1}.`));
  }
  console.log("Making your choice...")
  sleep(1000);
  console.log(".");
  sleep(1000);
  console.log(".");
  sleep(1000);
  console.log("----- LORD JS & Time choice ----");
  sleep(1000);
  
  const choice = Math.floor(Math.random() * (no_of_choice-1 - 0 + 1) + 0);

  console.log(choices[choice]);
  console.log();
  console.log("Javascript has chosen "+choices[choice]+" as you choice")
  console.log("")

  console.log("No one is liable for the choice you made with this program !! 😅 ")
  
  rl.close();
};
main();

rl.on("close", function () {
  process.exit(0);
});
