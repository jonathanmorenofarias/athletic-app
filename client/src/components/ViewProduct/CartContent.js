import {FiChevronDown} from "react-icons/fi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function CartContent (props) {
    const isApparel = () => {
        if (props.type === "apparel") {
            return (
                <div>
                    <p>{props.type === "apparel" ? "Size": null}</p>
                    <div className="select-wrapper h-[4rem]">{props.handleFlavor}
                        <select className="h-[3rem] px-[1rem] border-[1px] border-black"
                            id="size"
                            value={props.formData.size} 
                            onChange={props.handleChange} 
                            name="size">
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                        <FiChevronDown className="absolute right-[1rem] pointer-events-none"/>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="flex flex-col gap-[1rem] xl:w-[35rem] lg:w-[30rem] md:w-[20rem] w-[80vw]">
            <div>
                <p>{props.type === "apparel" ? "Colors": "Flavors"}</p>
                <div className="select-wrapper h-[4rem]">
                    <select className="h-[3rem] px-[1rem] border-[1px] border-black" 
                        id="flavorChoice"
                        value={props.formData.flavorChoice} 
                        onChange={props.handleChange} 
                        name="flavorChoice"> 
                        {props.flavors}
                    </select>
                    <FiChevronDown className="absolute right-[1rem] pointer-events-none"/>
                </div>
            </div>
            {isApparel()}
            <div className="flex flex-col gap-[.5rem]">
                <p>Qty</p>
                <div className="flex gap-[1.25rem] items-center">
                    <div className="flex items-center gap-[1.5rem] bg-[#e3e3e3] p-[.5rem] rounded-md h-[2.5rem]">
                        <AiOutlineMinus onClick={ props.formData.quantity > 1 ? props.decQuantity : null } className="text-[1rem] cursor-pointer" />
                        <input type="number" className="text-[1.25rem] bg-[#e3e3e3] w-[3rem] text-center" 
                            id="quantity"
                            value={props.formData.quantity} 
                            onChange={props.handleChange} 
                            name="quantity" />
                        <AiOutlinePlus onClick={props.incQuantity} className="text-[1rem] cursor-pointer" />
                    </div>
                    <button onClick={props.handleSubmit} className="w-[100%] h-[2.5rem] md:w-[30rem] w-[40vw] md:text-[1rem] text-[.8rem] bg-[#919191] rounded-md font-bold">ADD TO CART</button>
                </div>
            </div>
            <ul>
                {props.bullets}
            </ul>
            <p className="w-[100%]">{props.description}</p>    
        </div>
    )

}

export default CartContent