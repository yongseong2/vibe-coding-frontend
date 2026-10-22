import TodoItem from './TodoItem.jsx'

// 할 일 목록. 할 일 배열(todos)을 받아서 한 줄씩 TodoItem으로 그린다.
// 체크와 삭제는 어느 할 일인지(id)를 붙여서 App의 함수로 넘긴다.
function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul className="mt-6 flex flex-col gap-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          text={todo.text}
          done={todo.done}
          onToggle={() => onToggle(todo.id)}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </ul>
  )
}

export default TodoList
