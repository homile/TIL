# Data Fetching

데이터 패칭은 웹, 앱과 같이 데이터를 가져와서 사용하는 것을 말합니다.

React or Next.js에서는 데이터를 가져오고, 캐시하고, 재검증 하는 방법을 사용할 수 있습니다.

\*캐시 - 데이터나 값을 미리 복사해 놓는 임시 장소이며, 원래 데이터를 접근하는 시간이 오래 걸리는 경우 값을 다시 계산하는 시간을 절약하고 싶은 경우에 사용합니다..

## 방법

### 1. 서버 fetch

- fetch API를 사용합니다. (async, await 사용)

```tsx
async function getData() {
  const res = await fetch("https://api.example.com/...");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    // 에러를 반환한다.
    throw new Error("Failed to fetch data");
  }

  // 결과를 반환한다.
  return res.json();
}

export default async function Page() {
  const data = await getData();

  return <main></main>;
}
```

### 2. 서버에서 라이브러리 사용

fetch를 지원하거나 노출하지 않는 타사 라이브러리를 사용하는 경우 Route Segmanet Config 옵션과 React의 cache 함수를 사용하여 해당 요청의 `**캐싱**` 및 `**리벨리데이션(revalidating)**` 동작을 구성할 수 있습니다.

React에서 `**리벨리데이션(revalidating)`\*\* 설정

```tsx
// get-item.ts
import { cache } from "react";

// 매 시간마다 캐시되고 재검증
export const revalidate = 3600; // revalidate the data at most every hour

export const getItem = cache(async (id: string) => {
  const item = await db.item.findUnique({ id });
  return item;
});
```

함수가 두 번 호출 되더라도 `**getItem**` 데이터베이스에 대한 쿼리는 한 번만 수행됩니다.

```tsx
// layout.tsx
import { getItem } from "@/utils/get-item";

export default async function Layout({ params: { id } }: { params: { id: string } }) {
  const item = await getItem(id);
  // ...
}

// page.tsx
import { getItem } from "@/utils/get-item";

export default async function Page({ params: { id } }: { params: { id: string } }) {
  const item = await getItem(id);
  // ...
}
```

\*revalidating - 캐시된 데이터가 여전히 유효한지 확인하는 프로세스 입니다. 캐시된 데이터가 유효하지 않은 경우 새 데이터를 가져와 캐시를 업데이트 합니다.(업데이트된 시간과 현재 시간을 비교하여 수행됨.)

```tsx
// Route Segment Config 옵션을 사용하여 리벨리데이션 활성화
export const routes = [
  {
    path: "/",
    component: Home,
    revalidate: true,
  },
];

// React의 cache 함수를 사용하여 리벨리데이션 구현
const data = await cache(fetch("https://api.example.com/..."), {
  revalidate: {
    invalidationInterval: 1000,
  },
});

// 캐시된 데이터의 유효성을 검사하는 방법을 지정합니다.
// 캐시된 데이터를 리밸리데이션하는 주기를 지정합니다.
// 캐시된 데이터를 리밸리데이션할 때 사용할 데이터를 지정합니다.
```

### 3. 클라이언트에서 경로 핸들러 사용

클라이언트 구성요소에서 데이터를 가져와야 하는 경우 `Route Handler`를 호출할 수 있습니다.

`Route Handler`는 서버에서 실행되고 데이터를 클라이언트에 반환합니다. (API 토큰과 같은 민감한 정보를 클라이언트에 노출하고 싶지 않을 때 유용합니다.)

### 4. 클라이언트에서 라이브러리 사용

`SWR` or `React Query`와 같은 타사 라이브러리를 사용하여 클라이언트에서 데이터를 가져오는 방법도 사용가능합니다.

위와 같은 타사 라이브러리에서는 요청에 대한 메모, 캐싱, 재검증 및 데이터 변형을 위한 자체 API를 제공합니다.

## Data Fetching Patterns

React 및 Next.js에서 데이터를 가져오기 위한 몇가지 권장 패턴과 모범사례

1. 서버에서 데이터 가져오기
2. 필요한 곳에서 데이터 가져오기
3. 스트리밍
4. 병렬 및 순차 데이터 가져오기
5. 데이터 사전 로드
6. React `cache`, `server-only`, `Preload` 패턴 사용하기
