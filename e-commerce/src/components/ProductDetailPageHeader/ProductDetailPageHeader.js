import {BiArrowBack} from "react-icons/bi"
import {LuShoppingCart} from "react-icons/lu";
import Image from "next/image";
import { useRouter } from "next/router";
export default function(){
    const router = useRouter();
    return(
    <div className="headerDivProPage">
        <BiArrowBack onClick={()=>{router.push("/home")}} style={{height:"30px" ,width:"50px",color:"rgb(13, 78, 134)",cursor: "pointer"}}/>
        <Image src={"/images/logo.png"} height={60} width={200} alt="logo"/>
        <LuShoppingCart style={{height:"30px" ,width:"40px", color:"rgb(13, 78, 134)",cursor: "pointer"}}/>
    </div>
    )
}