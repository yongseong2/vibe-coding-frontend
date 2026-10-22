// 서버와 주고받는 코드는 이 파일에만 둔다. 화면 코드는 아래 네 함수만 부른다.
//
// API 주소는 코드에 적지 않고 환경 변수 VITE_API_URL에서 읽는다.
// - 개발(npm run dev): .env.development의 http://localhost:3001 (json-server)
// - 배포(npm run build): 주소가 없으므로 브라우저 저장소(localStorage)에 저장한다
// VITE_로 시작하는 값은 빌드 결과물에 그대로 들어가서 누구나 볼 수 있다. 비밀 키를 넣지 않는다.
const API_URL = import.meta.env.VITE_API_URL

// fetch는 404나 500이 와도 에러를 던지지 않는다. 그래서 응답 상태를 직접 확인한다.
async function request(path, options) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  if (!response.ok) {
    throw new Error(`요청 실패: ${response.status}`)
  }
  return response.json()
}

const serverApi = {
  getTodos: () => request('/todos'),
  createTodo: (text) =>
    request('/todos', { method: 'POST', body: JSON.stringify({ text, done: false }) }),
  updateTodo: (id, changes) =>
    request(`/todos/${id}`, { method: 'PATCH', body: JSON.stringify(changes) }),
  deleteTodo: (id) => request(`/todos/${id}`, { method: 'DELETE' }),
}

// API 서버가 없을 때 쓰는 대체 저장소. 같은 브라우저에서만 남고, 다른 기기와는 공유되지 않는다.
const STORAGE_KEY = 'todos'
const initialTodos = [
  { id: '1', text: '장보기', done: true },
  { id: '2', text: '블로그 글 읽기', done: false },
]
const read = () => JSON.parse(localStorage.getItem(STORAGE_KEY) ?? JSON.stringify(initialTodos))
const write = (todos) => localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))

const localApi = {
  getTodos: async () => read(),
  createTodo: async (text) => {
    const created = { id: crypto.randomUUID(), text, done: false }
    write([...read(), created])
    return created
  },
  updateTodo: async (id, changes) => {
    const todos = read().map((todo) => (todo.id === id ? { ...todo, ...changes } : todo))
    write(todos)
    return todos.find((todo) => todo.id === id)
  },
  deleteTodo: async (id) => {
    write(read().filter((todo) => todo.id !== id))
    return {}
  },
}

const api = API_URL ? serverApi : localApi

export const { getTodos, createTodo, updateTodo, deleteTodo } = api
