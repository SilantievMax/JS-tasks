let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});

arr[2](); // ?


// Каков результат?

// Ответ [ 'a', 'b', [Function (anonymous)] ]
