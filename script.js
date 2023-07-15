const searchInput = document.querySelector("#searchInput");
const listsEl = document.querySelector(".memo-area");
const dialog = document.querySelector("dialog");

const addBtn = document.querySelector("#searchBtn");
addBtn.addEventListener("click", createTodoItem);

let memoCheckboxes = document.querySelectorAll('.memo-checkbox');
let memoTexts = document.querySelectorAll('.memo-checkbox');
let deleteBtns = document.querySelectorAll('.closeCross');
//memo-area의 Elements를 할당

function registerButtonListeners(){
  memoCheckboxes = document.querySelectorAll('.memo-checkbox');

  memoCheckboxes.forEach(button => {
    button.addEventListener('change', function(){
      if (this.checked) {
        console.log("Checkbox is checked..");
        addStrikethrough();
        
      } else {
        console.log("Checkbox is not checked..");
        clearStrikethrough();
        
      }
    });
  });

  memoTexts = document.querySelectorAll('.memo-text');

  memoTexts.forEach(button => {
    button.addEventListener('click', openModal);
  });

  deleteBtns = document.querySelectorAll('.closeCross');

  deleteBtns.forEach(button => {
    button.addEventListener('click', deleteTodoItem);
  });
}
//새로 목록에 추가할때마다 체크박스, 메모내용 그리고 삭제버튼에 이벤트리스너를 할당하는 함수

registerButtonListeners();
let ID_Num = 1;


function createTodoItem(){
  // console.log('addBtn clicked!');
  
  if(searchInput.value == ""){
    alert('Type Your Tasks!');
    //입력창이 empty -> 경고 메시지 출력
  } else{
    // <li> 요소를 생성합니다.
    const liElement = document.createElement('li');
    liElement.classList.add('memo');
    liElement.setAttribute('id', `listNum${ID_Num}`);

    // <input> 요소를 생성합니다.
    const checkboxElement = document.createElement('input');
    checkboxElement.classList.add('memo-checkbox');
    checkboxElement.setAttribute('type', 'checkbox');

    // <p> 요소를 생성하고 텍스트 내용을 설정합니다.
    const pElement = document.createElement('p');
    pElement.classList.add('memo-text');
    pElement.textContent = searchInput.value;

    // <span> 요소를 생성하고 텍스트 내용을 설정합니다.
    const spanElement = document.createElement('span');
    spanElement.classList.add('closeCross');
    spanElement.textContent = "×";

    // <li> 요소에 자식 요소들을 추가합니다.
    liElement.appendChild(checkboxElement);
    liElement.appendChild(pElement);
    liElement.appendChild(spanElement);

    // 부모 요소에 <li> 요소를 추가합니다.
    listsEl.appendChild(liElement);

    searchInput.value = "";
    ID_Num += 1;

    //메모 요소들에 이벤트리스너 추가
    registerButtonListeners();

  }
}

function addStrikethrough(){

  // let textElement = document.querySelector('#liID');
  // textElement.style.textDecoration = 'line-through';
}
//체크박스 설정 -> 취소선을 긋는 함수

function clearStrikethrough(){

}
//체크박스 해제 -> 취소선을 제거하는 함수

function updateTodoItem(){
  
}

function deleteTodoItem(event){
  let liID = event.target.parentNode.id;
  console.log(liID);
  let element = document.getElementById(liID);
  element.remove();
}

function openModal(event){
  let liID = event.target.parentNode.id;
  console.log(liID);
  dialog.showModal();
}
//dialog내의 모달을 키는 함수

