# 11편: 성능, 접근성, SEO 점검하기

글: [성능, 접근성, SEO를 Lighthouse로 점검하기](https://seongyong2.vercel.app/blog/lighthouse-performance-accessibility-seo)

[10편 폴더](../10-deploy)에서 이어서, Lighthouse가 알려준 문제를 고친 상태입니다. 화면 모양은 10편과 거의 같고, 흐린 글자가 조금 진해졌습니다.

## 실행하기

Lighthouse는 개발 서버가 아니라 빌드한 결과물로 잽니다.

```bash
npm install
npm run build
npm run preview  # http://localhost:4173/
```

Chrome에서 주소를 열고 개발자 도구의 Lighthouse 탭에서 Mobile로 Analyze page load를 누릅니다.

## 따라 하기

10편 폴더를 복사한 뒤 아래 파일을 이 폴더처럼 만들거나 바꿉니다.

| 파일 | 바뀐 것 | 잡은 항목 |
| --- | --- | --- |
| [`index.html`](./index.html) | `lang="ko"`, 제목, `meta description` | SEO: 설명 없음 |
| [`public/robots.txt`](./public/robots.txt) | 새 파일 | SEO: robots.txt가 올바르지 않음 |
| [`src/index.css`](./src/index.css) | `--muted`를 `#6b7280`에서 `#4b5563`으로 | 접근성: 대비 4.39:1 (기준 4.5:1) |
| [`src/components/TodoItem.tsx`](./src/components/TodoItem.tsx) | 체크박스와 글자를 `label`로 감싸고, 삭제 버튼에 `aria-label` | 접근성: 이름 없는 체크박스 |
| [`src/components/TodoForm.tsx`](./src/components/TodoForm.tsx) | 입력창에 눈에 안 보이는 `label` | placeholder를 이름 대신 쓰지 않게 |

## 측정 결과

Lighthouse 13.5.0, Mobile, `npm run preview`로 연 화면 (2026년 10월 22일).

| | 성능 | 접근성 | 권장사항 | SEO |
| --- | --- | --- | --- | --- |
| 10편 | 100 | 88 | 100 | 82 |
| 11편 | 100 | 100 | 100 | 100 |

## 큰 이미지 하나로 성능 떨어뜨려 보기

`App.tsx`의 제목 위에 큰 이미지를 하나 넣고 다시 재봤습니다. 확인한 뒤에는 지웁니다.

| 넣은 이미지 | 성능 | LCP | CLS |
| --- | --- | --- | --- |
| 없음 | 100 | 1.4초 | 0 |
| 3000×2000 PNG 13.7MB, 크기 지정 없음 | 61 | 68.4초 | 0.188 |
| 800px WebP 11KB, `width`·`height` 지정 | 100 | 1.4초 | 0 |

PNG 파일은 일부러 무늬를 넣어 크게 만든 것이라 실제 사진보다 무겁습니다. 크기를 지정하지 않은 이미지는 늦게 불러와지면서 아래 내용을 밀어내서 CLS가 올라갑니다.
