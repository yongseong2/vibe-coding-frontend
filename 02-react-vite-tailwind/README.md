# 2편: React, Vite, Tailwind CSS

글: [프레임워크 고르기: React, Next.js, Vite](https://seongyong2.vercel.app/blog/react-nextjs-vite-choose-stack)

[1편 폴더](../01-npm-dev-server)에 Tailwind CSS를 붙이고, 템플릿 화면을 할 일 앱 첫 화면으로 바꾼 상태입니다.

## 따라 하기

1편 폴더를 복사해서 시작합니다.

```bash
cp -r 01-npm-dev-server my-todo
cd my-todo
npm install
```

**1. Tailwind CSS 설치**

```bash
npm install tailwindcss @tailwindcss/vite
```

**2. `vite.config.ts`에 플러그인 추가**

```ts
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

**3. `src/index.css`를 한 줄로 바꾸기**

```css
@import "tailwindcss";
```

템플릿이 넣어둔 기본 스타일은 지웁니다. 남겨두면 `h1`의 글자색 같은 템플릿 스타일이 Tailwind 클래스보다 우선해서, 클래스를 써도 화면이 안 바뀌는 것처럼 보입니다.

**4. 템플릿 화면 지우기**

`src/App.css`, `src/assets/`, `public/icons.svg`를 지우고 `src/App.tsx`를 아래처럼 바꿉니다.

```tsx
function App() {
  return (
    <main className="mx-auto max-w-xl p-6">
      <h1 className="text-2xl font-bold text-blue-600">할 일 앱</h1>
      <p className="mt-2 text-gray-500">React, Vite, Tailwind CSS로 만든다.</p>
    </main>
  )
}

export default App
```

## 확인할 것

- `npm run dev`로 연 화면에 파란색 "할 일 앱" 제목이 보인다
- `package.json`의 `dependencies`에 `tailwindcss`와 `@tailwindcss/vite`가 있다
- `npm run build` 뒤 `dist/assets`의 CSS 파일에 `text-blue-600`이 들어 있다
- 브라우저에서 `/about`을 열어도 같은 화면이 나온다. 라우터 없이 화면 하나만 있는 앱이기 때문이다
