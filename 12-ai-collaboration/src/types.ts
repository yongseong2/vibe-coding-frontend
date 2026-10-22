// 할 일 하나의 모양. 여러 컴포넌트가 같은 모양을 쓰므로 한 곳에 정해둔다.
// json-server는 id를 문자열로 만들어서 6편부터 id는 string이다.
export type Todo = {
  id: string
  text: string
  done: boolean
}
