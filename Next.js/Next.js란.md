# **Next.js란 무엇인가?**

- React위한 `**Full Stack Web Applicaiton 프레임워크**` 입니다.
- 리액트에는 없는 **`서버 사이드 렌더링server-side rendering(SSR)`, `정적 사이트 생성static site generation(SSG)`, `증분 정적 재생성incremental static regeneration(ISR)`**과 같은 다양하고 풍부한 기능을 제공한다.

# **Next.js의 특징**

- 큰 규모의 React 앱을 쉽게 구축할 수 있도록 해주는 많은 기능을 가지고 있다.
- **SSR (Server Side Rendering) 방식**이다.
  - 서버에서 완성된 HTML을 보내주기 때문에 **렌더링 속도가 빨라** 사용자에게 화면을 보여주는 시간이 빨라진다.
    - 기존의 React는 CSR (Client Side Rendeing) 방식으로 **초기 페이지 로딩이 오래걸리는 단점을 보완**해준다.
  - 완성된 HTML을 보내주기 때문에 **SEO(Search Engine Optimization, 검색 엔진 최적화)에도 좋아** 검색엔진에 노출될 가능성이 높아진다.

## 장점

- JavaScript가 아닌 HTML을 로딩하기 때문에 JavaScript가 실행되지 않아도 화면이 렌더링 된다.

## 단점

- 서버에서 먼저 생성된 HTML을 로딩하기 때문에 페이지를 변경할 때마다 모든 페이지를 가져오기 때문에 로딩 시간이 오래걸린다.
  - a 태그를 Link 태그(next.js지원)로 변경하면 위의 로딩 시간이 오래 걸리는 현상을 해결할 수 있다.(SPA 방식)

# NextJS 사용하는 이유

### **SEO 최적화**

- Next.js는 SSR을 지원하여 웹 페이지를 서버에서 미리 렌더링합니다. 이로 인해 웹 페이지가 검색 엔진에 의해 더 쉽게 인식되고 검색 결과에 더 잘 노출될 수 있습니다.

### 성능향상

- 페이지의 일부 또는 전체를 서버에서 미리 렌더링하여 페이지 로딩 시간을 단축합니다. 또한, 정적 리소스를 최적화하여 성능을 향상시킵니다.

### 개발 생산성 향상

- 다양한 기능과 도구를 제공하여 개발 생산성을 향상시킵니다. 예를 들어, `**코드 스플리팅**`, `**정적 리소스 최적화**`, `**빌드 자동화**` 등을 지원합니다.
  - `**코드 스플리팅`\*\*
    - 웹 애플리케이션의 코드를 여러 개의 작은 청크로 분할하는 프로세스입니다. 각 `**청크**`는 특정 페이지 또는 기능에 필요한 코드만 포함합니다.
  - `**청크**`
    - 웹 애플리케이션의 코드나 데이터를 여러 개의 작은 부분으로 분할한 것을 의미합니다.

# NextJS 13로 올라오며 바뀐점

### App Router 디렉토리 적용

- 기존에는 pages 디렉토리 아래에 모든 페이지를 배치했지만, Next.js 13에서는 components 디렉토리와 styles 디렉토리를 추가하여 페이지 로딩 시간을 단축하고 코드 관리를 개선했습니다.

```jsx
app
├── components
│   ├── Button.tsx
│   └── Header.tsx
├── pages
│   ├── index.tsx
│   └── about.tsx
├── styles
│   └── global.css
└── utils
    └── index.ts
```

### Server Components 지원

- React Server Components (RSC)
  - RSC는 서버에서 실행되는 React 컴포넌트입니다. RSC를 사용하면 페이지의 일부 또는 전체를 서버에서 미리 렌더링하여 `**페이지 로드 시간을 단축**`하고 `**사용자 경험을 개선**`할 수 있습니다.

### Turbopack 적용

- Turbopack이라는 새로운 빌드 시스템이 적용되었습니다. Turbopack은 Next.js의 `**빌드 속도를 크게 향상**`시켜줍니다.

### 강화된 next/image

- **`lazy loading`:** 이미지를 lazy loading하여 페이지 로딩 시간을 단축합니다.
- **`srcSet`:** 이미지의 srcSet을 자동으로 생성하여 다양한 화면 해상도에서 최적의 이미지를 제공합니다.
- **`WebP 이미지 지원`:** WebP 이미지를 지원하여 이미지 크기를 줄이고 페이지 로딩 시간을 단축합니다.

### 새로운 @next/font

- @next/font를 사용하면 WebFont를 사용하여 웹 애플리케이션에 글꼴을 추가할 수 있습니다.
- `**캐시 관리**`: 글꼴을 캐시하여 페이지 로딩 시간을 단축합니다.

### 강화된 next/link

- **`prefetching`:** 링크를 prefetch하여 페이지 로딩 시간을 단축합니다.
- **`scroll restoration`:** 링크를 클릭하면 이전 페이지의 스크롤 위치를 복원합니다.
- **`history API 지원`:** history API를 사용하여 페이지 이동을 관리합니다.

# NextJS 사용한 페이지

- **Netflix**
- **The New York Times**
- **Airbnb**
- **Spotify**
- **Twitter**
