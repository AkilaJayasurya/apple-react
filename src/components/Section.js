import ipad from "../assets/images/ipad.jpg"
import iphone from "../assets/images/iphone.jpg"
import iphone16 from "../assets/images/iphone16.jpg"
import macbook from "../assets/images/macbook.jpg"
import man from "../assets/images/man.jpg"
import smartwatch from "../assets/images/smartwatch.jpg"


//Section component

function Section() {
    return (
        <section>
            <div className="flex justify-between">
                <div className="relative mx-2 my-3" style={{ width: "750px" }}>
                    <img src={ipad} alt="" className="h-full w-full object-cover" />
                    <div className="hidden md:block absolute text-black top-20 left-1/2 transform -translate-x-1/2 text-center">
                        <h1 className="text-4xl font-bold">Ipad Air</h1>
                        <h2 className="text-2xl font-light">Now Super Charged By M3 Ship!</h2>
                        <button className="bg-blue-600 p-3 rounded-lg mr-3 text-white mt-4">Buy</button>
                    </div>
                </div>
                <div className="relative mx-2 my-3" style={{ width: "750px" }}>
                    <img src={iphone} alt="" className="h-full w-full object-cover" />
                    <div className="hidden md:block absolute text-black top-20 left-1/2 transform -translate-x-1/2 text-center">
                        <h1 className="text-4xl font-bold">TradeIn</h1>
                        <h2 className="text-2xl font-light">Upgrade And Use! Its That's easy</h2>
                        <button className="bg-blue-600 p-3 rounded-lg mr-3 text-white mt-4">Get Estimate</button>
                    </div>
                </div>
            </div>




            <div className="flex justify-between">
                <div className="relative mx-2 my-3" style={{ width: "750px" }}>
                    <img src={iphone16} alt="" className="h-full w-full object-cover" />
                    <div className="hidden md:block absolute text-white bottom-20 left-1/2 transform -translate-x-1/2 text-center">
                        <h1 className="text-4xl font-bold">Iphone 16</h1>
                        <h2 className="text-2xl font-light">Build For Apple Intelligence</h2>
                        <button className="bg-blue-600 p-3 rounded-lg mr-3 text-white mt-4">Buy</button>
                    </div>
                </div>
                <div className="relative mx-2 my-3" style={{ width: "750px" }}>
                    <img src={macbook} alt="" className="h-full w-full object-cover" />
                    <div className="hidden md:block absolute text-black top-20 left-1/2 transform -translate-x-1/2 text-center">
                        <h1 className="text-4xl font-bold">MacBook Air</h1>
                        <h2 className="text-2xl font-light">Sky Blue Colour Build Your Passion!</h2>
                        <button className="bg-blue-600 p-3 rounded-lg mr-3 text-white mt-4">Buy</button>
                    </div>
                </div>
            </div>




            <div className="flex justify-between">
                <div className="relative mx-2 my-3" style={{ width: "750px" }}>
                    <img src={man} alt="" className="h-full w-full object-cover" />
                    <div className="hidden md:block absolute text-white bottom-20 left-1/2 transform -translate-x-1/2 text-center">
                        <h1 className="text-4xl font-bold">Airpods-4</h1>
                        <h2 className="text-2xl font-light block">Iconic! Now Super Sonic, Available With Noice cancellation.</h2>
                        <button className="bg-blue-600 p-3 rounded-lg mr-3 text-white mt-4">Buy</button>
                    </div>
                </div>
                <div className="relative mx-2 my-3" style={{ width: "750px" }}>
                    <img src={smartwatch} alt="" className="h-full w-full object-cover" />
                    <div className="hidden md:block absolute text-black top-20 left-1/2 transform -translate-x-1/2 text-center">
                        <h1 className="text-4xl font-bold"><i className="fa-brands fa-apple text-5xl mr-2" style={{ color: "#000205;" }}></i>Watch</h1>
                        <h2 className="text-2xl font-light">Show Your Stripes With New Pride Edition Sports Band!</h2>
                        <button className="bg-blue-600 p-3 rounded-lg mr-3 text-white mt-4">Buy</button>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Section