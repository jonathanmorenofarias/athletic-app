import {FiChevronDown} from "react-icons/fi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function CartContent (props) {
    
    const isApparel = () => {
        if (props.type === "apparel") {
            return (
                <div>
                    <p>{props.type === "apparel" ? "Size": null}</p>
                    <div className="select-wrapper h-[4rem]">{props.handleFlavor}
                        <select className="h-[3rem] px-[1rem] border-[1px] border-black" name="flavorChoice">
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
        <div className="flex flex-col gap-[1rem]">
            <div>
                <p>{props.type === "apparel" ? "Colors": "Flavors"}</p>
                <div className="select-wrapper h-[4rem]">
                    <select className="h-[3rem] px-[1rem] border-[1px] border-black" name="flavorChoice" value={props.flavorChoice} onChange={props.handleFlavor} id="flavorChoice">
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
                        <AiOutlineMinus className="text-[1rem] cursor-pointer" onClick={() => props.quantity === 1 ? null: props.setQuantity(props.quantity - 1)}/>
                        <p className="text-[1.25rem]">{props.quantity}</p>
                        <AiOutlinePlus className="text-[1rem] cursor-pointer" onClick={() => props.setQuantity(props.quantity + 1)}/>
                    </div>
                    <button className="w-[100%] h-[2.5rem] bg-[#919191] rounded-md font-bold">ADD TO CART</button>
                </div>
            </div>
            <ul>
                {props.bullets}
            </ul>
            <p className="w-[30rem]">{props.description}</p>

                
        </div>
    )

}

export default CartContent