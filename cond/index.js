"use strict";

const axios=require("axios");
const apikey="93bc2ef22d7af6e70a175d7fecc25d99"

const getCond=(location, cond)=>{
    return new Promise(async(resolve, reject)=>{
        try{
            const weatherConditions = await axios.get(
                "https://api.openweathermap.org/data/2.5/weather",
                {
                    params: {
                        appid:apikey,
                        q:location,
                    }
                }
            );

            //resolve(weatherConditions.data)
            const descr = weatherConditions.data.weather[0].description.toString();
                
            if(cond==descr){
                console.log("Yes, it will be "+descr);
            }
            else{
                console.log("No, it will be "+descr);
            }

        }
        catch(error){
            reject(error);
        }
    });
}

module.exports = getCond;