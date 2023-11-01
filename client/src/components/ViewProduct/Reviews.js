import {IoMdStarOutline} from 'react-icons/io';
import Review from './Review';
function Reviews (props) {

    const allReviews = props.list.map((review) => {
        return (
            <Review name={review.name} header={review.header} comment={review.body} rating={review.rating} date={review.date}/>
        )
    })

    return (
        <div className='px-[2rem]'>
            <div className="flex flex-col justify-center items-center py-[2rem] w-[90vw]">
                <h1 className="text-[1.75rem]">Customer Reviews</h1>
                <div className='scale-[130%] '>{props.stars("1.5rem", "black")}</div>
                <hr className='border-t-[1px] w-[15rem] mt-[1rem] border-[#c2c2c2;]'/>
            </div>
            <div>
                <p>{props.list.length} Reviews</p>
                {allReviews}
            </div>
        </div>
    )
}

export default Reviews;