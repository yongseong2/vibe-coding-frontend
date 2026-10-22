# AGENTS.md

AI 코딩 도구가 이 프로젝트에서 작업하기 전에 읽는 안내서입니다. 사람을 위한 설명은 README.md에 있습니다.

## 프로젝트

- 할 일 관리 앱. 할 일을 추가·완료·삭제하고, 전체·진행 중·완료로 걸러 봅니다.
- 블로그 시리즈 [바이브 코딩을 위한 프론트엔드 지식](https://seongyong2.vercel.app/blog/series)의 마지막 12편 예제이자 완성본입니다.
- React 19 + Vite 8 + Tailwind CSS 4, TypeScript. 페이지는 하나뿐이고 라우터는 없습니다.
- 개발 중에는 json-server(`db.json`)에 저장하고, 배포본은 브라우저 localStorage에 저장합니다.

## 명령

- `npm install`: 패키지 설치
- `npm run server`: API 서버 (http://localhost:3001/todos)
- `npm run dev`: 개발 서버 (http://localhost:5173/)
- `npm run lint`: oxlint 검사
- `npm run build`: 타입 검사(`tsc -b`) 후 배포용 빌드 (`dist/`)

## 구조

- `src/App.tsx`: 할 일 목록 상태와 추가·완료·삭제 함수를 모두 여기서 관리
- `src/types.ts`: 할 일(`Todo`) 타입. 데이터 모양이 바뀌면 여기부터 고침
- `src/api.ts`: 서버·저장소와 주고받는 코드는 이 파일에만 둠
- `src/components/`: 화면 조각. 상태를 직접 고치지 않고 props로 받은 함수를 부름
- `src/index.css`: 색과 모서리 디자인 토큰

## 규칙

- `any`를 쓰지 않습니다. 타입을 모르면 `unknown`으로 받고 좁힙니다. 컴포넌트 props는 `type ○○Props`로 적습니다.
- 상태 배열은 직접 고치지 말고(`push`, `splice` 금지) 새 배열로 바꿉니다.
- 다른 값에서 계산할 수 있는 값(완료 개수, 걸러 본 목록)은 상태로 두지 않습니다.
- 색과 모서리는 `bg-primary`, `text-muted`, `rounded-card` 같은 토큰만 씁니다. `bg-blue-600`이나 `bg-[#2563eb]`처럼 값을 직접 쓰지 않습니다. 새 색이 필요하면 `src/index.css`에 토큰을 먼저 추가합니다.
- 서버 요청은 `src/api.ts`에 함수로 추가하고, 실패하면 화면에 알립니다.
- 입력창·체크박스·아이콘 버튼에는 화면 읽기 프로그램이 읽을 이름(`label`, `aria-label`)을 붙입니다.
- `VITE_`로 시작하는 환경 변수에는 비밀 키를 넣지 않습니다. 빌드 결과물에 그대로 들어갑니다.
- `.env.local`, `node_modules`, `dist`는 커밋하지 않습니다.
- 새 패키지는 설치하기 전에 먼저 물어봅니다.

## 끝났는지 확인하는 방법

작업을 마치기 전에 아래를 모두 확인하고 결과를 알려줍니다.

1. `npm run lint`에 에러와 경고가 없다
2. `npm run build`가 타입 에러 없이 `✓ built`로 끝난다
3. 375px 폭에서 가로 스크롤이 생기지 않는다
4. 할 일 추가·완료·삭제가 되고, 새로고침해도 남아 있다
5. 바꾼 파일 목록과 이유를 짧게 정리한다
