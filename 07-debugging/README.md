# 7편: 디버깅의 기초

글: [디버깅의 기초: 콘솔, 네트워크, 재현 단계](https://seongyong2.vercel.app/blog/debugging-console-network-repro)

[6편 폴더](../06-api)에서 이어서, 문제가 생겼을 때 조용히 넘어가지 않고 화면과 콘솔에 알리도록 바꾼 상태입니다. 할 일 앱의 기능은 6편과 같습니다.

## 실행하기

```bash
npm install
npm run server   # 터미널 1: http://localhost:3001/todos
npm run dev      # 터미널 2: http://localhost:5173/
```

## 따라 하기

6편 폴더를 복사한 뒤 아래 파일을 이 폴더처럼 만들거나 바꿉니다.

| 파일 | 바뀐 것 |
| --- | --- |
| [`src/components/ErrorBoundary.jsx`](./src/components/ErrorBoundary.jsx) | 새 파일. 화면을 그리다 에러가 나면 흰 화면 대신 안내와 에러 메시지를 보여줌 |
| [`src/main.jsx`](./src/main.jsx) | `App`을 `ErrorBoundary`로 감쌈 |
| [`src/App.jsx`](./src/App.jsx) | 추가·완료·삭제가 실패하면 콘솔에 남기고 화면에 안내 문구를 보여줌 |
| [`src/components/TodoForm.jsx`](./src/components/TodoForm.jsx) | 저장에 성공했을 때만 입력창을 비움 |

## 6편에서 찾은 문제

6편 코드로 할 일 앱을 쓰다가 API 서버를 끄고 할 일을 추가하면, 화면에는 아무 변화가 없고 입력한 글자만 사라집니다. 콘솔에는 `Uncaught (in promise) TypeError: Failed to fetch`가 남습니다. 이 폴더에서는 같은 상황에서 입력한 글자가 남고, 입력창 아래에 "할 일을 추가하지 못했어요. API 서버(npm run server)가 켜져 있는지 확인해주세요."가 나옵니다.

## 버그 세 개 직접 찾아보기

한 군데씩 바꾸고, 글에서 다룬 개발자 도구로 원인을 찾아보세요. 확인한 뒤에는 원래대로 돌려놓습니다.

| 바꾸는 곳 | 보이는 증상 | 원인을 찾는 곳 |
| --- | --- | --- |
| `api.js`의 `'/todos'`를 `'/todo'`로, `if (!response.ok)`를 `if (false)`로 | "화면을 그리다 문제가 생겼어요"와 `todos.filter is not a function` | Console의 에러 위치(`App.jsx`), Network에서 `todo` 요청이 404 |
| `App.jsx`의 `{ done: !target.done }`을 `{ done: target.done }`으로 | 체크박스를 눌러도 아무 변화 없음. 에러도 없음 | Network에서 `PATCH /todos/2`의 Payload가 `{"done":false}` |
| API 서버 터미널에서 `Ctrl + C` | 추가하면 안내 문구가 나옴 | Network에서 요청 상태가 `(failed)`, Console에 `할 일 추가 실패` |

실습하면서 바뀐 `db.json`을 처음으로 되돌리려면 `git checkout -- db.json`을 실행합니다.
