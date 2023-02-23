var _ = require('lodash');

var users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 28 },
    { name: "Bill", age: 65 },
    { name: "Emily", age: 17 },
    { name: "Jack", age: 30 }
   ]

   const newUser= _.groupBy(users, 'age')
   const reduser = _.filter(users, function(e){
    if(e.age>50){
        return console.log(e.name)
    }
   })
