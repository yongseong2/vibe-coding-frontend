// 할 일 한 줄. 긴 글자는 줄바꿈하고, 삭제 버튼은 줄어들지 않게
// 체크와 삭제는 직접 목록을 고치지 않고 받은 함수로 알린다
type TodoItemProps = {
  text: string
  done: boolean
  onToggle: () => void
  onDelete: () => void
}

function TodoItem({ text, done, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="flex items-center gap-3 rounded-card border border-line p-4">
      {/* label로 감싸면 화면 읽기 프로그램이 체크박스를 "장보기"라고 읽고, 글자를 눌러도 체크된다 */}
      <label className="flex min-w-0 flex-1 items-center gap-3">
        <input type="checkbox" checked={done} onChange={onToggle} className="accent-primary" />
        <span className={`min-w-0 flex-1 break-all ${done ? 'text-muted line-through' : ''}`}>
          {text}
        </span>
      </label>
      {/* 버튼 글자는 모두 "삭제"라서, 무엇을 지우는지 aria-label로 알려준다 */}
      <button onClick={onDelete} aria-label={`${text} 삭제`} className="shrink-0 text-sm text-danger">
        삭제
      </button>
    </li>
  )
}

export default TodoItem
