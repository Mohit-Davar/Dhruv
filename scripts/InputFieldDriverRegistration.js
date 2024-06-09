//Declaring Input Field
class InputField {

    constructor(id, name, placeholder, icon, type, label = "") {
        this.id = id
        this.name = name
        this.placeholder = placeholder
        this.icon = icon
        this.type = type
        this.label = label
    }
}

const PersonalInputForm = document.querySelector('form.Personal .inputFields')
const DocumentInputForm = document.querySelector('form.Documents .inputFields')

// function to generate html
function generateInputField(id, name, placeholder, icon, type, container, label) {
    return (
        container.innerHTML = container.innerHTML + `
                    <div class="${id} relative">
                        <input type="${type}" name="${name}" placeholder="${placeholder}"
                            class="outline-none border-b-2 border-b-black py-1 w-full"
                            id="${id}">
                        <i class="${icon} absolute bottom-2 right-4 text-themeColorOne"></i>
                        <label for="${id}" class="text-gray-500 font-robotoCondensed">${label}</label>
                    </div>
        `
    )
}

//Database of Different Personal Input Fields
const PersonalInputFields = [
    new InputField("EmailDriver", "EmailDriver", "Email", "fa-solid fa-envelope", "email"),
    new InputField("DOBDriver", "DOBDriver", "Date of Birth", "fa-solid fa-calendar-days", "date"),
    new InputField("PhoneDriver", "PhoneDriver", "Phone Number", "fa-solid fa-phone", "number"),
    new InputField("PasswordDriver", "PasswordDriver", "Password", "fa-solid fa-lock", "password"),
]
PersonalInputFields.forEach(InputField => {
    generateInputField(InputField.id, InputField.name, InputField.placeholder, InputField.icon, InputField.type, PersonalInputForm, '')
})

// Database of Different Document Input fields
const DocumentsInputFields = [
    new InputField("AadharDriver", "AadharDriver", "Aadhar", "fa-solid fa-image", "file", "Aadhar Card"),
    new InputField("DLDriver", "DLDriver", "Driving Licence", "fa-solid fa-id-card", "file", "Driving License"),
    new InputField("PhotoDriver", "PhotoDriver", "Photo", "fa-solid fa-user", "file", "Photo"),
    new InputField("ExperienceDriver", "ExperienceDriver", "Years of Experience", "fa-solid fa-clock", "number"),
]
DocumentsInputFields.forEach(InputField => {
    generateInputField(InputField.id, InputField.name, InputField.placeholder, InputField.icon, InputField.type, DocumentInputForm, InputField.label)
})
let files=document.querySelectorAll('input[type="file"]')
files.forEach(file=>{
    file.style.display="none"
})











// flatpickr
flatpickr("#DOBDriver", {
    dateFormat: "d.m.Y",
    maxDate: "today",
    minDate: "01-01-1950",
})


let OTPButton=document.querySelector('form.Personal button.submit')
OTPButton.addEventListener("click",(e)=>{
    e.preventDefault()
    document.querySelector('form.Personal').style.display="none"
    document.querySelector('form.Documents').style.display="flex"
})