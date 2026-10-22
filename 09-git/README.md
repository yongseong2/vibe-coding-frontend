# 9편: Git으로 안전하게 실험하기

글: [Git으로 안전하게 실험하기](https://seongyong2.vercel.app/blog/git-commit-branch-restore)

[8편 폴더](../08-design-tokens)에서 이어서, Git 브랜치 위에서 할 일 필터(전체·진행 중·완료)를 추가한 상태입니다. 이번 편은 기능보다 **Git으로 작업을 저장하고 되돌리는 순서**가 중심입니다.

## 실행하기

```bash
npm install
npm run server   # 터미널 1: http://localhost:3001/todos
npm run dev      # 터미널 2: http://localhost:5173/
```

## 따라 하기

이 저장소 전체가 이미 Git 저장소라서, 연습은 따로 복사한 폴더에서 합니다.

```bash
# 1. 8편 폴더를 저장소 밖으로 복사하고 Git을 시작한다
cp -r 08-design-tokens ~/todo-app
cd ~/todo-app
git init
git add .
git commit -m "8편까지 완성한 할 일 앱"

# 2. 실험용 브랜치를 만든다
git switch -c filter

# 3. AI에게 필터를 맡기거나, 아래 두 파일을 이 폴더처럼 바꾼다
git status
git diff

# 4. 마음에 들면 저장하고 main에 합친다
git add .
git commit -m "목록 위에 전체/진행 중/완료 필터 추가"
git switch main
git merge filter
```

| 파일 | 바뀐 것 |
| --- | --- |
| [`src/components/FilterTabs.jsx`](./src/components/FilterTabs.jsx) | 새 파일. 전체·진행 중·완료 버튼 세 개 |
| [`src/App.jsx`](./src/App.jsx) | 고른 필터를 상태로 두고, 보여줄 목록을 그릴 때마다 계산 |

## 동작 확인

| 한 일 | 목록 |
| --- | --- |
| 진행 중 | 블로그 글 읽기, 링크 (2줄) |
| 완료 | 장보기 (1줄) |
| 완료 필터에서 장보기 체크 해제 | "이 필터에 맞는 할 일이 없어요." |
| 전체 | 3줄 |

필터를 바꿔도 숫자 카드는 항상 전체 기준입니다.

## 되돌리기 연습

| 상황 | 명령 | 결과 |
| --- | --- | --- |
| 커밋 전, 파일 하나가 망가짐 | `git restore src/App.jsx` | 마지막 커밋 상태로 돌아감 |
| 커밋 전, 전부 버리고 싶음 | `git restore .` 후 새 파일은 `git clean -n`으로 확인 | 고친 파일이 돌아감. 새 파일은 따로 지워야 함 |
| 이미 커밋한 것을 취소 | `git revert HEAD` | 반대로 고치는 커밋이 하나 더 생김 |

`App.jsx`에서 `import FilterTabs ...` 줄을 지우면 `npm run build`는 통과하지만, 브라우저에서는 "FilterTabs is not defined" 에러 화면이 나옵니다. `npm run lint`는 `'FilterTabs' is not defined` 경고로 잡아줍니다. 이 상태에서 `git diff`로 지워진 줄을 확인하고 `git restore src/App.jsx`로 되돌려보세요.
