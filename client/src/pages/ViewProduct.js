import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoMdStarHalf, IoMdStar } from "react-icons/io";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Reviews from "../components/ViewProduct/Reviews";
import { Link }  from "react-router-dom";

function ViewProduct () {
    const params = useParams();
    const productID = params.productID;
    
    const [product, setProduct] = useState({});
    const [type, setType] = useState([{}]);
    const [reviews, setReviews] = useState([]);
    const [shortDesc, setShortDesc] = useState([]);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        fetch(`/api/items/${productID}`)
            .then(res => res.json())
            .then(product => {
                setType(product.type)
                setProduct(product)
                setReviews(product.reviews)
                setShortDesc(product.shortDesc)
            })
    }, []);

    const bullets = shortDesc.map((x) => {
        return (
            <li className="list-disc">{x}</li>
        )
    })

    const flavors = type.map((flavor) => {
        return (
            <p className="bg-red w-[10rem]">{flavor.variant}</p>
        )
    })


    const roundedStars = (size, color) => {
        let avg = 0
        let arr = []

        for (let i = 0; i < reviews.length; i++) {
            avg = avg + reviews[i].rating
        }

        const rounded = Math.round((avg / reviews.length) * 2) / 2;

        for (let i = 0; i < Math.floor(rounded); i++) {
            arr.push(<IoMdStar className={`text-${color} text-[${size}]`} />)
        }

        const half = rounded - Math.floor(rounded) === .5 ? (<IoMdStarHalf className={`text-${color} text-[${size}]`} />) : null
        arr.push(half)

        return (<div className="flex">{arr}</div>)
    }


    return (
        <div className="flex flex-col justify-center items-center py-[4rem]">
        <div className="flex justify-center items-start gap-[2rem]">
            <img src={product.defaultImage} alt={`of ${product.name}`} className="h-[40rem]" />
            <div className="flex flex-col gap-[.5rem]">
                <h1 className="font-bold text-[2rem]">{product.name}</h1>
                <p className="font-bold text-[1.25rem]">{product.price}</p>
                <div className="flex justify-start items-center gap-[1rem]">
                    {roundedStars("1.25rem", "yellow-300")}
                    <p className="text-[1rem]">{reviews.length} Reviews</p>
                </div>
                <hr className="hr-prod"/>
                <p>Qty</p>
                <div className="flex gap-[1.25rem] items-center">
                    <AiOutlineMinus className="text-[1.25rem] cursor-pointer" onClick={() => quantity === 1 ? null: setQuantity(quantity - 1)}/>
                    <p className="text-[1.5rem]">{quantity}</p>
                    <AiOutlinePlus className="text-[1.25rem] cursor-pointer" onClick={() => setQuantity(quantity + 1)}/>
                    <button className="w-[10rem] h-[2rem] bg-[#919191] rounded-md hover:scale-[103%] duration-200">ADD TO CART</button>
                </div>
                {bullets}
                <p className="w-[30rem]">{product.longDesc}</p>
            </div>
        </div>
            <Reviews list={reviews} stars={roundedStars}/>
        </div>
    )
}

export default ViewProduct;