<h1>React의 구조</h1>
<p>
   <h3>JavaScript 구현방법 및 파일구조</h3>
   <ul>
      <li>메인페이지: index.html</li>
      <li>src 폴더: 소스파일</li>
      <li>index.js: 진입파일</li>
      <li>html에서 지정한 id 값이 document.getElementById('root') 해당 코드로 실행된다.</li>
      <li>Appjs를 사용시 클래스형 -> 함수형으로 바뀌었는데 왜? 이유 찾기</li>
      <li>React 컴포넌트는 하나의 태그가 존재해야 한다.</li>
   </ul>

   <h3>CSS 구현방법</h3>
   <ul>
      <li>index.js 파일에 추가한다 (형식: import './index.css';)</li>
      <li>모든 파일을 import 시켜서 연동시켜 주면 된다.</li>
   </ul>

   <h3>배포하는 방법</h3>
   <ul>
      <li>creat-react-app은 React가 편리성을 위해 파일의 무게가 무겁다.</li>
      <li>npm run build: 불필요한 내용(공백 등)을 제거한 파일(실제 서비스 할 때 사용)</li>
      <li>npm install -g serve: serve라는 명령어를 통해 웹 서버를 설치 할 수 있다.</li>
      <li>npx serve: 한번만 사용할 수 있는 서버를 만든다.</li>
      <li>npx serve -s build: build 파일로 서버를 실행한다.</li>
      <li>개발자가 사용하는 파일과 build 파일의 배포시 차이점은 resources를 줄여준다.</li>
   </ul>
</p>