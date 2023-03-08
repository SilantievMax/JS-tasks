let links = document.querySelectorAll('a');

for (let link of links) {
  const href = link.getAttribute('href');
  if (!href) continue; // нет атрибута

  if (!href.includes('://')) continue; // нет протокола

  if (href.startsWith('http://internal.com')) continue; // внутренняя

  link.style.color = 'orange';
}