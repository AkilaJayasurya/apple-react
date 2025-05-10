import hero from "../assets/images/hero.jpg"
import mother from "../assets/images/mother.jpg"
import watch from "../assets/images/watch.jpg"

//Hero component

function Hero() {
    return (
        <section>
            <div className="sm:font-thin bg-gray-500 text-white p-5 text-center text-lg">
                <p>Get up to 12 months of No Cost EMI◊ plus up to ₹8000.00 instant cashback‡ on selected products with eligible cards. <span className="cursor-pointer text-yellow-400">Shop</span></p>
            </div>

            <div className="relative" style={{ height: "800px"}}>
                <img src={hero} alt="" className="h-full w-full object-cover" />

                <div className="absolute text-white top-20 left-1/2 transform -translate-x-1/2">
                    <h1 className="md:text-4xl font-semibold">iPhone 16 Pro</h1>
                    <h2 className="md:text-2xl font-semibold">Build For Apple Intelligence</h2>
                    <button className="bg-blue-600 p-3 rounded-lg mr-3">Learn More</button>
                    <button className="border border-blue-600 p-3 rounded-lg mt-4">Buy</button>
                </div>
            </div>

            <div className="relative mt-4" style={{ height: "600px" }}>
                <img src={mother} alt="" className="h-full w-full object-cover" />

                <div className="absolute text-black bottom-10 left-1/2 transform -translate-x-1/2 text-center">
                    <h1 className="md:text-5xl font-bold">Mother's Day</h1>
                    <h2 className="md:text-3xl font-light">It's Not To Late For Find The Perfect Gift For Mom!</h2>
                    <button className="bg-blue-600 p-3 rounded-lg mr-3 text-white mt-4">Shope</button>
                </div>
            </div>

            <div className="relative mt-4" style={{ height: "850px" }}>
                <img src={watch} alt="" className="h-full w-full object-cover" />

                <div className="absolute text-black top-20 left-1/2 transform -translate-x-1/2 text-center">
                    <h1 className="md:text-6xl font-bold"><i className="fa-brands fa-apple text-5xl mr-2" style={{color: "#000205;"}}></i>watch</h1>
                    <h2 className="md:text-3xl font-light">Show Your Stripes With New Pride Edition Sports Band!</h2>
                    <button className="bg-blue-600 p-3 rounded-lg mr-3 text-white mt-4">Buy</button>
                </div>
            </div>

                  
        </section >
    )
}

export default Hero

