# React LifeCycle (리액트 생명주기)

> 컴포넌트는 생성(mounting) → 업데이트(updating) → 제거(unmounting)의 생명주기를 갖습니다.   
리액트 클래스 컴포넌트는 라이프 사이클 메서드를 사용하고 있으며, 함수형 컴포넌트에서는 Hook을 사용합니다.   

- 꼬리질문
  - Hook은 리액트로 컴포넌트를 작성하고 유지하는 동안 생겼던 수 많은 문제들을 해결하기 위해서 나왔습니다. class 안에서는 동작하지 않고, class없이 React를 사용할 수 있게 해줬습니다.
  - Hook의 종류에는 **props, state, context, refs** 등이 있습니다.
    - **useState**는 상태를 관리합니다.
    - **useEffect**는 화면에 렌더링이 완료된 후에 수행되며 **componentDidMount**와 **componentDidUpdate**, **componentWillUnmount**가 합쳐진 것입니다.
      화면에 렌더링이 되기 전에도 옵션을 통해 수행할 수 있도록 해줍니다.
    - **useContext**는 API를 통해 만들어진 Context에서 제공하는 Value를 가져올 수 있습니다.
    - **useReducer**는 useState의 대체 함수로 컴포넌트 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있습니다. 컴포넌트 바깥에 로직을 작성할 수도 있고, 다른 파일에 작성한 후 불러와서 사용할 수도 있습니다.
    - **useRef**는 특정 DOM 선택할때 주로 쓰이며 .current 프로퍼티로 전달된 인자로 초기화된 변경 가능한 ref 객체를 반환합니다.
    - **useMemo**는 메모이제이션된 값을 반환합니다. 이미 연산 된 값을 리렌더링 할 때 다시 계산하지 않도록 합니다. 의존성이 변경되었을 때에만 메모이제이션된 값만을 다시 계산하여 렌더링하며, 의존성 배열이 없는 경우 매 렌더링마다 새 값을 계산합니다.
      - 꼬리질문
        - 메모이제이션은 동일한 계산을 반복해야 할 때, 이전에 계산한 값을 메모리에 저장함으로써 동일한 계산의 반복 수행을 제거하여 프로그램 실행 속도를 빠르게 하는 기술입니다.
    - **useCallback**은 메모이제이션 된 콜백을 반환합니다. useMemo와 유사하게 이용되며 함수에 정요해줍니다.
  - 문제들
    - 컴포넌트 사이에서 상태 로직을 재사용하는 것과 복잡한 컴포넌트들을 이해하기 어려웠습니다. Hook의 사용으로 인해 상태 로직을 재사용 할 수 있도록 도와주며, 생명주기 메서드를 기반으로 쪼개는 것 보다는 Hook을 통해 서로 비슷한 것을 하는 작은 함수의 묶음으로 컴포넌트를 나는 방법을 사용할 수 있게 했습니다.
    - Class는 사람과 기계를 혼동시킵니다.
  - Hook 사용 규칙으로는 최상위에서만 Hook을 호출해야 하는 것과 리액트 함수 컴포넌트에서만 Hook을 호출해야 합니다.

### constructor

- constructor는 컴포넌트의 생성자 메서드이며, 컴포넌트가 만들어지면 가장 먼저 실행되는 메서드입니다.

### getDerivedStateFromProps

- getDerivedStateFromProps는 props로 받아온 것을 state에 넣어주고 싶을 때 사용합니다.
  다른 생명주기 메서드와는 달링 앞에 static을 필요로 하고, 이 안에서는 this를 조회할 수 없습니다. 여러 특적 객체를 반환하게 되면 해당 객체 안에 있는 내용들이 컴포넌트의 state로 설정되며, null을 반환하게 되면 아무 일도 발생하지 않습니다.
  컴포넌트가 처음 렌더링 되기 전에도 호출 되고, 그 이후 props나 state가 바뀌며 리렌더링 되기 전에도 매번 실행됩니다.

### render

- 컴포넌트를 렌더링 즉 화면에 보여주는 메서드입니다.

### componentDidMount

- 컴포넌트의 첫 번째 렌더링이 마치고 나면 호출되는 메서드입니다. 이 메서드가 호출되는 시점에는 우리가 만든 컴포넌트가 화면에 나타난 상태입니다.
  여기선 주로 DOM을 사용해야하는 외부 라이브러리를 연동하거나, 해당 컴포넌트에서 필요로하는 데이터를 요청하기 위해 axios, fetch 등을 통하여 ajax 요청을 하거나, DOM의 속성을 읽거나 직접 변경하는 작업을 진행합니다.
- 꼬리질문
  - ajax: JavaScript를 이용해서 비동기로 XML을 이용하여 서버와 통신하는 방식입니다. 최근에는 XML보다 JSON을 더 많이 사용합니다.
    - 비동기: 여러가지 일을 동시적으로 작업하는 것을 말하며, 서버와 통신하는 동안 다른 작업을 할 수 있다는 것을 의미합니다.
    - 동작방식: 브라우저에서 서버에 정보를 요청하고, 서버에서 브라우저에 콘텐츠를 처리하여 응답 정보를 전달합니다.

### shouldComponentUpdate

- shouldComponentUpdate 메서드는 리렌더링 여부를 결정하는 메서드이며, 주로 최적화 할 때 사용하는 메서드입니다.

### getSnapshotBeforeUpdate

- getSnapshotBeforeUpdate는 컴포넌트에 변화가 일어나기 직전의 DOM 상태를 가져와서 특정 값을 반환하면 그 다음 발생하게 되는 componentDidUpdate 함수에서 받아와서 사용 할 수 있습니다.

### componentDidUpdate

- componentDidUpdate는 리렌더링을 마치고 화면에 원하는 변화가 모두 반영되고 난 뒤 호출되는 메서드입니다.

### 출처 및 참고자료

[이미지](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)  
[React 공식홈페이지](https://ko.reactjs.org/docs/hooks-intro.html)  
[React LifeCycle](https://react.vlpt.us/basic/25-lifecycle.html)  
[React LifeCycle](https://velog.io/@minbr0ther/React.js-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%9D%BC%EC%9D%B4%ED%94%84%EC%82%AC%EC%9D%B4%ED%81%B4life-cycle-%EC%88%9C%EC%84%9C-%EC%97%AD%ED%95%A0)
