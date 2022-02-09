## Description
원티드 프리온보딩 코스 지원을 목적으로 React에서 프론트엔드에서 자주 사용하는 컴포넌트 6가지(Toggle, Modal, Tab, Tag, AutoComplete, ClickToEdit)를 구현하였습니다.

CSS는 styled-component를 사용하였습니다.

## Usage(자세한 실행 방법)

1. git clone
```
git clone https://github.com/Lee-Seonghyun316/wanted_pre_onboarding.git
```
2. wanted_pre_onboarding 폴더를 인터프린터나 컴파일러로 열기 
3. 해당 폴더 경로의 터미널에서 아래 명령어를 이용해 custom-component 폴더로 이동
```
cd custom-component
```
4. 필요한 라이브러리 설치 
```
npm install
```
5. 실행
```
npm run start
```

## 구현한 방법과 이유에 대한 간략한 내용

### Toggle.js
- 토글 버튼 클릭 시, after 가상요소인 토글 동그라미가 오른쪽(ON) 또는 왼쪽(OFF)로 이동하면서 배경색이 이동방향대로 채워짐. 또한 하단의 토글 상태 text 내용이 현재 토글 상태에 따라 변경되도록 개발.
- useState 를 사용하여, checked  상태 값을 사용, 변경함. 
- checkbox 로 만들었으며 체크 여부 유무에 따라 가상요소의 속성값을 변경하여 구현
![Toggle](https://user-images.githubusercontent.com/70502670/153136099-b56429b1-9dc0-4985-bd68-71f952d12c7d.gif)

### Modal.js
- Open Modal 버튼을 눌렀을 때, 모달창이 열리고 x 버튼이나 모달 외부 영역을 눌렀을 때 모달이 꺼지도록 개발. 
- 모달창 활성화 여부는 useState 를 통해서 변경하고, dom 접근이 필요한 경우 useRef를 사용.
- 모달창을 ModalWindow component 로 분리하여 필요한 값들을 Props 로 전달. ModalWindow.js에서는 각 props의 type을 지정.
- 웹 접근성을 고려하여, 모달창이 열렸을 때는 모달창으로 모달창이 닫히면 다시 버튼으로 포커스를 이동. 사용자가 모달창의 존재 여부를 알 수 있도록, display 속성대신 opacity 와 pointer-events 속성값을 변경
![Modal](https://user-images.githubusercontent.com/70502670/153136169-1e7b7766-6462-41e8-b543-0bd2adcf49d4.gif)

### Tab.js
- 상단 nav 섹션의 tab 제목을 누르면 해당 탭 내용이 활성화.
- 현재 선택된 탭의 index 상태는 useState 로 관리, 변경.
- 배열 함수 map 을 이용해 각 상단 탭 항목 생성. 변경사항만 리랜더링 할 수 있도록 key 값에는 index 대신 id 속성을 부여함. 
- 현재 선택된 탭이 아닐 경우에는 탭 내용이 랜더링되지 않도록 삼항 연산자를 통해 null 또는 태그를 반환하도록 함. 
![Tab](https://user-images.githubusercontent.com/70502670/153136198-d01d5714-04f9-4d89-9963-8cf0d703b5c6.gif)

### Tag.js
- input 값을 입력한 후 enter을 눌렀을 때, 새로운 태그가 생성. 태그의 x 버튼을 누르면 태그가 삭제되도록 구현.
- 태그값, input 상태를 useState로 관리, 변경.
- input에 포커스 되었을 때만 Wrap 태그에 border 속성값이 변경될 수 있도록 props를 전달하고, onFocused 값을 useState로 관리.
- 컴포넌트의 성능을 고려하여 event 함수를 useCallback 으로 구현하여 deps 내 값에 변경사항이 있을 때에만 선언되도록 구현.
- handleTagRemove 함수는 X 버튼을 눌렀을 해당 태그의 id 를 props 로 받아 배열함수 filter을 이용해 태그를 삭제. 
- handleSubmit 함수는 input 태그에서 엔터 키를 눌렀을 때, 태그를 추가. 기존 form 이벤트를 없애기 위해서 e.preventDefault() 함수 사용.
- 배열 함수 map 을 이용해 각각의 Tag 생성. 변경사항만 리랜더링 할 수 있도록 key 값에는 index 대신 id 속성을 부여함. 
![Tag](https://user-images.githubusercontent.com/70502670/153136208-b6f230d4-28c7-41c3-9fb8-cdce3b3264ab.gif)

### AutoComplete.js
- input 태그에 text 입력시 해당 글자가 포함된 추천 단어가 보이도록 구현.
- 추천 단어(suggestions)와 inputText를 useState로 관리
- 컴포넌트의 성능을 고려하여 event 함수를 useCallback 으로 구현하여 deps 내 값에 변경사항이 있을 때에만 선언되도록 구현.
- changeSuggestions 함수에서는 배열함수 filter와 RegExp 객체를 이용해 props로 받은 value 값을 포함한 추천 단어들로 suggestions 값을 변경. 
- handleTextChange 함수에서는 input 태그의 onChange 이벤트 발생시 필요에 따라 changeSuggestions 함수를 호출하고 suggestions 및 inputText 상태를 변경.
- handleSeclect 는 추천 단어 리스트 중 하나가 선택되었을 때, inputText 및 inputText 상태를 변경. 
- handleXBtnClick 함수는 X 버튼 클릭 시 inputText 값을 비우고, 추천단어 리스트를 초기화.
- 배열 함수 map 을 이용해 추천 단어 리스트 생성. 변경사항만 리랜더링 할 수 있도록 key 값에는 index 대신 id 속성을 부여함. 
![AutoComplete](https://user-images.githubusercontent.com/70502670/153136215-642a8c31-dfc3-43cd-baca-a1b06f621b5e.gif)

### ClickToEdit.js
- div 태그를 더블클릭 했을 때, isEditable 상태값을 true로 변경하고 div 태그를 input 태그로 변환하여 text 편집 가능. 또한 input 태그로부터 포커스아웃 되었을 때, inputText 값이 하단의 결과 문구에 반영되도록 구현.
- useState로 여러개의 input 및 포커스, isEditable 상태를 관리. 
- handleChange 함수는 evnet 객체 내의 name 값으로 현재 변경된 input 태그의 값을 변경. 
- handleBlur 함수는 input 태그에 onBlur 이벤트(포커으 아웃)가 발생했을 때, 현재 inputs 값으로 results 값을 변경. 
![ClickToEdit](https://user-images.githubusercontent.com/70502670/153136223-d557c4c7-ea8c-449e-9227-1b8f291cce90.gif)

### Theme.js
- styled-component 에서 주로 사용할 컬러코드, fontWeight, fontSize 등을 객체로 반환하여 js 변수로 간단하게 사용.

### Container.js
- 예시 컴포넌트 gif 에 있는 네모박스와 title 을 포함한 컴포넌트로 title과 children을 props로 가짐.

## 구현하면서 어려웠던 점과 해결 방법 (Error handling Log)

### Toggle.js
- 예시 gif 에는 토글버튼 배경색이 동그라미 이동방향에 따라 점점 채워졌는데, 처음에는 background 속성에만 집중에서 구현하다 보니까 제대로 구현하지 못했다. 기본 배경색을 회색으로 두고, 가상요소의 width, border-radius 및 배경색을 함께 변화시켜야 했는데, 여러번의 모니터링을 통해 자연스러운 transition을 가질 수 있는 속성값을 찾았다. 

### Modal.js
- 과거에 모달을 개발했을 때, 웹 접근성에 대해 지적받은 적이 있어서 웹 접근성을 고려하여 사용자가 모달존재여부를 알 수 있도록 모달 활성화 여부에 따라 focus를 바꾸고 display 속성을 쓰지 않고 개발하려고 했다. 처음에는 과거에 개발하던 방법과 다른 방법으로 하려고 하니 어려웠는데 웹 접근성에 대해 공부할 수 있는 계기가 된 것 같다. 

### Tab.js
- 반응형으로 컴포넌트를 구현하려고 했는데, 고정값으로는 구현이 힘들어서 css 속성에 사칙연산이 많이 들어갔다. 원하는 대로 ui가 잘 그려지지 않아서 계속 모니터링하면서 시행착오를 겪었다. 
- vh, vw 단위를 적극적으로 활용하고 max-width, min-height 등의 속성을 통해 다양한 환경에서도 ui 가 망가지지 않게 개발했다. 

### Tag.js
- 처음에는 input 에서 엔터keyPress 이벤트가 발생했을 때, 태그가 추가되는 함수를 만들었다. 코드 리팩토링을 하면서 고민해보았더니, 다른 key를 누르는 상황은 없었고 이후 Form 태그의 onSubmit 이벤트 발생 시 태그가 추가되는 함수로 변경했다. 

### AutoComplete.js
- AutoComplete 컴포넌트를 만드면서 많은 함수를 선언하게 되었는데, 성능에 대한 고민을 통해 useCallBack을 활용하여 함수 선언을 deps 변경 시점에만 할 수 있도록 리팩토링하였다. 

### ClickToEdit.js
- 해당 컴포넌트에 대한 이해가 부족해서 gif를 보고 처음에는 input 태그 2개를 두고 포커스 아웃되었을 때에만 결과에 반영되도록 만들었다. gif 를 자세히 보다보니 더블클릭 후 input 태그로 변경된다는 점을 발견했고 그제서야 ClickToEdit 이라는 이름을 이해하였다. 이후 div 태그를 더블클릭 했을 때, input 태그가 활성화되고, inputText를 변경할 수 있도록 컴포넌트를 수정하였다. 

### CSS
- 처음에는 css 변수를 App.css 에 생성하여 사용하였다. 그러나 태그에 props 를 받아서 사용해야 할 때, css 변수와 props를 같이 사용한 코드가 깔끔하지 못하고 js 변수를 사용할 수 있다는 styled-component 의 장점을 활용하지 못하고 있는 것 같아 theme.js 를 만들고 리팩토링을 진행하였다. 
