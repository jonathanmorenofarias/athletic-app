import {IoMdStarHalf, IoMdStar, IoMdStarOutline} from "react-icons/io";

function Review (props) {
    


    return (
        <div className="shadow-review flex flex-col gap-[1rem] my-[2rem] p-[2rem]">
            <p className="text-[1.25rem] font-bold">{props.name}</p>
            <div className="flex">
                {Array(Math.floor(props.rating)).fill(<IoMdStar className='text-[2rem]'/>)}
                {props.rating - Math.floor(props.rating) === 0.5 ? <IoMdStarHalf className='text-[2rem]'/> : null}
                {Array(5 - Math.ceil(props.rating)).fill(<IoMdStarOutline className='text-[2rem]'/>)}
            </div>
            <p className="text-[1.15rem] font-semibold">{props.header}</p>
            <p>{props.comment}</p>
            

        </div>
    )
}

export default Review;