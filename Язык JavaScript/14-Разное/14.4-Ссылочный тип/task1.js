let user = {
    name: "John",
    go: function() { alert(this.name) }
  }
  
  (user.go)() // ошибка!

  let user = { go:... }(user.go)()

  let user = {
    name: "John",
    go: function() { alert(this.name) }
  };
  
  (user.go)() // John
  