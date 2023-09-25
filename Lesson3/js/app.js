let name_e = document.getElementById("input_name")  // поле ввода имени
let input_e = document.getElementById("input_text") // поле ввода сообщения
let chat_e = document.getElementById("chat_text")   // чат
let send_btn = document.getElementById("send")      // кнопка отправить сообщение

send_btn.addEventListener("click", OnClick_Send)
document.getElementById("new_chat").addEventListener("click", OnClick_NewChat)
name_e.addEventListener("keyup", OnKeyUp)
input_e.addEventListener("keyup", OnKeyUp)


OnClick_NewChat();  // вызовем для начальной установки атрибутов


function OnClick_Send() { // нажатие на кнопку <отправить>
    chat_e.value += name_e.value + ` (${GetCurTime()}):` + "\n" + input_e.value + "\n\n"
    input_e.value = ""
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

function GetCurTime() { // возвращает текущее время с форматированием
    Data = new Date()
    Hour = Data.getHours()
    Minutes = Data.getMinutes()
    Seconds = Data.getSeconds()
    if(Hour<10) Hour="0" + Hour
    if(Minutes<10) Minutes="0" + Minutes
    if(Seconds<10) Seconds="0" + Seconds
    time = Hour  + ":" + Minutes + ":" + Seconds
    return time    
}