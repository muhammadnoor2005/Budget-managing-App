import Menu from "../Menu/Menu";
import React from "react";
import Image from "next/image";
import SideMenu from "@/src/components/Nav/SideMenu/SideMenu";
import {Input} from "antd"
const {Search} = Input;
import {BiUserCircle} from "react-icons/bi";
import {LuShoppingCart} from "react-icons/lu";
import { useRouter } from "next/router";

export default function Home(){
    const router = useRouter();
    const onSearch = (value)=>{
        router.push(`/home/search/${value}`)
    }
    return(
        <div>
            <div className="menuDiv">
                <Image src={"/images/logo.png"} width={150} height={55} className="menuImg"/>
                <Menu/>
                <Search placeholder="search" onSearch={onSearch} enterButton className="searchBox" />
                <SideMenu/>
                <BiUserCircle className="userIcon" onClick={()=>{router.push("/profile/")}}/>
                <LuShoppingCart className="cartIcon"/>
            </div>
        </div>
    )
}