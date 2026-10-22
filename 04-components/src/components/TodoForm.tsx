// 입력 줄: 입력창이 남는 폭을 다 쓰고, 버튼은 줄어들지 않게
function TodoForm() {
  return (
    <form className="mt-6 flex gap-2">
      <input
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
