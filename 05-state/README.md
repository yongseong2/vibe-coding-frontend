# 5편: 상태(state)와 데이터 흐름

글: [상태(state)와 데이터 흐름](https://seongyong2.vercel.app/blog/state-and-data-flow)

[4편 폴더](../04-components)에서 이어서, 할 일 추가·완료·삭제가 실제로 동작하도록 상태를 붙인 상태입니다. 화면 모양은 4편과 같고, 버튼과 체크박스가 동작합니다. 새로고침하면 처음 세 줄로 돌아가는데, 서버에 저장하는 것은 6편에서 다룹니다.

## 따라 하기

4편 폴더를 복사한 뒤, 아래 네 파일을 이 폴더처럼 바꿉니다.

| 파일 | 바뀐 것 |
| --- | --- |
| [`App.jsx`](./src/App.jsx) | 할 일 목록을 `useState`로 관리하고 추가·완료·삭제 함수 추가 |
| [`TodoForm.jsx`](./src/components/TodoForm.jsx) | 입력 글자를 상태로 기억하고, 제출하면 `onAdd`로 알림 |
| [`TodoList.jsx`](./src/components/TodoList.jsx) | `onToggle`, `onDelete`를 받아 줄마다 넘김 |
| [`TodoItem.jsx`](./src/components/TodoItem.jsx) | 체크박스와 삭제 버튼에 함수 연결, 완료하면 취소선 |

상태는 `App` 한 곳에만 있습니다. 목록과 개수는 props로 내려가고, 입력 줄과 할 일 한 줄은 받은 함수를 불러서 변경을 알립니다. 완료 개수는 상태로 따로 두지 않고 목록에서 계산합니다.

## 동작 확인

375px 폭에서 실제로 눌러본 결과입니다.

| 한 일 | 목록 | 숫자 카드 |
| --- | --- | --- |
| 처음 | 3줄 | 전체 3 · 완료 1 · 남음 2 |
| "물 마시기" 추가 | 4줄 | 전체 4 · 완료 1 · 남음 3 |
| 두 번째 줄 체크 | 4줄 | 전체 4 · 완료 2 · 남음 2 |
| 세 번째 줄 삭제 | 3줄 | 전체 3 · 완료 2 · 남음 1 |
| 새로고침 | 3줄 | 처음으로 돌아감 |

## 깨진 화면 직접 내보기

아래처럼 한 군데씩 바꾸면 글의 "모르면 생기는 일"을 그대로 볼 수 있습니다. 네 경우 모두 콘솔에 에러가 뜨지 않습니다.

| 바꾸는 곳 | 생기는 일 |
| --- | --- |
| `App.jsx`의 `useState(initialTodos)`를 `let todos = initialTodos`로 바꾸고, `addTodo` 안을 `todos = [...todos, ...]`로 | 콘솔에 개수는 늘었다고 찍히지만 화면은 3줄 그대로 |
| `App.jsx`의 `addTodo` 안을 `todos.push(...)` 뒤 `setTodos(todos)`로 | 두 번 추가해도 3줄. 체크박스를 누르는 순간 5줄이 한꺼번에 나타남 |
| `TodoForm.jsx`에서 `event.preventDefault()` 줄 지우기 | 추가를 누르면 페이지가 새로고침되고, 주소가 `/?`로 바뀌며 적은 할 일이 사라짐 |
| `TodoList.jsx`에서 `const [items] = useState(todos)`로 복사해 `items.map`으로 그리기 | 숫자 카드는 전체 4로 바뀌는데 목록은 3줄에 멈춤 |
