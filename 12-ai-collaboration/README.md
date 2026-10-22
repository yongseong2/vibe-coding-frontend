# 12편: AI와 협업하는 법

글: [AI와 협업하는 법: 맡기고, 확인하고, 남기기](https://seongyong2.vercel.app/blog/working-with-ai-agents-md)

[11편 폴더](../11-a11y-perf-seo)에서 이어서, AI 코딩 도구가 읽을 안내서 `AGENTS.md`와 `CLAUDE.md`를 더한 시리즈의 마지막 상태입니다. 앱 코드는 11편과 같습니다.

## 실행하기

```bash
npm install
npm run server   # 터미널 1: http://localhost:3001/todos
npm run dev      # 터미널 2: http://localhost:5173/
```

## 따라 하기

11편 폴더를 복사한 뒤 아래 두 파일을 더합니다.

| 파일 | 하는 일 |
| --- | --- |
| [`AGENTS.md`](./AGENTS.md) | 프로젝트 설명, 명령, 구조, 규칙, 끝났는지 확인하는 방법. Codex, Cursor, GitHub Copilot 같은 여러 AI 도구가 읽음 |
| [`CLAUDE.md`](./CLAUDE.md) | 첫 줄 `@AGENTS.md`로 같은 내용을 Claude Code에 불러오고, Claude Code에만 줄 규칙을 덧붙임 |

`AGENTS.md`의 규칙은 1~11편에서 다룬 내용을 모은 것입니다.

| 규칙 | 나온 편 |
| --- | --- |
| props와 데이터에 타입 적기, `any` 쓰지 않기 | 4편, 6편 |
| 상태 배열은 새 배열로 바꾸고, 계산할 수 있는 값은 상태로 두지 않기 | 5편 |
| 서버 요청은 `api.ts`에 두고, 실패하면 화면에 알리기 | 6편, 7편 |
| 색과 모서리는 토큰만 쓰기 | 8편 |
| `VITE_` 환경 변수에 비밀 키 넣지 않기 | 10편 |
| 입력창과 버튼에 이름 붙이기 | 11편 |
| lint, build, 375px, 동작을 확인하고 끝내기 | 1편, 3편, 4편 |

## 써보기

AI 도구를 이 폴더에서 열고, 아래처럼 한 가지를 맡겨봅니다.

> 할 일마다 마감일을 넣을 수 있게 해줘. AGENTS.md의 규칙을 지키고, 끝나면 "끝났는지 확인하는 방법"의 다섯 가지 결과를 알려줘.

결과를 받으면 `git diff`로 바뀐 파일을 보고, 토큰 대신 색 값을 직접 쓴 곳이 없는지 확인합니다.
