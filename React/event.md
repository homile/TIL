<p>
<h1>Event</h1>
<h3><strong>props, state, event 3가지 요소가 상호작용하면서 앱의 역동성을 만들어 준다.</strong></h3><br>
<ul>
   <li>DOM 엘리먼트에서 이벤트를 처리하는 방식과 매우 유사하다.</li>
   <li>React의 이벤트틑 소문자 대신 캐멀 케이스(camelCase)를 사용한다.</li>
   <li>JSX를 사용하여 문자열이 아닌 함수로 이벤트 핸들러를 전달한다.</li>
   <li><strong>html 작성법</strong></li>

   ```html
   <button onclick="activateLasers()">
      Activate Lasers
   </button>
   ```

   <li><strong>React 작성법</strong></li>

   ```html
   <button onClick={activateLasers}>
      Activate Lasers
   </button>
   ```
</ul>

<br>
<h3>이벤트에서 state 변경하기</h3>
<ul>
   <li>this.set으로 값을 바꿔줄 수 있다.</li>
   <li>이벤트가 끝나는 부분에 .bind를 넣어준다.</li>

   ```javascript
      <h1><a href="/" onClick={function(e){
      console.log(e);
      e.preventDefault();
      this.setState({
         mode: 'welcome'
      });
   }.bind(this)}>{this.state.subject.title}</a></h1>
   ```
</ul>

<br>
<h1>사용된 함수</h1>
<h3><strong>preventDefault()</strong></h3>
<ul>
   <li>HTML 태그에 기본적인 동작을 하지 못하게 해야 할 때 사용한다.</li>
</ul>

<h3>render()</h3>
<ul>
   <li>해당하는 HTML을 화면에 그려준다.</li>
</ul>

<h3>debugger</h3>
<ul>
   <li>해당 함수를 만나는 곳에서 멈춰서 볼 수 있게 해준다.</li>
</ul>

</p>