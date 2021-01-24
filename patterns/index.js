const patternDict = [
    {
        pattern: '\\b(?<greeting>Hi|Hello|Hey)\\b',
        intent: 'Hello'
    },
    {
        pattern: '\\b(?<exit>by|exit)\\b',
        intent: 'Exit'
    },
    {
        pattern : '\\bweather\\b\\slike\\sin\\s\\b(?<city>.+.)\\b(?<time>tomorrow|today)',
        intent : 'CurrentWeather'     
    },
    {
        pattern : '\\bweather\\bin\\s\\b(?<city>.+.)\\b(?<time>tomorrow|today)',
        intent : 'CurrentWeather'     
    },
    {
        pattern : '\\bweather\\b\\sin\\s\\b(?<city>.+.)\\b',
        intent : 'CurrentWeather'     
    },
    {
        pattern : '\\bweather\\b\\slike\\sin\\s\\b(?<city>.+.)\\b',
        intent : 'CurrentWeather'     
    },
    {
        pattern : '\\b(?<time>time)\\b\\sin\\s\\b(?<city>.+.)\\b',
        intent : 'CurrentTime'     
    },
    {
        pattern : '(?<cond>be rainy|be sunny)\\sin\\s\\b(?<city>.+.)\\s\\bthe day',
        intent : 'CurrentCondition'
    },

        
]

module.exports = patternDict;