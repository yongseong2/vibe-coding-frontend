import type { Todo } from '../types.ts'
import TodoItem from './TodoItem.tsx'

// 할 일 목록. 할 일 배열(todos)을 받아서 한 줄씩 TodoItem으로 그린다.
type TodoListProps = {
  todos: Todo[]
}

function TodoList({ todos }: TodoListProps) {
  return (
    <ul className="mt-6 flex flex-col gap-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} text={todo.text} done={todo.done} />
      ))}
    </ul>
  )
}

export default TodoList
