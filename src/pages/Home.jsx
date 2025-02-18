import { PiArrowRight } from "react-icons/pi"

export const Home = ()=>{
    return (
        <main className="hero-section main">
            <div className="container grid grid-two-cols">
            <div className="hero-content">
                <h1 className="heading-xl">
                    Explore the world one country at a time
                </h1>
                <p className="paragraph">
                    Discover the history culture and beauty of every nation,join in on this adventure!
                </p>
                <button className="btn bg-white-box">
Start Exploring <PiArrowRight />
                </button>
            </div>
            <div className="hero-image">
                <img src="/images/world.png" alt=" world banner" className="banner-image" />
            </div>
            </div>
        </main>
    )
}