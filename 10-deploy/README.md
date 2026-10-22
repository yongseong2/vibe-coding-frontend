# 10편: 보안과 배포의 기본

글: [보안과 배포의 기본: 환경 변수, XSS, Vercel](https://seongyong2.vercel.app/blog/env-security-vercel-deploy)

[9편 폴더](../09-git)에서 이어서, 배포할 수 있게 API 주소를 환경 변수로 빼고 배포본에서는 브라우저 저장소(localStorage)에 저장하도록 바꾼 상태입니다.

## 실행하기

```bash
npm install
npm run server   # 터미널 1: http://localhost:3001/todos
npm run dev      # 터미널 2: http://localhost:5173/  (json-server에 저장)
```

배포본과 같은 모습은 빌드해서 확인합니다.

```bash
npm run build
npm run preview  # http://localhost:4173/  (브라우저 저장소에 저장, API 서버 필요 없음)
```

## 따라 하기

9편 폴더를 복사한 뒤 아래 파일을 이 폴더처럼 만들거나 바꿉니다.

| 파일 | 바뀐 것 |
| --- | --- |
| [`.env.development`](./.env.development) | 새 파일. 개발 서버에서만 쓰는 API 주소 |
| [`.env.example`](./.env.example) | 새 파일. 어떤 환경 변수가 있는지 알려주는 예시 |
| [`.gitignore`](./.gitignore) | `.env`, `.env.production`을 Git에 올리지 않게 추가 |
| [`src/api.js`](./src/api.js) | 주소를 `import.meta.env.VITE_API_URL`에서 읽고, 없으면 localStorage에 저장 |

화면 코드는 9편과 같습니다. `api.js`가 내보내는 함수 네 개의 이름과 사용법이 그대로라서, 저장 위치가 바뀌어도 `App.jsx`는 고칠 필요가 없습니다.

## Vercel에 배포하기

1. 내 GitHub 계정에 이 폴더가 들어 있는 저장소를 올립니다.
2. [Vercel](https://vercel.com)에서 Add New → Project로 저장소를 가져옵니다.
3. 저장소 안의 폴더를 배포하려면 Root Directory 옆 Edit을 눌러 `10-deploy`를 고릅니다. 이 폴더만 따로 저장소로 올렸다면 그대로 둡니다.
4. Framework Preset이 Vite로 잡혔는지 확인하고 Deploy를 누릅니다.

배포본에는 `VITE_API_URL`이 없으니 할 일은 방문한 사람의 브라우저에 저장됩니다. 실제 서비스처럼 여러 기기에서 같은 목록을 보려면 인터넷에 열린 API 서버가 필요하고, 그 주소를 Vercel 프로젝트 설정의 Environment Variables에 `VITE_API_URL`로 넣습니다.

## 동작 확인

| 확인한 것 | 결과 |
| --- | --- |
| `npm run dev`에서 추가 | `POST http://localhost:3001/todos` 요청, `db.json`에 저장 |
| `npm run preview`에서 추가·체크·삭제 후 새로고침 | 서버 요청 없이 바뀐 그대로 남음 |
| 빌드 결과물에서 `localhost:3001` 검색 | 0건 (개발용 주소가 배포본에 안 들어감) |
| `npm audit` | `found 0 vulnerabilities` (2026년 10월 22일) |

## 위험한 코드 직접 확인하기

확인한 뒤에는 꼭 원래대로 돌려놓습니다.

| 해보는 것 | 결과 |
| --- | --- |
| `.env.local`에 `VITE_PAYMENT_SECRET=sk_test_1234`와 `PAYMENT_SECRET=sk_test_5678`을 넣고 코드에서 둘 다 읽은 뒤 빌드 | `dist/assets`의 JS에서 `sk_test_1234`가 그대로 검색됨. `VITE_`가 없는 값은 들어가지 않음 |
| 할 일에 `<img src=x onerror="alert('XSS')">`를 추가 | 글자 그대로 보임. React가 글자로 바꿔서 보여주기 때문 |
| `TodoItem.jsx`의 `<span>{text}</span>`을 `dangerouslySetInnerHTML={{ __html: text }}`로 바꾸고 위 할 일을 추가 | 경고창이 뜸. 저장된 뒤에는 페이지를 열 때마다 뜸 |
