'use strict';

const Readline = require('readline');
const weather = require("./weather");
const time = require("./time");
const cond = require("./cond");

const rl = Readline.createInterface(
    {
        input : process.stdin,
        output : process.stdout,
        terminal:false
    }
);

const matcher = require('./matcher');

rl.setPrompt('>');
rl.prompt();
rl.on('line', reply => 
{
    matcher(reply, cb=> {
        switch(cb.intent){
            case "Hello": 
                console.log("Hello !");
                rl.prompt();
                break;
            case "Exit":
                console.log("See you later!");
                process.exit(0);
            case "CurrentWeather":
                weather(cb.entities.city);
                rl.prompt();
            case "CurrentTime":
                time(cb.entities.city);
                rl.prompt();
            case "CurrentCondition":
                cond(cb.entities.city, cb.entities.cond);
                rl.prompt();
                /*
            default: {
                console.log("I'm sorry I did not understand that");
                rl.prompt();                
            }
            */
        }
        
    });

});

