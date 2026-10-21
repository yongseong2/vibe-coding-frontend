// 할 일 한 줄. 긴 글자는 줄바꿈하고, 삭제 버튼은 줄어들지 않게
function TodoItem({ text, done }) {
  return (
    <li className="flex items-center gap-3 rounded-xl border p-4">
      <input type="checkbox" defaultChecked={done} />
      <span className="min-w-0 flex-1 break-all">{text}</span>
      <button className="shrink-0 text-sm text-red-500">삭제</button>
    </li>
  )
}

export default TodoItem
