import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoMdStarHalf, IoMdStar, IoMdStarOutline } from "react-icons/io";
import Reviews from "../components/ViewProduct/Reviews";
import CartContent from "../components/ViewProduct/CartContent";


function ViewProduct () {
    const params = useParams();
    const productID = params.productID;
    
    const [product, setProduct] = useState({});
    const [elements, setType] = useState([{}]);
    const [reviews, setReviews] = useState([]);
    const [shortDesc, setShortDesc] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [flavorChoice, setFlavorChoice] = useState("");
    const [flavorImage, setFlavorImage] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/items/${productID}`)
        .then(res => res.json())
        .then(product => {
            setType(product.elements)
            setFlavorChoice(product.elements[0].variant)
            setFlavorImage(product.elements[0].image)
            setProduct(product)
            setReviews(product.reviews)
            setShortDesc(product.shortDesc)
        }).then(() => setLoading(false))
        
    }, []);

    const bullets = shortDesc.map((desc) => <li>» {desc} </li>)

    const flavors = elements.map((flavor) => <option value={flavor.variant}>{flavor.variant}</option>)

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

        for (let i = 0; i < (5 - Math.ceil(rounded)); i++) {  
            arr.push(<IoMdStarOutline className={`text-${color} text-[${size}]`} />)
        }
        
        return (<div className="flex">{arr}</div>)
    }

    function handleFlavor (event) {
        setFlavorImage(elements.find(x => x.variant === event.target.value).image)
        setFlavorChoice(event.target.value)
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#919191]"></div>
            </div>
        )
    }
        return (
            <div className="flex flex-col justify-center items-center py-[4rem]">
            <div className="flex justify-center items-start gap-[2rem]">
                <div className="flex flex-col gap-[1rem]">
                    <img src={flavorImage} alt={`of ${product.name}`} className="h-[40rem] rounded-lg" />
                    <div className="flex gap-[1rem]">
                        {elements.map((flavor) =>  
                            <img 
                            src={flavor.image}
                            onClick={() => setFlavorImage(flavor.image)} 
                            className={`h-[5rem] rounded-lg hover:cursor-pointer 
                            ${flavorImage === flavor.image ? "border-b-[3px] border-[red]": null }`} />)}
                    </div>
                </div>
                <div className="flex flex-col gap-[.5rem]">
                    <h1 className="font-bold text-[2rem]">{product.name}</h1>
                    <p className="font-bold text-[1.25rem]">{product.price}</p>
                    <div className="flex justify-start items-center gap-[1rem]">
                        {roundedStars("1.25rem", "yellow-300")}
                        <p className="text-[1rem]">{reviews.length} Reviews</p>
                    </div>
                    <hr className="hr-prod"/>
                    <CartContent 
                        description={product.longDesc} 
                        type = {product.type}
                        bullets={bullets} 
                        flavors={flavors} 
                        flavorChoice={flavorChoice} 
                        handleFlavor={handleFlavor} 
                        quantity={quantity} 
                        setQuantity={setQuantity}
                    />
                </div>
            </div>
                <Reviews list={reviews} stars={roundedStars} />
            </div>
        )
}

export default ViewProduct;