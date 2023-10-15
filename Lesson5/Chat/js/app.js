let name_e = document.getElementById("input_name")  // поле ввода имени
let input_e = document.getElementById("input_text") // поле ввода сообщения
let chat_e = document.getElementById("chat_text")   // чат
let send_btn = document.getElementById("send")      // кнопка отправить сообщение

send_btn.addEventListener("click", OnClick_Send)
document.getElementById("new_chat").addEventListener("click", get)
name_e.addEventListener("keyup", OnKeyUp)
input_e.addEventListener("keyup", OnKeyUp)


OnClick_NewChat();  // вызовем для начальной установки атрибутов

get();

setInterval(get, 2000);

function OnClick_Send() { // нажатие на кнопку <отправить>
    (async () => {
        var response = await fetch('chat.php', {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({
                user: name_e.value,
                message_text: chat_e.value
            })
        });
        var answer = await response.json();
        if (answer.status === "ok") input_e.value = ""
        if (answer.status === "error") input_e.value = answer.error
    }
    )();

    input_e.dispatchEvent(new Event("keyup"))
}

function OnClick_NewChat() { // нажатие на кнопку <новый чат>
    chat_e.value = ""
    input_e.value = ""
    name_e.dispatchEvent(new Event("keyup"))
    input_e.dispatchEvent(new Event("keyup"))
}

function OnKeyUp() { // при отжатии кнопки в текстовый полях ввода
    if (this.value == "") {
        this.classList.remove("valid")
        this.classList.add("invalid")
    }
    else {
        this.classList.remove("invalid")
        this.classList.add("valid")
    }
    CanPressSend_btn()
}

function CanPressSend_btn() { // проверка на валидность отправки сообщения
    if (name_e.value == "" || input_e.value == "")
        send_btn.setAttribute("disabled", "")
    else
        send_btn.removeAttribute("disabled")
}


function get() {

    (async () => {
        var response = await fetch('chat.php')
        var answer = await response.json()

        str = ''

        for (message_data in answer['messages']) {
            str = message_data['user'] + ": \n" + message_data['message_text'] + "\n\n"
        }

        chat_e.value = str
    }
    )();

}