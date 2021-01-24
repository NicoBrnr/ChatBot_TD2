"use strict";

const axios=require("axios");
const apikey="93bc2ef22d7af6e70a175d7fecc25d99"

const getWeather=location=>{
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
            const temp=Math.trunc(weatherConditions.data.main.temp-273).toString();
            const feel_temp=Math.trunc(weatherConditions.data.main.feels_like-273);
            const descr = weatherConditions.data.weather[0].description.toString();
            

            if(feel_temp>30){
                console.log("It will be very hot in "+location+" today.");
            };
            if(feel_temp<0){
                console.log("It will be very cold in "+location+" today.");
            };

            console.log("Outside, it is "+temp.fontcolor("red")+" degree Celsius.");
            console.log("But, it feels like it is "+feel_temp+" degree Celsius and it will probably "+descr.fontcolor("red")+".");
        }
        catch(error){
            reject(error);
        }
    });
}

module.exports = getWeather;