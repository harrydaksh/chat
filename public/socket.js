socket.on("user-joined", function(name) {
    let joinDiv = document.createElement("div");
    joinDiv.classList.add('chat_join')
    joinDiv.innerHTML = `${name} has joined the chat`;
    chatBox.append(joinDiv)
})

socket.on("receive_chat", function(userObj) {
    let chatDiv = document.createElement('div')
    chatDiv.classList.add('chat')
    chatDiv.classList.add('left')

    let chatName = document.createElement('div');
    chatName.classList.add("chat_name")
    chatName.innerHTML = userObj.joinChatName;

    let chatText = document.createElement("div");
    chatText.classList.add("chat_txt");
    chatText.innerHTML = userObj.chatMsg;

    chatDiv.append(chatName)
    chatDiv.append(chatText)
    chatBox.append(chatDiv)
})