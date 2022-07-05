let chatInput = document.querySelector("#chat_input");
let send = document.querySelector("#send");
let chatBox = document.querySelector(".chatsBox")

let loginInput = document.querySelector("#join_chat")
let loginSend = document.querySelector("#join")

let chatLogin = document.querySelector(".chat_login")
let chatContent = document.querySelector(".chat_content")
    // global variable
let joinChatName;
loginSend.addEventListener('click', function() {
    joinChatName = loginInput.value;
    if (joinChatName) {
        socket.emit("chat_join", joinChatName)
        chatContent.classList.remove("hide")
        chatLogin.classList.add("hide")
    }

})

send.addEventListener("click", function() {
    let chatMsg = chatInput.value;

    if (chatMsg) {

        socket.emit("chat_send", { joinChatName, chatMsg });

        let chatDiv = document.createElement('div')
        chatDiv.classList.add('chat')
        chatDiv.classList.add('right')

        let chatName = document.createElement('div');
        chatName.classList.add("chat_name")
        chatName.innerHTML = "harry";

        let chatText = document.createElement("div");
        chatText.classList.add("chat_txt");
        chatText.innerHTML = chatMsg;

        chatDiv.append(chatName)
        chatDiv.append(chatText)
        chatBox.append(chatDiv)
        chatInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
})