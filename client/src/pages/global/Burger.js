import { AiOutlineClose } from "react-icons/ai";

function Burger (props) {
    const { burgerOpen, setBurgerOpen } = props

    return (
        <div className={`fixed ${burgerOpen ? "top-0": "top-[-100vh]"} lg:hidden text-white flex flex-col items-center justify-center top-0 bg-black w-[100vw] h-[100vh] z-[100] p-[2rem] gap-[1.5rem]`}>
            <AiOutlineClose onClick={ () => setBurgerOpen(old => !old)} className="text-[1.25rem] cursor-pointer"/>
            <a href="/supplements" className="text-[2rem] line-hover">Supplements</a>
            <a href="/apparel" className="text-[2rem] line-hover">Apparel</a>
            <a href="/accessories" className="text-[2rem] line-hover">Accessories</a>
        </div>
    )

}

export default Burger;