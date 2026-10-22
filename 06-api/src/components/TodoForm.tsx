import { useState, type FormEvent } from 'react'

// 입력 줄: 입력창이 남는 폭을 다 쓰고, 버튼은 줄어들지 않게
// 입력한 글자는 이 컴포넌트의 상태로 기억하고, 추가는 받은 onAdd로 App에 알린다
type TodoFormProps = {
  onAdd: (text: string) => void
}

function TodoForm({ onAdd }: TodoFormProps) {
  const [text, setText] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // 폼을 제출하면 브라우저가 페이지를 새로 불러오는 기본 동작을 막는다
    event.preventDefault()
    if (!text.trim()) return
    onAdd(text.trim())
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex gap-2">
      <input
        value={text}
        onChange={(event) => setText(event.target.value)}
        className="min-w-0 flex-1 rounded-xl border px-4 py-3"
        placeholder="할 일을 입력하세요"
      />
      <button className="shrink-0 rounded-xl bg-blue-600 px-4 py-3 text-white">
        추가
      </button>
    </form>
  )
}

export default TodoForm
