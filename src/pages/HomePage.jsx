import React from "react"
import '../index.css'

export default function HomePage() {



    return (
        <>
            <section className="static flex flex-col w-full h-full bg-opacity-0" id="homepage">
                <div className="static">
                
                    <div id="home_top" className="w-full h-full fixed top-0 ">
                        <img src="home_images/cloudSide.png" className="h-[50%] w-[30%] left-0 top-[30%] fixed" id="cloud1"></img>
                        <img src="home_images/cloudset1.png" className="h-[50%] w-[30%] left-[8%] top-[11%] fixed" id="cloud2"></img>
                        <img src="home_images/cloudsetMini1.png" className="h-[80%] w-[40%] left-[24%] top-[8%] fixed" id="cloud3"></img>
                        <img src="home_images/cloudMini1.png" className="h-[50%] w-[30%] left-[14%] top-[38%] fixed" id="cloud4"></img>
                        <img src="home_images/cloudset2.png" className="h-[50%] w-[30%] left-[35%] top-[24%] fixed" id="cloud5"></img>
                        <img src="home_images/cloudMini2.png" className="h-[50%] w-[30%] left-[53%] top-[40%] fixed" id="cloud6"></img>
                        <img src="home_images/cloudset3.png" className="h-[50%] w-[30%] left-[66%] top-[17%] fixed" id="cloud7"></img>
                    </div>
                </div>
            
                <div id="home_bottom" className="w-full h-[100%] static bottom-0">
                    <img src="home_images/bike.gif" id="bike" className="w-[15%] z-0 bottom-[10%] left-[-10%] absolute"></img>
                </div>  
               
                                
            </section>
        </>
    )
}