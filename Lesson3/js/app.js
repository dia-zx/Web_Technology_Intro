let name_e = document.getElementById("input_name");
let input_e = document.getElementById("input_text");
let chat_e = document.getElementById("chat_text");
let send_btn = document.getElementById("send");

send_btn.addEventListener("click", OnClick_Send);
document.getElementById("new_chat").addEventListener("click", OnClick_NewChat);

name_e.addEventListener("keyup", OnKeyUp_name)
input_e.addEventListener("keyup", OnKeyUp_name)

OnClick_NewChat();


function OnClick_Send() {

    chat_e.value += name_e.value + ` (${GetCurTime()}):` + "\n" + input_e.value + "\n\n"
    input_e.value = ""
    input_e.dispatchEvent(new Event("keyup"))
}

function OnClick_NewChat() {
    chat_e.value = ""
    input_e.value = ""
    name_e.dispatchEvent(new Event("keyup"))
    input_e.dispatchEvent(new Event("keyup"))
}

function OnKeyUp_name() {
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

function CanPressSend_btn() {
    if (name_e.value == "" || input_e.value == "")
        send_btn.setAttribute("disabled", "")
    else
        send_btn.removeAttribute("disabled")
}

function GetCurTime() {
    Data = new Date();
    Hour = Data.getHours();
    Minutes = Data.getMinutes();
    Seconds = Data.getSeconds();
    if(Hour<10) Hour="0" + Hour
    if(Minutes<10) Minutes="0" + Minutes
    if(Seconds<10) Seconds="0" + Seconds
    time = Hour  + ":" + Minutes + ":" + Seconds
    return time    
}