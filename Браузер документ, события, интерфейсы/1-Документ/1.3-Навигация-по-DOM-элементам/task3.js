const table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];
  row.cells[i].style.backgroundColor = "red";
}

// let row = table.rows[2];
// row.cells[0].style.backgroundColor = "red";