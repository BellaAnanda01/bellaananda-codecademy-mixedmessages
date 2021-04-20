const zodiacSign = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricon', 'aquarius', 'pisces']
let numZodiac = Math.floor((Math.random() * 12) + 1)

const message = ['lucky', 'gonna be happy', 'gonna have a great day', 'the greatest', 'the best']
let numMessage = Math.floor((Math.random() * 4) + 1)

console.log(`Your zodiac sign is ${zodiacSign[numZodiac]} and the your horoscope said that you're ${message[numMessage]}`)