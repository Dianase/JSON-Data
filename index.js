const beers = require('./beers.json')

// enter a number from 0 to 179 
// output the name of the beer, the price, and the 
// average rating using  **** (use Math.round)

function ratingConvert(rate) {
  let avg = rate
  switch (avg) {
     case 1 :
         return '*'
         break
     case 2 :
      return '**'
         break
     case 3 :
      return '***'
         break
     case 4 :
         return '****'
         break
     case 5 :
         return '*****'
         break
     default :
         return 'no rating'
  }
}

function findBeer(num){
  let rating = beers[num].rating.average
  //console.log(rating)
  rating = Math.round(rating)
  //console.log(rating, 13)
  rating = ratingConvert(rating)
  console.log(beers[num].name + ' ' + beers[num].price + ' ' + rating)
}

console.time()
 findBeer(7)
console.timeEnd()
