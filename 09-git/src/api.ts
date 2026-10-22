import type { Todo } from './types.ts'

// 서버와 주고받는 코드는 이 파일에만 둔다. 화면 코드는 이 함수들만 부른다.
// json-server를 `npm run server`로 켜면 이 주소에서 할 일 API가 열린다.
const API_URL = 'http://localhost:3001'

// fetch는 404나 500이 와도 에러를 던지지 않는다. 그래서 응답 상태를 직접 확인한다.
// <T>는 "이 요청이 돌려줄 데이터의 모양"이다. 부르는 쪽에서 정한다.
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

export function getTodos() {
  return request<Todo[]>('/todos')
}

export function createTodo(text: string) {
  return request<Todo>('/todos', { method: 'POST', body: JSON.stringify({ text, done: false }) })
}

export function updateTodo(id: string, changes: Partial<Omit<Todo, 'id'>>) {
  return request<Todo>(`/todos/${id}`, { method: 'PATCH', body: JSON.stringify(changes) })
}

export function deleteTodo(id: string) {
  return request<Todo>(`/todos/${id}`, { method: 'DELETE' })
}
