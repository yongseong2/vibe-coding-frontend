# 바이브 코딩을 위한 프론트엔드 지식: 예제

블로그 시리즈 [바이브 코딩을 위한 프론트엔드 지식](https://seongyong2.vercel.app/blog/series)을 읽으면서 따라 할 수 있는 예제 저장소입니다.

시리즈 전체에서 **할 일 관리 앱** 하나를 키워갑니다. 폴더 하나가 글 한 편이고, 각 폴더에는 그 편을 끝까지 따라 했을 때의 프로젝트가 들어 있습니다.

| 편 | 글 | 폴더 | 이 편에서 하는 일 |
| --- | --- | --- | --- |
| 0편 | [바이브 코딩에도 지식이 필요한 이유](https://seongyong2.vercel.app/blog/vibe-coding-needs-frontend-knowledge) | 없음 | 시리즈 소개와 준비 |
| 1편 | [프로젝트의 정체: npm, 패키지, 빌드, 개발 서버](https://seongyong2.vercel.app/blog/npm-package-build-dev-server) | [`01-npm-dev-server`](./01-npm-dev-server) | Vite로 프로젝트를 만들고 실행, 빌드 |
| 2편 | [프레임워크 고르기: React, Next.js, Vite](https://seongyong2.vercel.app/blog/react-nextjs-vite-choose-stack) | [`02-react-vite-tailwind`](./02-react-vite-tailwind) | 1편 프로젝트에 Tailwind CSS 붙이기 |
| 3편 | [화면을 말로 설명하기: 레이아웃 용어](https://seongyong2.vercel.app/blog/layout-words-flex-grid-responsive) | [`03-layout`](./03-layout) | flex, grid, 반응형으로 첫 화면 만들기 |

새 편이 올라오면 폴더도 하나씩 늘어납니다.

## 사용법

두 가지 방법이 있습니다.

- **처음부터 따라 하기**: 1편부터 글을 보면서 내 컴퓨터에 직접 만듭니다. 막히면 해당 편 폴더와 내 프로젝트를 비교해봅니다.
- **중간부터 시작하기**: 이전 편 폴더를 복사해서 이번 편을 이어서 합니다. 예를 들어 3편부터 시작한다면 `02-react-vite-tailwind`에서 출발합니다.

어느 폴더든 실행 방법은 같습니다.

```bash
git clone https://github.com/yongseong2/vibe-coding-frontend.git
cd vibe-coding-frontend/03-layout
npm install
npm run dev
```

터미널에 뜬 `http://localhost:5173/`을 브라우저에서 엽니다.

## 확인 환경

Node.js 22.22.0, npm 10.9.4, create-vite 9.3.1, Vite 8.3.5, React 19.3.1, Tailwind CSS 4.3.3 (2026년 10월 21일)

각 폴더의 `package-lock.json`에 설치 버전이 고정되어 있어서, `npm install`을 하면 같은 버전이 설치됩니다.

Node.js는 20.19 이상 또는 22.12 이상이 필요합니다.
