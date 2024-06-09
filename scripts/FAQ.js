const faqContainer = document.querySelector(".faq-container")
// function to add FAQ
function GenerateFAQ(question, answer) {
    return (
        faqContainer.innerHTML = faqContainer.innerHTML + `<div class="query border-b border-b-white border-opacity-55 py-4" >
    <button class="accordion sm:text-2xl flex justify-between gap-4 w-full text-left font-poppins">${question} <i class="fa-solid fa-chevron-down"></i></button>
    <div class="panel sm:text-xl max-h-0 overflow-hidden">
        <p>${answer}</p>
    </div>
</div>`
    )
}
// Class FAQ
class FAQ {
    constructor(question, answer) {
        this.question = question
        this.answer = answer
    }
}
//Database of Different FAQs
const FAQs = [
    new FAQ("How do I know the driver is trustworthy?", "Safety is our top priority. All our drivers undergo rigorous background checks, including document checks"),
    new FAQ(" What areas do you serve?", "We offer driver rental services in a wide range of locations. Please check our website or contact our customer service team to confirm if we operate in your area."),
    new FAQ("Can I request a specific driver?", "While we do our best to accommodate specific driver requests, availability cannot always be guaranteed. Please let us know your preference, and we will try to match you with your preferred driver."),
    new FAQ("Are there any additional fees I should be aware of?", "Our pricing is transparent with no hidden fees. Any additional costs, such as tolls or parking fees, will be clearly communicated during the booking process."),
    new FAQ("Are your drivers licensed and verified?", "Yes, all our drivers are professionally licensed and undergo comprehensive background checks and screenings. They are also trained to ensure your safety and comfort."),
]
// Adding Faq To HTML
FAQs.forEach(FAQ => {
    GenerateFAQ(FAQ.question, FAQ.answer)
})

// Adding Animation and Functionality to Accordions
const accordions = document.querySelectorAll(".accordion");
accordions.forEach(accordion => {
    accordion.addEventListener("click", function () {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        const chevr = this.querySelector("i")
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            chevr.style.rotate = "0deg"
            this.style.color = "white"
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            chevr.style.rotate = "180deg"
            this.style.color = "#d8ab21"
        }
    });
})