import { useEffect, useState } from 'react'
import { createTodo, deleteTodo, getTodos, updateTodo } from './api.js'
import StatCard from './components/StatCard.jsx'
import TodoForm from './components/TodoForm.jsx'
import TodoList from './components/TodoList.jsx'

function App() {
  // 처음에는 빈 목록이고, 서버에서 받아오면 채운다
  const [todos, setTodos] = useState([])
  // 불러오는 중(loading), 실패(error), 성공(success) 중 지금 어디인지
  const [status, setStatus] = useState('loading')
  // 추가·완료·삭제가 실패했을 때 보여줄 안내 문구
  const [notice, setNotice] = useState('')
  const doneCount = todos.filter((todo) => todo.done).length

  // 서버에서 목록을 받아온다. 성공하면 목록을 채우고, 실패하면 에러 화면으로 바꾼다.
  const loadTodos = () =>
    getTodos()
      .then((data) => {
        setTodos(data)
        setStatus('success')
      })
      .catch((error) => {
        console.error(error)
        setStatus('error')
      })

  // 화면이 처음 나타날 때 한 번만 불러온다. 빈 배열 []을 빼면 요청이 끝없이 반복된다.
  useEffect(() => {
    loadTodos()
  }, [])

  const retry = () => {
    setStatus('loading')
    loadTodos()
  }

  // 저장이 실패하면 콘솔에 무엇이 실패했는지 남기고, 화면에도 알린다
  const fail = (action, error) => {
    console.error(`할 일 ${action} 실패:`, error)
    setNotice(`할 일을 ${action}하지 못했어요. API 서버(npm run server)가 켜져 있는지 확인해주세요.`)
  }

  // 서버에 먼저 저장하고, 서버가 돌려준 결과로 화면을 바꾼다.
  // 성공 여부를 돌려줘서, 실패하면 입력창의 글자를 지우지 않게 한다.
  const addTodo = async (text) => {
    try {
      const created = await createTodo(text)
      setTodos([...todos, created])
      setNotice('')
      return true
    } catch (error) {
      fail('추가', error)
      return false
    }
  }

  const toggleTodo = async (id) => {
    const target = todos.find((todo) => todo.id === id)
    try {
      const updated = await updateTodo(id, { done: !target.done })
      setTodos(todos.map((todo) => (todo.id === id ? updated : todo)))
      setNotice('')
    } catch (error) {
      fail('수정', error)
    }
  }

  const removeTodo = async (id) => {
    try {
      await deleteTodo(id)
      setTodos(todos.filter((todo) => todo.id !== id))
      setNotice('')
    } catch (error) {
      fail('삭제', error)
    }
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

      {notice && (
        <p role="alert" className="mt-4 rounded-xl bg-amber-50 p-4 text-amber-800">
          {notice}
        </p>
      )}

      {/* 상태마다 다른 화면: 불러오는 중, 실패, 비어 있음, 목록 */}
      {status === 'loading' && <p className="mt-6 text-gray-500">불러오는 중...</p>}
      {status === 'error' && (
        <div className="mt-6 rounded-xl bg-red-50 p-4 text-red-700">
          <p>할 일을 불러오지 못했어요.</p>
          <button onClick={retry} className="mt-2 underline">
            다시 시도
          </button>
        </div>
      )}
      {status === 'success' && todos.length === 0 && (
        <p className="mt-6 text-gray-500">아직 할 일이 없어요. 위에서 하나 추가해보세요.</p>
      )}
      {status === 'success' && (
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={removeTodo} />
      )}
    </main>
  )
}

export default App
