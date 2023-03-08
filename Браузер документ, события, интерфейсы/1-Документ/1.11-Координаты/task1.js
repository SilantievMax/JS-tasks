const fieldCoords = field.getBoundingClientRect();  

const answer = [
  [
    // 1
    fieldCoords.left,
    fieldCoords.top,
  ],
  [
    // 2
    fieldCoords.right,
    fieldCoords.bottom,
  ],
  [
    // 3
    fieldCoords.left + field.clientLeft,
    fieldCoords.top + field.clientTop,
  ],
  [
    // 4
    fieldCoords.left + field.clientLeft + field.clientWidth,
    fieldCoords.top + field.clientTop + field.clientHeight,
  ],
];

let b = document.querySelector("#result");

const result1 = `верхний левый, внешний угол - ${answer[0][0]} : ${answer[0][1]}`;
const result2 = `нижний правый, внешний угол - ${answer[1][0]} : ${answer[1][1]}`;
const result3 = `верхний левый, внутренний угол - ${answer[2][0]} : ${answer[2][1]}`;
const result4 = `нижний правый, внутренний угол - ${answer[3][0]} : ${answer[3][1]}`;

const result = [result1, result2, result3, result4].map(e => b.innerHTML += "<p>" + e + "</p>") 

result.append(result);

// alert(answer.join("  "));
