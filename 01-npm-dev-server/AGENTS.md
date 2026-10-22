# AGENTS.md

AI 코딩 도구가 이 폴더에서 작업하기 전에 읽는 안내서입니다. 사람을 위한 설명은 [README.md](./README.md)에 있습니다.

## 이 프로젝트

- 블로그 시리즈 [바이브 코딩을 위한 프론트엔드 지식](https://seongyong2.vercel.app/blog/series)의 따라 하기 예제입니다. 시리즈 전체에서 할 일 관리 앱 하나를 키웁니다.
- 이 폴더는 1편 [프로젝트의 정체: npm, 패키지, 빌드, 개발 서버](https://seongyong2.vercel.app/blog/npm-package-build-dev-server)의 내용을 끝까지 따라 한 상태입니다. 다음 내용은 2편 폴더에서 이어집니다.
- Vite의 React + TypeScript 템플릿(`react-ts`)으로 막 만든 프로젝트입니다. 화면은 템플릿 그대로입니다.
- React 19, Vite 8, TypeScript. 페이지는 하나뿐이고 라우터는 없습니다.
- 사용자는 프론트엔드를 배우는 중입니다. 바꾼 이유를 짧고 쉬운 말로 설명합니다.

## 명령

- `npm install`: 패키지 설치
- `npm run dev`: 개발 서버 (http://localhost:5173/)
- `npm run lint`: oxlint 검사
- `npm run build`: 타입 검사(`tsc -b`) 후 배포용 빌드

## 구조

- `package.json`: 패키지와 실행 명령
- `index.html`: 브라우저가 처음 여는 페이지
- `src/main.tsx`: React를 화면에 붙이는 시작점
- `src/App.tsx`: 템플릿 화면
- `tsconfig*.json`: TypeScript 검사 설정

## 규칙

- 이 폴더는 1편의 출발점입니다. 템플릿 화면을 할 일 앱으로 바꾸는 일은 2편부터 합니다.
- TypeScript로 씁니다. `any`를 쓰지 않고, 모르는 값은 `unknown`으로 받습니다.
- 새 패키지는 설치하기 전에 먼저 묻습니다.
- 사용자가 요청하지 않은 뒷편의 기능(서버 저장, 필터, 배포 설정 등)을 미리 넣지 않습니다.

## 끝났는지 확인하는 방법

1. `npm run lint`에 에러와 경고가 없다
2. `npm run build`가 타입 에러 없이 `✓ built`로 끝난다
3. 375px 폭에서 가로 스크롤이 생기지 않는다
4. 바꾼 파일 목록과 이유를 짧게 정리한다
