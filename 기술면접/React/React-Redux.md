# Redux?
상태를 전역적으로 관리하기 위해서 사용되는 상태관리 도구이며,   
Redux 외에도 MobX, React Context, Recoil 등이 있습니다.  
상태관리 도구를 사용하여 Props drilling 이슈를 해결할 수 있습니다.

>Props drilling?  
>상태가 존재하는 컴포넌트에서 자식 컴포넌트로 이동을 할 때, 수많은 props를 계속해서 내려야하는 경우를 말하며, 코드의 가독성이 나빠지고 유지보수 또한 힘들어집니다.
  

## Action
상태에 어떤 Action(행동)을 취할 것인지 정해놓는 객체입니다.  
Action이 많아질 경우 ActionTypes 파일을 생성하여 타입을 모아두는 경우도 있습니다.  
Action 타입을 정의할 때는 모두 대문자로 Snake Case로 작성합니다.

## Reducer
Dispatch에서 전달받은 Action(행동) 객체의 type에 따라서 상태를 변경시키는 함수입니다.   
Reducer가 여러개 일 경우 combineReducers를 사용하여 하나로 묶어줄 수 있습니다.

## Store
상태가 관리되는 오직 하나뿐인 상태 저장소의 역할을 합니다.  
createStore을 사용할 경우 toolkit을 사용하라는 의미로 밑줄이 그어집니다.