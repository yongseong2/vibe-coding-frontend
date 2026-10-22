import type { Todo } from './types.ts'

// 서버와 주고받는 코드는 이 파일에만 둔다. 화면 코드는 아래 네 함수만 부른다.
//
// API 주소는 코드에 적지 않고 환경 변수 VITE_API_URL에서 읽는다.
// - 개발(npm run dev): .env.development의 http://localhost:3001 (json-server)
// - 배포(npm run build): 주소가 없으므로 브라우저 저장소(localStorage)에 저장한다
// VITE_로 시작하는 값은 빌드 결과물에 그대로 들어가서 누구나 볼 수 있다. 비밀 키를 넣지 않는다.
const API_URL = import.meta.env.VITE_API_URL

type TodoChanges = Partial<Omit<Todo, 'id'>>

// 서버를 쓰든 브라우저 저장소를 쓰든 화면 코드가 부르는 함수는 같다
type TodoApi = {
  getTodos: () => Promise<Todo[]>
  createTodo: (text: string) => Promise<Todo>
  updateTodo: (id: string, changes: TodoChanges) => Promise<Todo>
  deleteTodo: (id: string) => Promise<void>
}

// fetch는 404나 500이 와도 에러를 던지지 않는다. 그래서 응답 상태를 직접 확인한다.
async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  if (!response.ok) {
    throw new Error(`요청 실패: ${response.status}`)
  }
  return response.json()
}

const serverApi: TodoApi = {
  getTodos: () => request<Todo[]>('/todos'),
  createTodo: (text) =>
    request<Todo>('/todos', { method: 'POST', body: JSON.stringify({ text, done: false }) }),
  updateTodo: (id, changes) =>
    request<Todo>(`/todos/${id}`, { method: 'PATCH', body: JSON.stringify(changes) }),
  deleteTodo: async (id) => {
    await request<Todo>(`/todos/${id}`, { method: 'DELETE' })
  },
}

// API 서버가 없을 때 쓰는 대체 저장소. 같은 브라우저에서만 남고, 다른 기기와는 공유되지 않는다.
const STORAGE_KEY = 'todos'
const initialTodos: Todo[] = [
  { id: '1', text: '장보기', done: true },
  { id: '2', text: '블로그 글 읽기', done: false },
]
const read = (): Todo[] => {
  const saved = localStorage.getItem(STORAGE_KEY)
  return saved ? JSON.parse(saved) : initialTodos
}
const write = (todos: Todo[]) => localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))

const localApi: TodoApi = {
  getTodos: async () => read(),
  createTodo: async (text) => {
    const created = { id: crypto.randomUUID(), text, done: false }
    write([...read(), created])
    return created
  },
  updateTodo: async (id, changes) => {
    const todos = read().map((todo) => (todo.id === id ? { ...todo, ...changes } : todo))
    write(todos)
    const updated = todos.find((todo) => todo.id === id)
    if (!updated) throw new Error(`할 일을 찾지 못함: ${id}`)
    return updated
  },
  deleteTodo: async (id) => {
    write(read().filter((todo) => todo.id !== id))
  },
}

const api = API_URL ? serverApi : localApi

export const { getTodos, createTodo, updateTodo, deleteTodo } = api
