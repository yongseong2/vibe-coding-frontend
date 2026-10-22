# 6편: API와 데이터 가져오기

글: [API와 데이터 가져오기](https://seongyong2.vercel.app/blog/api-fetch-loading-error)

[5편 폴더](../05-state)에서 이어서, 할 일을 서버에 저장하고 불러오도록 바꾼 상태입니다. 새로고침해도 추가·완료·삭제한 내용이 남습니다. 서버는 `db.json` 파일을 API로 열어주는 [json-server](https://github.com/typicode/json-server)를 씁니다.

## 실행하기

터미널을 두 개 엽니다. 하나는 API 서버, 하나는 개발 서버입니다.

```bash
npm install
npm run server   # 터미널 1: http://localhost:3001/todos
npm run dev      # 터미널 2: http://localhost:5173/
```

json-server 1.0.0-beta.15는 Node.js 22.12 이상이 필요합니다.

## 따라 하기

5편 폴더를 복사한 뒤 `npm install -D json-server@1.0.0-beta.15`로 설치하고, 아래 파일을 이 폴더처럼 만들거나 바꿉니다.

| 파일 | 바뀐 것 |
| --- | --- |
| [`db.json`](./db.json) | 새 파일. 처음 할 일 세 개가 들어 있는 데이터 |
| [`package.json`](./package.json) | `server` 스크립트 추가 |
| [`vite.config.js`](./vite.config.js) | `db.json`이 바뀔 때 페이지가 새로고침되지 않게 감시에서 뺌 |
| [`src/api.js`](./src/api.js) | 새 파일. 목록 불러오기·추가·수정·삭제 요청을 모아둔 곳 |
| [`src/App.jsx`](./src/App.jsx) | 처음 나타날 때 목록을 불러오고, 불러오는 중·실패·빈 목록 화면 추가 |

컴포넌트 네 개(`StatCard`, `TodoForm`, `TodoList`, `TodoItem`)는 5편과 같습니다.

## 동작 확인

375px 폭에서 실제로 눌러본 결과입니다.

| 한 일 | 화면 | 서버에 간 요청 |
| --- | --- | --- |
| 처음 열기 | 3줄, 전체 3 · 완료 1 · 남음 2 | `GET /todos` 두 번 (아래 참고) |
| "물 마시기" 추가 | 4줄 | `POST /todos` |
| 두 번째 줄 체크 | 완료 2 | `PATCH /todos/2` |
| 세 번째 줄 삭제 | 3줄, 전체 3 · 완료 2 · 남음 1 | `DELETE /todos/3` |
| 새로고침 | 바꾼 그대로 3줄 | `GET /todos` |
| 응답을 2초 늦춤 | 2초 동안 "불러오는 중..." | |
| API 서버를 끔 | "할 일을 불러오지 못했어요." | 콘솔에 `TypeError: Failed to fetch` |

개발 모드에서는 React의 `StrictMode`가 화면을 확인하려고 effect를 한 번 더 실행해서 `GET /todos`가 두 번 보입니다. `npm run build` 후 `npm run preview`로 열면 한 번만 갑니다.

실습하면서 바뀐 `db.json`을 처음으로 되돌리려면 `git checkout -- db.json`을 실행합니다.

## 깨진 화면 직접 내보기

한 군데씩 바꾸고 결과를 보세요. 확인한 뒤에는 원래대로 돌려놓습니다.

| 바꾸는 곳 | 생기는 일 |
| --- | --- |
| `App.jsx`의 `useEffect` 끝 `}, [])`를 `})`로 | 요청이 끝없이 반복됨. 3초 동안 `GET /todos`가 666번 감 |
| `api.js`의 `'/todos'`를 `'/todo'`로 바꾸고 `if (!response.ok)` 검사를 지우기 | 흰 화면. 콘솔에 `todos.filter is not a function` |
| 위에서 `response.ok` 검사는 그대로 두기 | 에러 화면이 나오고 콘솔에 `요청 실패: 404` |
| `App.jsx`의 `.catch(...)`를 지우고 API 서버를 끄기 | "불러오는 중..."에서 멈춤 |
| `vite.config.js`의 `server.watch` 부분 지우기 | 추가·체크·삭제할 때마다 페이지 전체가 새로고침됨 |
