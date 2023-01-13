const showNotificationBtn = document.getElementById('btn')
const messagesContainer = document.querySelector('.messages-container')

const messages = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven']
const types = [ 'info', 'success', 'error']

showNotificationBtn.addEventListener('click', ()=>{showMeMessages()} )

function showMeMessages(message = null, type = null){
    
    const newMessage = document.createElement('button')
    messagesContainer.append(newMessage)
    newMessage.innerText = message ? message : "Message " +createMessage()
    newMessage.classList.add('message')
    newMessage.classList.add(type? type: createType())

    setTimeout(() => {
        newMessage.remove()
    }, 3000);

}

function createMessage(){
    return messages[Math.floor(Math.random() * messages.length)]
}
function createType(){
    return types[Math.floor(Math.random() * types.length)]
}