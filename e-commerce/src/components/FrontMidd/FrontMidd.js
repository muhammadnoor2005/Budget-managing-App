
import { Button } from "antd"
import ScrollContext from "../ScrollContext/ScrollContext"
import { useContext } from "react"
import Link from "react-scroll"
export default function(){
    const useCtx = useContext(ScrollContext)
    return(
        <div>
            <div className="frontBg">
                <img src={"/images/person1.png"} alt={"person"}className="person1Img"/>
                <div className="mensColl">
                    <span className="shopIsFun">Shop is fun</span>
                    <h1 className="mensCollHead">BROWSE OUR PREMIUM PRODUCTS</h1>
                    <span className="mensColDet">Us which over of signs divide dominion deep fill bring they're meat beho upon own earth without morning over third. Their male dry. They are great appear whose land fly grass.</span>
                    <br/>
                    <Button type="primary" size={10} className="button" onClick={()=>{useCtx.scrollDiv("trending")}}>
                        Browse now
                    </Button>
                </div>
            </div>
            
        </div>
    )
}
