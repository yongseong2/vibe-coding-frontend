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
        <div className="rounded-xl bg-gray-100 p-4">전체 {todos.length}</div>
        <div className="rounded-xl bg-gray-100 p-4">완료 {doneCount}</div>
        <div className="rounded-xl bg-gray-100 p-4">
          남음 {todos.length - doneCount}
        </div>
      </section>

      {/* 입력 줄: 입력창이 남는 폭을 다 쓰고, 버튼은 줄어들지 않게 */}
      <form className="mt-6 flex gap-2">
        <input
          className="min-w-0 flex-1 rounded-xl border px-4 py-3"
          placeholder="할 일을 입력하세요"
        />
        <button className="shrink-0 rounded-xl bg-blue-600 px-4 py-3 text-white">
          추가
        </button>
      </form>

      {/* 할 일 목록: 긴 글자는 줄바꿈하고, 삭제 버튼은 줄어들지 않게 */}
      <ul className="mt-6 flex flex-col gap-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center gap-3 rounded-xl border p-4"
          >
            <input type="checkbox" defaultChecked={todo.done} />
            <span className="min-w-0 flex-1 break-all">{todo.text}</span>
            <button className="shrink-0 text-sm text-red-500">삭제</button>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
