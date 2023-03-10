// Почему в коде ниже return false не работает?

{/* <script>
  function handler() {
    alert( "..." );
    return false;
  }
</script>

<a href="https://w3.org" onclick="handler()">браузер откроет w3.org</a> */}

// Ответ 

{/* <script>
  function handler(event) {
    alert("...");
    return false;            
    or
    event.preventDefault();
  }
</script> */}