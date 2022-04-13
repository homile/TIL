<p>
<h1>React에서 CRUD 구동과정</h1>


<br>
<h1>Create 구현</h1>
<h3></h3>
<ul>
   <li>페이지 개념으로 작성</li>
   <li>placeholder: 값이 입력되지 않았을 경우 출력할 text 입력</li>
   <li>push(원본변경O) 보단 concat(원본변경X)을 활용한다. (원본을 망치지 않기 위해서)</li>
   <li>shouldComponentUpdate</br> 
   render 함수가 실행돼야 하는지, 실행되지 않아야 하는지 개발자가 결정할 수 있게 해주는 함 (성능향상)</br>
   newProps, newState: 바뀐 값을 표현해준다.
   </li>
   <li>immutable: 원본을 바꾸지 않는다. (불변성)</li>
</ul>

<br>
<h1>Read 구현</h1>
<h3></h3>
<ul>
   <li>메인 페이지에 들어왔을 때 저장한 데이터들이 보여져야함.</li>
   <li>데이터 클릭시 세부 데이터가 보이도록 내용이 변경되어야 함.</li>
</ul>

<br>
<h1>Update 구현</h1>
<h3></h3>
<ul>
   <li>페이지 개념으로 작성</li>
   <li>Read와 Create 기능이 결합되어 있다.</li>
   <li>수정할 객체를 복제하고 그것을 수정한다.</li>
   <li>form: <a href="https://ko.reactjs.org/docs/forms.html">링크</a></li>
</ul>

<br>
<h1>Delete 구현</h1>
<h3></h3>
<ul>
   <li>버튼 개념으로 작성(링크로 작성하면 오류발생 가능성 높음)</li>
   <li>오퍼레이션 개념</li>
   <li>splice 사용</li>
</ul>
</p>