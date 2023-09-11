var signs = [
    {name:'Capricorn',   m:1, d:20, order:  10, symbol:"\u2651"},
    {name:'Aquarius',    m:2, d:20, order:  11, symbol:"\u2652"},
    {name:'Pisces',      m:3, d:20, order:  12, symbol:"\u2653"},
    {name:'Aries',       m:4, d:20, order:  1,  symbol:"\u2648"},
    {name:'Taurus',      m:5, d:20, order:  2,  symbol:"\u2649"},
    {name:'Gemini',      m:6, d:21, order:  3,  symbol:"\u264A"},
    {name:'Cancer',      m:7, d:22, order:  4,  symbol:"\u264B"},
    {name:'Leo',         m:8, d:23, order:  5,  symbol:"\u264C"},
    {name:'Virgo',       m:9, d:23, order:  6,  symbol:"\u264D"},
    {name:'Libra',       m:10,d:23, order:  7,  symbol:"\u264E"},
    {name:'Scorpio',     m:11,d:22, order:  8,  symbol:"\u264F"},
    {name:'Sagittarius', m:12,d:21, order:  9,  symbol:"\u2650"},
    {name:'Capricorn',   m:13,d:20, order:  10, symbol:"\u2651"}
    ];
  
export function getSign(month, day) {
    if (signs[month].d<day){
      return signs[month+1]
    }
    return signs[month]
}

export async function getHoroscope(signName) {
  var sign = signs.filter(x => x.name == signName)

  var signOrder = sign.order

  var URL = "https://www.horoscope.com/us/horoscopes/pet/horoscope-pet-weekly.aspx?sign=" + signOrder
  let response = await fetch(URL)
  let data = await response.json()  




  return data
}

