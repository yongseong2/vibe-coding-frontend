# 3편: 레이아웃 용어

글: [화면을 말로 설명하기: 레이아웃 용어](https://seongyong2.vercel.app/blog/layout-words-flex-grid-responsive)

[2편 폴더](../02-react-vite-tailwind)에서 이어서 할 일 앱의 첫 화면을 만든 상태입니다. 아직 버튼은 동작하지 않고, 화면 배치만 있습니다. 할 일 데이터는 `src/App.jsx` 맨 위에 적어둔 예시입니다.

## 따라 하기

2편 폴더를 복사하고 `src/App.jsx`를 이 폴더의 [`src/App.jsx`](./src/App.jsx)처럼 바꿉니다. 화면은 네 상자로 나뉩니다.

| 상자 | 배치 | 핵심 클래스 |
| --- | --- | --- |
| 제목 | 그대로 | `text-2xl font-bold` |
| 숫자 카드 세 개 | grid | `grid grid-cols-1 gap-3 sm:grid-cols-3` |
| 입력 줄 | flex | `flex gap-2`, 입력창에 `flex-1` |
| 할 일 목록 항목 | flex | `flex items-center gap-3` |

## 화면 폭 바꿔보기

브라우저 개발자 도구의 기기 모드(Chrome은 `Ctrl+Shift+M`, macOS는 `Cmd+Shift+M`)에서 폭을 375px과 1024px로 바꿔봅니다.

| 폭 | 숫자 카드 | 입력창 폭 |
| --- | --- | --- |
| 375px | 343px 폭으로 세로로 쌓임 | 271px |
| 1024px | 195px씩 한 줄에 셋 | 536px |

## 깨진 화면 직접 내보기

`src/App.jsx`에서 주석으로 표시한 클래스를 지우면 글의 "모르면 생기는 일"을 그대로 볼 수 있습니다. 375px 폭에서 확인합니다.

| 지우는 클래스 | 생기는 일 |
| --- | --- |
| 목록 글자의 `min-w-0 break-all`, 삭제 버튼의 `shrink-0` | 긴 링크가 줄바꿈되지 않아 삭제 버튼이 화면 밖으로 밀리고 가로 스크롤이 생긴다 |
| 입력창의 `min-w-0`, 추가 버튼의 `shrink-0` | "추가" 글자가 두 줄로 꺾여 버튼 높이가 72px이 된다 |
| 입력창의 `min-w-0`만 | 추가 버튼은 한 줄이지만 줄 끝을 11px 넘는다 |

다시 붙이면 가로 스크롤 없이 폭 안에 맞습니다.
