import StatCard from './components/StatCard.jsx'
import TodoForm from './components/TodoForm.jsx'
import TodoList from './components/TodoList.jsx'

const todos = [
  { id: 1, text: '장보기', done: true },
  { id: 2, text: '블로그 글 읽기', done: false },
  {
    id: 3,
    text: 'https://seongyong2.vercel.app/blog/layout-words-flex-grid-responsive',
    done: false,
  },
]

function App() {
  const doneCount = todos.filter((todo) => todo.done).length

  return (
    <main className="mx-auto max-w-2xl p-4 sm:p-8">
      <h1 className="text-2xl font-bold">할 일</h1>

      {/* 숫자 카드: 휴대폰에서는 세로로 쌓고, 640px 이상에서 한 줄에 셋 */}
      <section className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <StatCard label="전체" count={todos.length} />
        <StatCard label="완료" count={doneCount} />
        <StatCard label="남음" count={todos.length - doneCount} />
      </section>

      <TodoForm />
      <TodoList todos={todos} />
    </main>
  )
}

export default App
