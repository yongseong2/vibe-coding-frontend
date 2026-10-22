import { useState } from 'react'

// 입력 줄: 입력창이 남는 폭을 다 쓰고, 버튼은 줄어들지 않게
// 입력한 글자는 이 컴포넌트의 상태로 기억하고, 추가는 받은 onAdd로 App에 알린다
function TodoForm({ onAdd }) {
  const [text, setText] = useState('')

  const handleSubmit = async (event) => {
    // 폼을 제출하면 브라우저가 페이지를 새로 불러오는 기본 동작을 막는다
    event.preventDefault()
    if (!text.trim()) return
    // 저장에 성공했을 때만 입력창을 비운다. 실패하면 적은 글자가 그대로 남는다.
    const saved = await onAdd(text.trim())
    if (saved) setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex gap-2">
      {/* 눈에는 안 보이지만 화면 읽기 프로그램이 읽는 이름. placeholder는 이름을 대신하지 못한다 */}
      <label htmlFor="new-todo" className="sr-only">
        새 할 일
      </label>
      <input
        id="new-todo"
        value={text}
        onChange={(event) => setText(event.target.value)}
        className="min-w-0 flex-1 rounded-card border border-line px-4 py-3"
        placeholder="할 일을 입력하세요"
      />
      <button className="shrink-0 rounded-card bg-primary px-4 py-3 text-on-primary">
        추가
      </button>
    </form>
  )
}

export default TodoForm
