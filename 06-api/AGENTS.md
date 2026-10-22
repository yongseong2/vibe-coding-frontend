# AGENTS.md

AI 코딩 도구가 이 폴더에서 작업하기 전에 읽는 안내서입니다. 사람을 위한 설명은 [README.md](./README.md)에 있습니다.

## 이 프로젝트

- 블로그 시리즈 [바이브 코딩을 위한 프론트엔드 지식](https://seongyong2.vercel.app/blog/series)의 따라 하기 예제입니다. 시리즈 전체에서 할 일 관리 앱 하나를 키웁니다.
- 이 폴더는 6편 [API와 데이터 가져오기](https://seongyong2.vercel.app/blog/api-fetch-loading-error)의 내용을 끝까지 따라 한 상태입니다. 다음 내용은 7편 폴더에서 이어집니다.
- 할 일을 json-server(`db.json`)에 저장하고 불러오는 상태입니다. 불러오는 중, 실패, 빈 목록 화면이 있습니다.
- React 19, Vite 8, TypeScript, Tailwind CSS 4. 페이지는 하나뿐이고 라우터는 없습니다.
- 사용자는 프론트엔드를 배우는 중입니다. 바꾼 이유를 짧고 쉬운 말로 설명합니다.

## 명령

- `npm install`: 패키지 설치
- `npm run server`: API 서버 (http://localhost:3001/todos). 개발 서버와 다른 터미널에서 실행
- `npm run dev`: 개발 서버 (http://localhost:5173/)
- `npm run lint`: oxlint 검사
- `npm run build`: 타입 검사(`tsc -b`) 후 배포용 빌드

## 구조

- `db.json`: json-server가 여는 데이터
- `src/api.ts`: 서버 요청 함수 모음
- `src/App.tsx`: 처음 열 때 목록을 불러오고 단계(`Status`)별 화면을 보여줌
- `src/types.ts`: 할 일 타입. `id`는 `string`

## 규칙

- 서버 요청은 `src/api.ts`에만 둡니다. 응답이 `ok`가 아니면 에러로 처리합니다.
- `useEffect`로 불러올 때 의존성 배열 `[]`을 빼지 않습니다.
- `db.json`을 Vite 감시 대상에 다시 넣지 않습니다(`vite.config.ts`의 `server.watch`).
- TypeScript로 씁니다. `any`를 쓰지 않고, 모르는 값은 `unknown`으로 받습니다.
- 새 패키지는 설치하기 전에 먼저 묻습니다.
- 사용자가 요청하지 않은 뒷편의 기능(서버 저장, 필터, 배포 설정 등)을 미리 넣지 않습니다.

## 끝났는지 확인하는 방법

1. `npm run lint`에 에러와 경고가 없다
2. `npm run build`가 타입 에러 없이 `✓ built`로 끝난다
3. 375px 폭에서 가로 스크롤이 생기지 않는다
4. 바꾼 파일 목록과 이유를 짧게 정리한다
