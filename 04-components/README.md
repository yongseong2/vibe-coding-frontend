# 4편: 컴포넌트로 생각하기

글: [컴포넌트로 생각하기](https://seongyong2.vercel.app/blog/components-split-props-key)

[3편 폴더](../03-layout)에서 이어서, 한 파일에 있던 첫 화면을 컴포넌트 네 개로 나눈 상태입니다. 화면은 3편과 똑같고 코드만 나뉘었습니다. 버튼은 아직 동작하지 않습니다. 추가·완료·삭제는 5편에서 붙입니다.

## 따라 하기

3편 폴더를 복사하고 `src/components` 폴더를 만든 뒤, 아래 네 파일을 추가합니다. 할 일 하나의 모양(`id`, `text`, `done`)은 여러 파일이 함께 쓰므로 [`src/types.ts`](./src/types.ts)에 `Todo` 타입으로 정해둡니다. 그다음 `src/App.tsx`를 이 폴더의 [`src/App.tsx`](./src/App.tsx)처럼 바꿉니다.

| 파일 | 맡은 일 | 받는 props (타입) |
| --- | --- | --- |
| [`StatCard.tsx`](./src/components/StatCard.tsx) | 숫자 카드 하나 | `label: string`, `count: number` |
| [`TodoForm.tsx`](./src/components/TodoForm.tsx) | 입력 줄 | 없음 |
| [`TodoItem.tsx`](./src/components/TodoItem.tsx) | 할 일 한 줄 | `text: string`, `done: boolean` |
| [`TodoList.tsx`](./src/components/TodoList.tsx) | 할 일 목록 | `todos: Todo[]` |

`src/App.tsx`는 55줄에서 36줄이 되고, 할 일 데이터와 화면 순서만 남습니다.

## 화면이 그대로인지 확인하기

나누기 전과 후의 화면은 같아야 합니다. 3편 폴더와 이 폴더를 각각 `npm run dev`로 띄워 375px 폭에서 비교해봤더니, 화면을 그린 HTML이 한 글자도 다르지 않았습니다.

## 깨진 화면 직접 내보기

아래처럼 한 군데씩 바꾸면 글의 "모르면 생기는 일"을 그대로 볼 수 있습니다. 브라우저 개발자 도구의 콘솔(Console) 탭을 열어두고, `npm run build`와 `npm run lint`도 함께 실행해봅니다.

| 바꾸는 곳 | 화면과 콘솔 | `npm run build` (타입 검사) |
| --- | --- | --- |
| `TodoList.tsx`에서 `key={todo.id}` 지우기 | 화면은 멀쩡하지만 콘솔에 `Each child in a list should have a unique "key" prop.` 에러 | 통과. `npm run lint`가 `Missing "key" prop` 경고로 잡음 |
| `TodoList.tsx`에서 `text={todo.text} done={todo.done}`을 `todo={todo}`로 바꾸기 | 에러 없이 할 일 세 줄의 글자가 모두 빈칸 | 실패. `Property 'todo' does not exist on type ... TodoItemProps` |
| `App.tsx`에서 `import TodoList ...` 줄 지우기 | 흰 화면. 콘솔에 `TodoList is not defined` | 실패. `Cannot find name 'TodoList'` |
| `TodoList.tsx`에서 `TodoItem`을 `todoItem`으로 바꾸기 | 목록이 사라지고 콘솔에 `is using incorrect casing` 에러 | 실패. `Property 'todoItem' does not exist on type 'JSX.IntrinsicElements'` |

개발 서버(`npm run dev`)는 타입을 검사하지 않고 화면을 띄웁니다. 그래서 화면에서는 JavaScript와 같은 증상이 나오고, 타입 에러는 `npm run build`나 에디터의 빨간 밑줄로 확인합니다.
