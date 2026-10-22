# 8편: 디자인 토큰으로 일관성 지키기

글: [디자인 토큰으로 일관성 지키기](https://seongyong2.vercel.app/blog/design-tokens-tailwind-theme)

[7편 폴더](../07-debugging)에서 이어서, 색과 모서리를 `src/index.css` 한 곳에 이름(토큰)으로 정해두고 컴포넌트는 그 이름만 쓰도록 바꾼 상태입니다. 컴퓨터나 휴대폰이 다크 모드면 어두운 색으로 바뀝니다.

## 실행하기

```bash
npm install
npm run server   # 터미널 1: http://localhost:3001/todos
npm run dev      # 터미널 2: http://localhost:5173/
```

## 따라 하기

7편 폴더를 복사한 뒤 아래 파일을 이 폴더처럼 바꿉니다.

| 파일 | 바뀐 것 |
| --- | --- |
| [`src/index.css`](./src/index.css) | 색 11개와 모서리 1개를 토큰으로 정의. 다크 모드 값도 여기에 |
| `src/App.jsx`, `src/components/*.jsx` | `bg-blue-600` 같은 값을 `bg-primary` 같은 토큰 이름으로 바꿈 |

바꾼 클래스는 아래와 같습니다.

| 7편 | 8편 | 뜻 |
| --- | --- | --- |
| `bg-blue-600`, `text-white` | `bg-primary`, `text-on-primary` | 주요 버튼과 그 위 글자 |
| `bg-gray-100` | `bg-surface` | 숫자 카드 배경 |
| `border` | `border border-line` | 입력창과 할 일 테두리 |
| `text-gray-400`, `text-gray-500` | `text-muted` | 흐린 글자 |
| `text-red-500`, `text-red-700`, `bg-red-50` | `text-danger`, `bg-danger-soft` | 삭제, 에러 |
| `text-amber-800`, `bg-amber-50` | `text-warning`, `bg-warning-soft` | 저장 실패 안내 |
| `rounded-xl` | `rounded-card` | 카드, 입력창, 버튼 모서리 |

## 동작 확인

- 375px 폭에서 7편과 같은 화면이 나옵니다.
- 브라우저 개발자 도구의 Rendering 패널에서 `prefers-color-scheme: dark`를 고르면 배경이 어두워지고, 버튼은 조금 밝은 파랑(`#3b82f6`)으로 바뀝니다.
- 7편 폴더는 다크 모드로 바꿔도 흰 배경 그대로입니다.

## 깨진 화면 직접 내보기

| 바꾸는 곳 | 생기는 일 |
| --- | --- |
| `TodoForm.jsx`의 `bg-primary`를 `bg-primay`로 (오타) | 추가 버튼 배경이 투명해져 흰 글자가 안 보임. 콘솔 에러 없고 `npm run build`도 통과 |
| `TodoForm.jsx`의 `bg-primary`를 `bg-[#2563eb]`로 | 밝은 화면에서는 같아 보이지만, 다크 모드에서 이 버튼만 색이 안 바뀜 |
| `index.css`의 `--primary` 값을 `#16a34a`로 | 버튼과 체크박스가 한꺼번에 초록색으로 바뀜 (토큰을 쓴 효과) |
