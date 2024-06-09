//Adding Swiper
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    freeMode: true,
    // loop: true,
    breakpoints: {
        1074: {
            slidesPerView: 3,
        },
        710: {
            slidesPerView: 2,
        }

    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
});


// Adding Mouse Tracking Effect
let ClientSwiper = document.querySelector('.Clients .swiper')
let ClientCursor = document.querySelector('.clientCursor')

ClientSwiper.addEventListener("mousemove", (e) => {
    ClientCursor.style.display = "flex"
    gsap.to(ClientCursor, {
        x: e.clientX,
        y: e.clientY + 80,
        ease: "ease.out"
    })
})
ClientSwiper.addEventListener("mouseleave", (e) => {
    ClientCursor.style.display = "none"
})


//Generation of Client Reviews
const ClientContainer = document.querySelector('.Clients .swiper-wrapper')
function generateClientReview(name, review, url) {
    return (
        ClientContainer.innerHTML = ClientContainer.innerHTML + `<div
                                class="swiper-slide h-[500px] flex flex-col gap-5 py-16 px-10 border-r-4 border-r-[color:var(--theme-color-2)] items-center">
                                <div class="img rounded-full w-[clamp(3.5rem,20%,100rem)] aspect-square bg-center bg-cover"
                                    style="background-image: url(${url});">
                                </div>
                                <div class="name text-[clamp(1.5rem,2vw,10rem)]">
                                    <p>${name}</p>
                                </div>
                                <div class="para text-white">
                                    ${review}
                                </div>
                            </div>`
    )
}
//Declaring Class ClientReview
class ClientReview {

    constructor(Clientname, review, url) {
        this.Clientname = Clientname
        this.review = review
        this.url = url
    }
}

//Database of Different ClientReviews
const ClientReviews = [
    new ClientReview("Sample", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quis obcaecati id libero placeat? Voluptatum dignissimos similique amet quos, hic sint doloremque repellendus error itaque atque sit a","/Images/Client-Review/Sample.jpg"),
]
ClientReviews.forEach(ClientReview => {
    generateClientReview(ClientReview.Clientname, ClientReview.review, ClientReview.url)
})
