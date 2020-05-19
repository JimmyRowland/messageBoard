var stringifiedMsg = "[\"The most beautiful msg board I have ever seen\",\"Flaggy flag forever\",\"One true flag\",\"Flaggy flag\",\"asdfas\",\"erstserg\"]"
messages = JSON.parse(stringifiedMsg);
// console.log(message);
const handleSubmit = () => {
  const $msgContainer = document.getElementById("mb-msg-container");
  const $input = document.getElementById("textInput");
  msg = $input.value;
  $input.value = "";
  messages.push(msg);
  console.log(messages);
  addMessage(msg, $msgContainer);
}

const addMessage = (msg, $msgContainer)=>{
  msgBlock = document.createElement('div');
  innerBlock = document.createElement('span');
  innerBlock.innerText = msg;
  msgBlock.appendChild(innerBlock);
  msgBlock.className = "mb-msg";
  $msgContainer.append(msgBlock);
}
const onload = ()=>{
  const $msgContainer = document.getElementById("mb-msg-container");
  for (const msg of messages){
    addMessage(msg,$msgContainer);
  }
}

const handleClear = () => {
  const $msgContainer = document.getElementById("mb-msg-container");
  $msgContainer.innerHTML = "";
  messages = [];
  console.log(messages);
}
const handleClearFrom = ()=>{
  const $input = document.getElementById("textInput");
  $input.value ="";

}
