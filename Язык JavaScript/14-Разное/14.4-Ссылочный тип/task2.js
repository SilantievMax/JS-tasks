let obj, method;

obj = {
  go: function () {
    alert(this);
  },
};

obj.go(); // (1) [object Object]

obj.go(); // (2) [object Object]

(method = obj.go)(); // (3) undefined

(obj.go || obj.stop)(); // (4) undefined

f = obj.go; // вычисляется выражение (переменная f ссылается на код функции)
f(); // вызов функции, на которую ссылается f
