# 1편: npm, 패키지, 빌드, 개발 서버

글: [프로젝트의 정체: npm, 패키지, 빌드, 개발 서버](https://seongyong2.vercel.app/blog/npm-package-build-dev-server)

이 폴더는 Vite의 React + TypeScript 템플릿(`react-ts`)으로 막 만든 할 일 앱 프로젝트입니다. 아직 화면은 템플릿 그대로입니다.

## 따라 하기

빈 폴더에서 아래 명령으로 같은 프로젝트를 직접 만들 수 있습니다.

```bash
npm create vite@latest todo-app -- --template react-ts
cd todo-app
npm install
npm run dev
```

이 폴더에서 바로 시작한다면 `npm install`과 `npm run dev`만 하면 됩니다.

| 단계 | 명령 | 확인할 것 |
| --- | --- | --- |
| 1 | `npm install` | `node_modules` 폴더와 `package-lock.json`이 생긴다 |
| 2 | `npm run dev` | 터미널에 `Local: http://localhost:5173/`이 뜬다 |
| 3 | `npm run build` | `dist` 폴더가 생기고 마지막 줄이 `✓ built`다 |
| 4 | `npm run preview` | 빌드한 결과물이 브라우저에서 열린다 |

## 에러 직접 내보기

글의 "모르면 생기는 일"에 나온 에러를 이 폴더에서 일부러 내볼 수 있습니다.

| 해보기 | 나오는 에러 |
| --- | --- |
| 저장소 맨 위 폴더에서 `npm run dev` | `Could not read package.json` |
| `npm run start` | `Missing script: "start"` |
| `node_modules`를 지우고 `npm run dev` | `vite: not found` |
| `src/App.tsx` 맨 위에 `import confetti from 'canvas-confetti'`를 넣고 저장 | 개발 서버에 `Failed to resolve import "canvas-confetti"`, `npm run build`에 `Cannot find module 'canvas-confetti'` |

마지막 에러는 `npm install canvas-confetti`로 설치하면 개발 서버에서는 사라집니다. 다만 이 패키지는 타입 정보가 따로 있어서, `npm run build`가 통과하려면 `npm install -D @types/canvas-confetti`도 필요합니다. 확인이 끝나면 넣은 줄을 지워둡니다.

## 주요 파일

- `package.json`: 쓰는 패키지와 실행 명령(`scripts`)
- `tsconfig.json`: TypeScript 검사 설정. `npm run build`는 먼저 `tsc -b`로 타입을 검사한 뒤 빌드한다
- `index.html`: 브라우저가 처음 여는 페이지
- `src/`: 화면 코드. AI가 주로 고치는 곳
- `node_modules/`: `npm install`로 생기는 폴더. Git에 올리지 않는다
