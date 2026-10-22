# AGENTS.md

AI 코딩 도구가 이 폴더에서 작업하기 전에 읽는 안내서입니다. 사람을 위한 설명은 [README.md](./README.md)에 있습니다.

## 이 프로젝트

- 블로그 시리즈 [바이브 코딩을 위한 프론트엔드 지식](https://seongyong2.vercel.app/blog/series)의 따라 하기 예제입니다. 시리즈 전체에서 할 일 관리 앱 하나를 키웁니다.
- 이 폴더는 9편 [Git으로 안전하게 실험하기](https://seongyong2.vercel.app/blog/git-commit-branch-restore)의 내용을 끝까지 따라 한 상태입니다. 다음 내용은 10편 폴더에서 이어집니다.
- 8편에서 이어서, Git 브랜치에서 할 일 필터(전체·진행 중·완료)를 추가한 상태입니다.
- React 19, Vite 8, TypeScript, Tailwind CSS 4. 페이지는 하나뿐이고 라우터는 없습니다.
- 사용자는 프론트엔드를 배우는 중입니다. 바꾼 이유를 짧고 쉬운 말로 설명합니다.

## 명령

- `npm install`: 패키지 설치
- `npm run server`: API 서버 (http://localhost:3001/todos). 개발 서버와 다른 터미널에서 실행
- `npm run dev`: 개발 서버 (http://localhost:5173/)
- `npm run lint`: oxlint 검사
- `npm run build`: 타입 검사(`tsc -b`) 후 배포용 빌드

## 구조

- `src/components/FilterTabs.tsx`: 필터 버튼과 `Filter` 타입
- `src/App.tsx`: 고른 필터 상태와 그릴 때마다 계산하는 `visibleTodos`

## 규칙

- 작업을 시작하기 전에 지금 상태를 커밋하고 새 브랜치에서 작업합니다.
- `git reset --hard`, `git clean -f`처럼 변경을 지우는 명령은 쓰기 전에 사용자에게 묻습니다.
- 끝나면 `git status`와 `git diff --stat` 결과를 보여줍니다.
- TypeScript로 씁니다. `any`를 쓰지 않고, 모르는 값은 `unknown`으로 받습니다.
- 새 패키지는 설치하기 전에 먼저 묻습니다.
- 사용자가 요청하지 않은 뒷편의 기능(서버 저장, 필터, 배포 설정 등)을 미리 넣지 않습니다.

## 끝났는지 확인하는 방법

1. `npm run lint`에 에러와 경고가 없다
2. `npm run build`가 타입 에러 없이 `✓ built`로 끝난다
3. 375px 폭에서 가로 스크롤이 생기지 않는다
4. 바꾼 파일 목록과 이유를 짧게 정리한다
