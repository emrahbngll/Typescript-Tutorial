import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((Response) => {
  const todo = Response.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  logTodo(id, title, completed);

  console.log(`
The Todo with ID: ${id}
Has a title of: ${title}
Is it completed? ${completed}

`);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The Todo with ID: ${id}
  Has a title of: ${title}
  Is it completed? ${completed}
  
  `);
};
const today = new Date();
today.getMonth();
console.log(today);

const person = {
  age: 20,
};
