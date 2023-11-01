import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoMdStarHalf, IoMdStar, IoMdStarOutline } from "react-icons/io";
import Reviews from "../components/ViewProduct/Reviews";
import CartContent from "../components/ViewProduct/CartContent";


function ViewProduct (props) {
    const { cartOpen, setCartOpen } = props
    const params = useParams();
    const productID = params.productID;
    const [product, setProduct] = useState({});
    const [elements, setElements] = useState([{}]);
    const [reviews, setReviews] = useState([]);
    const [shortDesc, setShortDesc] = useState([]);
    const [flavorImage, setFlavorImage] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/items/${productID}`)
        .then(res => res.json())
        .then(product => {
            setFormData({
                ...formData,
                flavorChoice: product.elements[0].variant
            })
            setElements(product.elements)
            setFlavorImage(product.elements[0].image)
            setProduct(product)
            setReviews(product.reviews)
            setShortDesc(product.shortDesc)
        }).then(() => setLoading(false))
        
    }, []);

    const [formData, setFormData] = useState({
        _id: productID,
        flavorChoice: "",
        quantity: 1
    });

    if (product.type === "apparel") {
        formData.size = "small"
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/api/cart/additem", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {

        })

        setCartOpen(true)
    }

    const handleChange = (e) => {
        setFormData ({
            ...formData,
            [e.target.name]: e.target.value
        })

    }
    
    function changeQuantity (action) {
        action === "add" ? setFormData({
            ...formData,
            quantity: formData.quantity + 1
        }) : setFormData({
            ...formData,
            quantity: formData.quantity - 1
        })

    }

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

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#919191]"></div>
            </div>
        )
    }
        return (
            <div className="flex flex-col justify-center items-center py-[4rem]">
            <div className="flex md:flex-row flex-col justify-center items-start gap-[2rem]">
                <div className="flex flex-col gap-[1rem]">
                    <img src={flavorImage} alt={`of ${product.name}`} className=" xl:h-[40rem] xl:w-[40rem] lg:h-[27rem] lg:w-[27rem] md:h-[20rem] md:w-[20rem] h-[80vw] h-[80vw] rounded-lg" />
                    <div className="flex gap-[1rem]">
                        {elements.map((flavor) =>  
                            <img 
                            src={flavor.image}
                            onClick={() => setFlavorImage(flavor.image)} 
                            className={`lg:h-[5rem] md:h-[4rem] h-[10vw] rounded-lg hover:cursor-pointer 
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
                        formData = { formData }
                        setFormData = { setFormData }
                        incQuantity = { () => changeQuantity("add") }
                        decQuantity = { () => changeQuantity("sub") }
                        handleChange = { handleChange }
                        handleSubmit = { handleSubmit }
                    />
                </div>
            </div>
                <Reviews list={reviews} stars={roundedStars} />
            </div>
        )
}

export default ViewProduct;