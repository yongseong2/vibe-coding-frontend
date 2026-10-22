# AGENTS.md

AI 코딩 도구가 이 저장소에서 작업하기 전에 읽는 안내서입니다. 사람을 위한 설명은 [README.md](./README.md)에 있습니다.

## 이 저장소

- 블로그 시리즈 [바이브 코딩을 위한 프론트엔드 지식](https://seongyong2.vercel.app/blog/series)의 따라 하기 예제 모음입니다.
- 시리즈 전체에서 할 일 관리 앱 하나를 키웁니다. `01-npm-dev-server`부터 `12-ai-collaboration`까지 폴더 하나가 글 한 편이고, 각 폴더는 그 편을 끝까지 따라 한 상태의 독립된 Vite 프로젝트입니다.
- 모든 폴더는 React 19, Vite 8, TypeScript로 되어 있고, 2편부터 Tailwind CSS 4를 씁니다.
- 저장소 맨 위에는 `package.json`이 없습니다. 명령은 항상 편 폴더 안에서 실행합니다.

## 작업 방법

- 작업할 폴더를 먼저 정하고, 그 폴더의 `AGENTS.md`를 읽습니다. 폴더마다 그 편까지의 구조와 규칙이 적혀 있습니다.
- 사용자가 "내 할 일 앱"을 고쳐달라고 하면, 보통 가장 최근에 따라 한 편의 폴더를 복사한 프로젝트입니다. 어느 편까지 했는지 모르면 먼저 묻습니다.
- 한 폴더를 고치면서 다른 편 폴더를 함께 바꾸지 않습니다. 앞 편 폴더는 그 편의 글과 맞아야 합니다.
- 폴더를 추가하거나 이름을 바꾸면 루트 `README.md`의 목차 표도 함께 고칩니다.

## 명령 (각 폴더 안에서)

- `npm install`: 패키지 설치
- `npm run dev`: 개발 서버 (http://localhost:5173/)
- `npm run server`: 6편부터 있는 API 서버 (http://localhost:3001/todos)
- `npm run lint`: oxlint 검사
- `npm run build`: 타입 검사(`tsc -b`) 후 배포용 빌드

## 끝났는지 확인하는 방법

1. 바꾼 폴더에서 `npm run lint`에 에러와 경고가 없다
2. 바꾼 폴더에서 `npm run build`가 타입 에러 없이 `✓ built`로 끝난다
3. 바꾼 폴더의 `README.md`가 실제 코드와 맞는다
