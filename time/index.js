"use strict";

const axios=require("axios");
const apikey="93bc2ef22d7af6e70a175d7fecc25d99"

const getTime=location=>{
    return new Promise(async(resolve, reject)=>{
        try{
            const timeAPI = await axios.get(
                "https://api.openweathermap.org/data/2.5/weather",
                {
                    params: {
                        appid:apikey,
                        q:location,
                    }
                }
            );

            const time = timeAPI.data.sys.sunset
            const timeString=new Date(time*1000);

            console.log("The sunset will be at "+timeString.getHours()+"h",timeString.getHours()+"min.");
        }
        catch(error){
            reject(error);
        }
    });
}

module.exports = getTime;