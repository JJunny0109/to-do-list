const searchInput = document.querySelector("#searchInput");
const addBtn = document.querySelector("#searchBtn");
const listsEl = document.querySelector(".memo-area");
addBtn.addEventListener("click", addToList);
// Get HTML elements


function addToList(){
  // console.log('addBtn clicked!');
  
  if(searchInput.value == ""){
    alert('Type Your Tasks!');
    //입력창이 empty -> 경고 메시지 출력
  } else{
    // <li> 요소를 생성합니다.
    const liElement = document.createElement('li');
    liElement.classList.add('memo');

    // <input> 요소를 생성합니다.
    const checkboxElement = document.createElement('input');
    checkboxElement.setAttribute('type', 'checkbox');

    // <p> 요소를 생성하고 텍스트 내용을 설정합니다.
    const pElement = document.createElement('p');
    pElement.classList.add('memo-text');
    pElement.textContent = searchInput.value;

    // <span> 요소를 생성하고 텍스트 내용을 설정합니다.
    const spanElement = document.createElement('span');
    spanElement.classList.add('close');
    spanElement.textContent = "×";

    // <li> 요소에 자식 요소들을 추가합니다.
    liElement.appendChild(checkboxElement);
    liElement.appendChild(pElement);
    liElement.appendChild(spanElement);

    // 부모 요소에 <li> 요소를 추가합니다.
    listsEl.appendChild(liElement);

    searchInput.value = "";
  }
}

function addStrikethrough(){

}

function clickCheckbox(){
  
}