export const getAll = async () => {
  const recebido = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const result = recebido.json();

  return result;
};
