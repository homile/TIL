<h1>Component</h1>
<p>
   <h3>Component?</h3>
   <ul>
      <li>개념적으로 JavaScript 함수와 유사하다.</li>
      <li>함수, 클래스로 정의하여 사용할 수 있다.</li>
      <li>일반적으로 DOM 태그만을 사용해 엘리먼트를 나타냈으나<br>
      사용자 정의 컴포넌트로도 나타낼 수 있다.</li>
   </ul>

   <h3>Component 사용시 주의할 점</h3>
   <ul>
      <li>하나의 최상위 태그만 사용해야 한다.</li>
   </ul>

   <h3>Component 기본 구조</h3>
   <ul>
      <li>함수형 컴포넌트</li>
      <!-- `(백틱)을 사용하여 코드블록시 한줄을 띄고 사용한다.
      또한, Ctrl + Shift + v를 사용하여 md 미리보기가 가능하다.
       -->

   ```javascript
   function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
   }
   ```
   
   <li>클래스형 컴포넌트</li>
   
   ```javascript
   class Welcome extends React.Component {
      render() {
         return <h1>Hello, {this.props.name}</h1>;
      }  
   }
   ```
   </ul>

   <h3>Component 합성</h3>
   <ul>
      <li>자신의 출력에 다른 컴포넌트를 참조할 수 있다.</li>
      <li>버튼, 폼, 다이얼로그, 화면 등의 모든 것들이 컴포넌트로 표현된다.</li>
   </ul>

   <h3>Component 추출</h3>
   <ul>
      <li>일반적인 div 태그에 담겨있는 내용을 추출하여 단순화 할 수 있다.</li>
      <li>재사용이 가능한 컴포넌트를 만들 수 있다.</li>
      <li>코드의 길이가 길거나 큰 앱에서 작업할 때 장점을 발휘한다.</li>
      <li>UI가 여러 번 사용되거나(Button, Panel, Avatar),<br> 
      UI 일부가 자체적으로 복잡한 경우(App, FeedStory, COmment)에는 별도의 컴포넌트를 만드는 게 좋다.</li>
   </ul>

   <h3>Props: 데이터(= attribute)</h3>
   <ul>
      <li>읽기 전용이다.</li>
      <li>같은 내용이 반복될 경우에 사용하면 재사용성이 좋다.</li>

   ```javascript
   class Subject extends Component{
      render(){
         return (
            <header>
               <h1>{this.props.title}</h1>
               {this.props.sub}
            </header>
         );
      }
   }


   class App extends Component{
      render(){
         return (
            <div className="App">
               <Subject title="WEB" sub="world wid web!"></Subject>
            </div>
         );
      }
   }
   ```
   <li>순수 함수: 입력값을 바꾸려 하지 않고 항상 동일한 입력값에 대해 동일한 결과를 반환하는 것</li>
   <li>React 컴포넌트는 자신의 props를 다룰 때 반드시 순수 함수처럼 동작해야 한다.</li>
   </ul>

   <h3>Component file 분리</h3>
   <ul>
      <li>한개의 파일에 다수의 컴포넌트가 정의된다면 복잡해지기 때문에 분리해준다.</li>
   </ul>

   <h3>State</h3>
   <ul>
      <li>사용자가 알아서는 안되는 컴포넌트를 내부적으로 사용되는 것(은닉)</li>
      <li>render보다 먼저 실행되는 constructor라는 함수를 작성해 먼저 초기화한다.</li>
   </ul>  
</p>