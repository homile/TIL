<aside>
💡 **IDE : Visual Studio Code
Node : v18.16.1
NextJS : v13**

</aside>

# NextJS 생성

- `npx create-next-app@latest .`
  - 현재 폴더에 최신 nextJS를 생성합니다.
- 위의 명령어를 작성하게 되면 아래와 같은 설정들이 나옵니다. 원하는 방향에 맞게 설정하면 됩니다.

```bash
✔ **Would you like to use TypeScript?** … No / Yes
✔ **Would you like to use ESLint?** … No / Yes
✔ **Would you like to use Tailwind CSS?** … No / Yes
✔ **Would you like to use `src/` directory?** … No / Yes
✔ **Would you like to use App Router? (recommended)** … No / Yes
✔ **Would you like to customize the default import alias (@/*)?** … No / Yes
```

### 설정

- **Would you like to use TypeScript?**
  - 타입 스크립트의 사용 유무를 설정할 수 있습니다.
- **Would you like to use ESLint?**
  - ESLint의 사용 유무를 설정할 수 있습니다.
- **Would you like to use Tailwind CSS?**
  - Tailwind CSS의 사용 유무를 설정할 수 있습니다.
- **Would you like to use `src/` directory?**
  - src 디렉토리에 소스코드 저장 유무를 설정할 수 있습니다.
- **Would you like to use App Router? (recommended)**
  - 12 버전까지는 pages를 사용
  - 13 버전 이후는 App Router 사용 유무를 설정할 수 있습니다.
- **Would you like to customize the default import alias (@/\*)?**
  - 절대 경로 사용 유무를 설정할 수 있습니다.

---

# Next.js실행

Next.js를 실행할 때는 기본적으로 개발용과 배포용 2가지로 실행할 수 있습니다.

- `개발용 서버 실행 (npm run dev)`
  - 개발용 서버를 실행하여 개발 환경에서 Next.js 애플리케이션을 실행합니다.
  - `핫 모듈 교체 기능`을 통해 **코드 변경 사항을 즉시 반영**할 수 있으며, `정적 리소스 캐싱 기능`을 통해 **리소스 요청을 최적화**할 수 있습니다. 또한, `브라우저 리로드 기능`을 통해 페이지를 **새로고침하지 않고도 변경 사항을 확인**할 수 있습니다.
- `배포용 서버 실행 (npm run start)`
  - 배포용 서버를 실행하여 배포 환경에서 Next.js 애플리케이션을 실행합니다.
  - `핫 모듈 교체 기능`은 **제공되지 않으므로**, 코드 변경 사항을 반영하려면 `서버를 재시작`해야 합니다.
    또한, `정적 리소스 캐싱 기능`은 **제공**되지만, `브라우저 리로드 기능`은 **제공되지 않습니다.**

## 개발용 서버 실행

1. npm install
2. npm run dev

## 배포용 서버 실행

1. npm install
2. npm run build
3. npm run start

## 서버 실행 포트변경

- 서버의 실행 포트를 변경하고 싶을 때는 package.json → dev, start에 아래와 같이 `-p 포트번호` 로 작성하면 해당 포트로 서버가 구동되는 것을 확인할 수 있습니다.

```bash
{
  "name": "coding-for-life",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    **"dev": "next dev",**
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "^18",
    "react-dom": "^18",
    "next": "13.5.4"
  },
  "devDependencies": {
    "autoprefixer": "^10",
    "postcss": "^8",
    "tailwindcss": "^3",
    "eslint": "^8",
    "eslint-config-next": "13.5.4"
  }
}
```

```bash
{
  "name": "coding-for-life",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    **"dev": "next dev -p 3001",**
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "^18",
    "react-dom": "^18",
    "next": "13.5.4"
  },
  "devDependencies": {
    "autoprefixer": "^10",
    "postcss": "^8",
    "tailwindcss": "^3",
    "eslint": "^8",
    "eslint-config-next": "13.5.4"
  }
}
```

## 실행화면

위와 같이 서버 실행 명령어를 사용하여 페이지를 열게 되면 localhost:3000으로 서버가 열리는 것을 확인할 수 있다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/c08e1852-5600-4a9f-8407-f7ba850388b7/3c43e58f-9d3b-445e-af82-677986d98a5f/Untitled.png)

---

# Next.js 폴더 구조

- 서버를 실행했다면 아래와 같은 파일구조가 생기게 됩니다.
- `.next`
  - Next.js로 만들어진 프로젝트를 빌드하게 될 경우 만들어지는 배포용 폴더입니다.
- public
  - 정적인 파일을 관리하는 폴더입니다.
- src/app
  - Next.js 13버전부터 사용 가능한 app 디렉토리입니다.
  ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/c08e1852-5600-4a9f-8407-f7ba850388b7/fde28cec-1b8f-4239-b8b7-743a027da744/Untitled.png)

---

# 샘플앱 세팅

- 기본적으로 앞서 나왔던 실행화면과 같이 나오게 되는 데 이부분을 개발에 필요한 부분만 남기는 작업을 합니다.

## Layout.js

- 사용하지 않는 코드들을 제거해줍니다.

```
// scr/app/layout.js  수정 전

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

```
// scr/app/layout.js  수정 후
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
```

### css import 에러

위와 같이 수정했을 경우 import `‘./globals.css’`에 에러가 나는 것을 확인하실 수 있습니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/c08e1852-5600-4a9f-8407-f7ba850388b7/3040bc20-1d46-4bac-ba15-2b2b3c7f99cc/Untitled.png)

에러가 나는 이유는 아래와 같습니다.

- `import "./globals.css";` 는 `globals.css` 파일을 import하는 코드입니다. `globals.css` 파일은 CSS 파일이기 때문에, `next/babel` 모듈을 사용하여 import해야 합니다.
- `next/babel` 모듈은 Next.js에서 제공하는 모듈입니다. 이 모듈은 CSS 파일의 import를 지원합니다.

### css import 에러 해결방안

1. 프로젝트 루트 경로에 `.babelrc` 파일을 생성한다.
2. 해당 파일에 다음 코드를 작성한다.

   ```json
   {
     "presets": ["next/babel"],
     "plugins": []
   }
   ```

3. 루트 경로에 있는 `.eslintrc.json` 파일을 열어 코드를 아래와 같이 수정해준다.

   ```json
   {
     "extends": ["next/babel", "next/core-web-vitals"]
   }
   ```

4. babel 파싱 에러가 사라진 것을 확인할 수 있다. 🙂

   [[에러 일지] Next.js - Parsing error: Cannot find module 'next/babel' ...](https://velog.io/@nemo/nextjs-parsing-error)

## page.js

- layout의 children에 해당하는 컴포넌트
- 새로운 내용으로 채울 것이기 때문에 초기화 진행

### globals.css

- 글로벌 css 초기화 진행
