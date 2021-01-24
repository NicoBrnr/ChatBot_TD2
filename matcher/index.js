'use strict';

const patterns = require('../patterns')
const XRegExp = require('xregexp');

let createEntities = (str, pattern) => {
    return XRegExp.exec(str, XRegExp(pattern, "i"))
}

let matchPattern=(str,cb)=>{
    
    //Write a function that check if str is in the patterns variable

    let getResult=patterns.find(elem => {
        if(XRegExp.test(str, XRegExp(elem.pattern, "i")))
        {
            return true;
        }
    });


    //Then, if indeed str is in the patterns variable, we should return the intent
    if(getResult){
        return cb({
            intent: getResult.intent,
            entities: createEntities(str, getResult.pattern)
        });


    } else{
        return cb({});
    }
    
}



module.exports = matchPattern;