# 바이브 코딩을 위한 프론트엔드 지식: 예제

블로그 시리즈 [바이브 코딩을 위한 프론트엔드 지식](https://seongyong2.vercel.app/blog/series)을 읽으면서 따라 할 수 있는 예제 저장소입니다.

시리즈 전체에서 **할 일 관리 앱** 하나를 키워갑니다. 폴더 하나가 글 한 편이고, 각 폴더에는 그 편을 끝까지 따라 했을 때의 프로젝트가 들어 있습니다. 모든 폴더는 TypeScript로 되어 있습니다.

| 편 | 글 | 폴더 | 이 편에서 하는 일 |
| --- | --- | --- | --- |
| 0편 | [바이브 코딩에도 지식이 필요한 이유](https://seongyong2.vercel.app/blog/vibe-coding-needs-frontend-knowledge) | 없음 | 시리즈 소개와 준비 |
| 1편 | [프로젝트의 정체: npm, 패키지, 빌드, 개발 서버](https://seongyong2.vercel.app/blog/npm-package-build-dev-server) | [`01-npm-dev-server`](./01-npm-dev-server) | Vite로 프로젝트를 만들고 실행, 빌드 |
| 2편 | [프레임워크 고르기: React, Next.js, Vite](https://seongyong2.vercel.app/blog/react-nextjs-vite-choose-stack) | [`02-react-vite-tailwind`](./02-react-vite-tailwind) | 1편 프로젝트에 Tailwind CSS 붙이기 |
| 3편 | [화면을 말로 설명하기: 레이아웃 용어](https://seongyong2.vercel.app/blog/layout-words-flex-grid-responsive) | [`03-layout`](./03-layout) | flex, grid, 반응형으로 첫 화면 만들기 |
| 4편 | [컴포넌트로 생각하기](https://seongyong2.vercel.app/blog/components-split-props-key) | [`04-components`](./04-components) | 첫 화면을 컴포넌트 네 개로 나누기 |
| 5편 | [상태(state)와 데이터 흐름](https://seongyong2.vercel.app/blog/state-and-data-flow) | [`05-state`](./05-state) | 상태를 붙여 추가·완료·삭제 동작시키기 |
| 6편 | [API와 데이터 가져오기](https://seongyong2.vercel.app/blog/api-fetch-loading-error) | [`06-api`](./06-api) | json-server에 저장하고 불러오기, 로딩·에러 화면 |
| 7편 | [디버깅의 기초: 콘솔, 네트워크, 재현 단계](https://seongyong2.vercel.app/blog/debugging-console-network-repro) | [`07-debugging`](./07-debugging) | 실패를 화면에 알리고 흰 화면 대신 에러 안내 |
| 8편 | [디자인 토큰으로 일관성 지키기](https://seongyong2.vercel.app/blog/design-tokens-tailwind-theme) | [`08-design-tokens`](./08-design-tokens) | 색과 모서리를 토큰으로, 다크 모드 |
| 9편 | [Git으로 안전하게 실험하기](https://seongyong2.vercel.app/blog/git-commit-branch-restore) | [`09-git`](./09-git) | 브랜치에서 할 일 필터 추가, 되돌리기 연습 |
| 10편 | [보안과 배포의 기본: 환경 변수, XSS, Vercel](https://seongyong2.vercel.app/blog/env-security-vercel-deploy) | [`10-deploy`](./10-deploy) | API 주소를 환경 변수로, 배포 준비 |
| 11편 | [성능, 접근성, SEO를 Lighthouse로 점검하기](https://seongyong2.vercel.app/blog/lighthouse-performance-accessibility-seo) | [`11-a11y-perf-seo`](./11-a11y-perf-seo) | Lighthouse 점수 88·82를 100으로 |
| 12편 | [AI와 협업하는 법: 맡기고, 확인하고, 남기기](https://seongyong2.vercel.app/blog/working-with-ai-agents-md) | [`12-ai-collaboration`](./12-ai-collaboration) | AI가 읽을 AGENTS.md와 CLAUDE.md 작성 |

12편으로 시리즈가 끝납니다. `12-ai-collaboration`이 완성된 할 일 앱입니다.

## AI 도구와 함께 쓰기

저장소 맨 위와 각 폴더에 `AGENTS.md`가 있습니다. Codex, Cursor, GitHub Copilot 같은 AI 코딩 도구가 작업 전에 읽는 안내서로, 이 프로젝트가 무엇이고 그 편까지 어떤 규칙을 지키는지 적혀 있습니다. Claude Code는 `CLAUDE.md`를 읽으니, 첫 줄에 `@AGENTS.md`를 적은 `CLAUDE.md`를 만들어 연결합니다. 12편 폴더에 예시가 있습니다.

## 준비물

| 도구 | 확인 명령 | 설치 |
| --- | --- | --- |
| Node.js (22.12 이상) | `node -v` | [nodejs.org](https://nodejs.org/ko/download)에서 LTS 버전 |
| Git | `git --version` | [git-scm.com](https://git-scm.com/downloads) |
| AI 코딩 도구 | | [Claude 데스크톱 앱](https://claude.com/download), [Claude Code](https://code.claude.com/docs/en/setup), [Codex](https://developers.openai.com/codex/cli) 중 하나 |
| 코드 에디터, Chrome | | 각 공식 사이트 |

자세한 설치 순서는 [0편](https://seongyong2.vercel.app/blog/vibe-coding-needs-frontend-knowledge)에 있습니다. Git으로 커밋하기 전에는 `git config --global user.name`과 `user.email`을 한 번 정해야 합니다(9편).

## 사용법

두 가지 방법이 있습니다.

- **처음부터 따라 하기**: 1편부터 글을 보면서 내 컴퓨터에 직접 만듭니다. 막히면 해당 편 폴더와 내 프로젝트를 비교해봅니다.
- **중간부터 시작하기**: 이전 편 폴더를 복사해서 이번 편을 이어서 합니다. 예를 들어 4편부터 시작한다면 `03-layout`에서 출발합니다.

어느 폴더든 실행 방법은 같습니다.

```bash
git clone https://github.com/yongseong2/vibe-coding-frontend.git
cd vibe-coding-frontend/05-state
npm install
npm run dev
```

터미널에 뜬 `http://localhost:5173/`을 브라우저에서 엽니다.

## 확인 환경

Node.js 22.22.0, npm 10.9.4, create-vite 9.3.1, Vite 8.3.5, React 19.3.1, TypeScript 6.0.3, Tailwind CSS 4.3.3 (2026년 10월 22일)

각 폴더의 `package-lock.json`에 설치 버전이 고정되어 있어서, `npm install`을 하면 같은 버전이 설치됩니다.

Node.js는 20.19 이상 또는 22.12 이상이 필요합니다. 6편부터 쓰는 json-server 1.0.0-beta.15는 Node.js 22.12 이상이 필요합니다.

6편부터는 API 서버를 함께 켭니다. 터미널을 하나 더 열고 같은 폴더에서 `npm run server`를 실행합니다.
