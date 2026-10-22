import { useState } from 'react'
import StatCard from './components/StatCard.tsx'
import TodoForm from './components/TodoForm.tsx'
import TodoList from './components/TodoList.tsx'
import type { Todo } from './types.ts'

const initialTodos: Todo[] = [
  { id: 1, text: '장보기', done: true },
  { id: 2, text: '블로그 글 읽기', done: false },
  {
    id: 3,
    text: 'https://seongyong2.vercel.app/blog/layout-words-flex-grid-responsive',
    done: false,
  },
]

function App() {
  // 할 일 목록은 숫자 카드와 목록이 함께 쓰므로 App 한 곳에서 상태로 관리한다
  const [todos, setTodos] = useState(initialTodos)
  // 완료 개수는 상태로 따로 두지 않고, 그릴 때마다 목록에서 계산한다
  const doneCount = todos.filter((todo) => todo.done).length

  // 추가·완료·삭제 모두 기존 배열을 고치지 않고 새 배열을 만들어 넘긴다
  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, done: false }])
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <main className="mx-auto max-w-2xl p-4 sm:p-8">
      <h1 className="text-2xl font-bold">할 일</h1>

      {/* 숫자 카드: 휴대폰에서는 세로로 쌓고, 640px 이상에서 한 줄에 셋 */}
      <section className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <StatCard label="전체" count={todos.length} />
        <StatCard label="완료" count={doneCount} />
        <StatCard label="남음" count={todos.length - doneCount} />
      </section>

      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </main>
  )
}

export default App
