// 서버와 주고받는 코드는 이 파일에만 둔다. 화면 코드는 이 함수들만 부른다.
// json-server를 `npm run server`로 켜면 이 주소에서 할 일 API가 열린다.
const API_URL = 'http://localhost:3001'

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

export function getTodos() {
  return request('/todos')
}

export function createTodo(text) {
  return request('/todos', { method: 'POST', body: JSON.stringify({ text, done: false }) })
}

export function updateTodo(id, changes) {
  return request(`/todos/${id}`, { method: 'PATCH', body: JSON.stringify(changes) })
}

export function deleteTodo(id) {
  return request(`/todos/${id}`, { method: 'DELETE' })
}
