// Во время выполнения <script> последним DOM-узлом является <script>, потому что браузер ещё не обработал остальную часть страницы.

// Поэтому результатом будет 1 (узел-элемент).

// <html>

// <body>
//   <script>
//     alert(document.body.lastChild.nodeType);
//   </script>
// </body>

// </html>
