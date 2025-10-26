export function getRandomItem(arr) {
  if (!arr || arr.length === 0) return arr[0]; // manejo seguro si el array está vacío

  // Creamos un pool local cada vez que se necesita mezclar
  let pool = [...arr];

  // Mezclamos con Fisher-Yates
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  // Sacamos un elemento aleatorio
  return pool.pop();
}
