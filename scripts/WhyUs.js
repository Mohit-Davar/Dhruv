    //Generating WHY US Points
    const PointContainer = document.querySelector('.points-container')
    function generatePoints(heading, description, iconClass) {
        return (
            PointContainer.innerHTML = PointContainer.innerHTML + `
        <div class="point flex gap-4 lg:w-[400px] m-2">
                        <div class="logo-container justify-center items-start ">
                            <div class="point-logo bg-themeColorOne w-[50px] aspect-square rounded-full flex justify-center items-center text-white">
                                <i class=" ${iconClass} text-[clamp(1.25rem,1.75vw,10rem)]"></i>
                            </div>
                        </div>
                        <div class="point-text">
                            <div class="point-heading text-[clamp(1.25rem,1.75vw,10rem)] font-robotoCondensed text-themeColorOne">
                                ${heading}
                            </div>
                            <div class="point-description font-poppins">
                                ${description}
                            </div>
                        </div>
                    </div>`
        )
    }
    //Declaring Class Point
    class Point {

        constructor(heading, description, iconClass) {
            this.heading = heading
            this.description = description
            this.iconClass = iconClass
        }
    }
    //Database of Different Points
    const Points = [
        new Point("Outstanding Services", "At our driver rental service, we pride ourselves on delivering exceptional services that go above and beyond your expectations. Our commitment to excellence ensures that every journey you take with us is seamless, comfortable, and enjoyable." ,"fa-solid fa-thumbs-up"),
        new Point("Name for Quality Drivers", "Our team of drivers represents the pinnacle of professionalism and expertise, ensuring you receive the highest standard of service every time.With our Quality Drivers, you can sit back, relax, and enjoy the journey, as you are in the hands of the best.", "fa-solid fa-award"),
        new Point("Verified Drivers", "When you choose our service, you can be confident that you are in the safest hands with our Verified Drivers. We go to great lengths to ensure that every driver meets our stringent standards for reliability. You can rest assured that your journey will be safe.", "fa-solid fa-check"),
        new Point("Cheap", "We believe that exceptional service doesn't have to come with a hefty price tag. Our Affordable Pricing model is designed to provide you with top-quality driver services. With our Affordable Pricing, you don’t have to compromise on quality for the sake of cost. Enjoy premium driver services in your budget", 'fa-solid fa-dollar'),
        new Point("Experienced Drivers", "Experience is the cornerstone of our exceptional driver rental service. Our Experienced Drivers bring a wealth of knowledge and skills to ensure your journey is safe, efficient, and enjoyable. When you choose our Experienced Drivers, you can trust that you are in capable hands.", "fa-solid fa-id-card"),
        new Point("Proper Support", "At our driver rental service, we believe that exceptional support is key to providing a seamless and stress-free experience. Our Proper Support ensures that you have the assistance you need, whenever you need it. With our Proper Support, you can be confident that you are never alone on the road.", "fa-solid fa-headset")
    ]
    Points.forEach(point => {
        generatePoints(point.heading, point.description, point.iconClass)
    })