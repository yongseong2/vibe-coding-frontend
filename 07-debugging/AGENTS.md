# AGENTS.md

AI 코딩 도구가 이 폴더에서 작업하기 전에 읽는 안내서입니다. 사람을 위한 설명은 [README.md](./README.md)에 있습니다.

## 이 프로젝트

- 블로그 시리즈 [바이브 코딩을 위한 프론트엔드 지식](https://seongyong2.vercel.app/blog/series)의 따라 하기 예제입니다. 시리즈 전체에서 할 일 관리 앱 하나를 키웁니다.
- 이 폴더는 7편 [디버깅의 기초: 콘솔, 네트워크, 재현 단계](https://seongyong2.vercel.app/blog/debugging-console-network-repro)의 내용을 끝까지 따라 한 상태입니다. 다음 내용은 8편 폴더에서 이어집니다.
- 6편에서 이어서, 저장 실패를 화면과 콘솔에 알리고 렌더링 에러는 `ErrorBoundary`로 안내하는 상태입니다.
- React 19, Vite 8, TypeScript, Tailwind CSS 4. 페이지는 하나뿐이고 라우터는 없습니다.
- 사용자는 프론트엔드를 배우는 중입니다. 바꾼 이유를 짧고 쉬운 말로 설명합니다.

## 명령

- `npm install`: 패키지 설치
- `npm run server`: API 서버 (http://localhost:3001/todos). 개발 서버와 다른 터미널에서 실행
- `npm run dev`: 개발 서버 (http://localhost:5173/)
- `npm run lint`: oxlint 검사
- `npm run build`: 타입 검사(`tsc -b`) 후 배포용 빌드

## 구조

- `src/components/ErrorBoundary.tsx`: 흰 화면 대신 에러 안내
- `src/App.tsx`: 추가·완료·삭제 실패 시 `notice` 문구
- `src/api.ts`: 서버 요청 함수 모음

## 규칙

- 실패를 조용히 넘기지 않습니다. 콘솔에 무엇이 실패했는지 남기고 화면에 알립니다.
- 버그를 고칠 때는 증상을 덮는 우회 코드보다 원인(요청 주소, 상태 코드, 보낸 내용)을 먼저 확인합니다.
- TypeScript로 씁니다. `any`를 쓰지 않고, 모르는 값은 `unknown`으로 받습니다.
- 새 패키지는 설치하기 전에 먼저 묻습니다.
- 사용자가 요청하지 않은 뒷편의 기능(서버 저장, 필터, 배포 설정 등)을 미리 넣지 않습니다.

## 끝났는지 확인하는 방법

1. `npm run lint`에 에러와 경고가 없다
2. `npm run build`가 타입 에러 없이 `✓ built`로 끝난다
3. 375px 폭에서 가로 스크롤이 생기지 않는다
4. 바꾼 파일 목록과 이유를 짧게 정리한다
