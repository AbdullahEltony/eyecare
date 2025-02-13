import { FaStar } from "react-icons/fa"
import { reviewData } from "../../data"

const RecentReviews = () => {
    return (
        <div className="bg-white rounded-xl border-[1px] border-border p-5">
            <h2 className="text-sm font-medium">Recent Reviews</h2>
            {reviewData.slice(1, 3).map((rev, index) => (
                <div
                    key={index}
                    className="flex-btn gap-4 mt-6 border-b pb-4 border-border"
                >
                    <div className="flex gap-4 items-center">
                        <img
                            src={rev?.user?.image}
                            alt={rev?.user?.title}
                            className="w-10 h-10 rounded-md object-cover"
                        />
                        <div className="flex flex-col gap-1">
                            <h3 className="text-xs font-medium">{rev?.user?.title}</h3>
                            <p className="text-xs text-gray-400 text-wrap leading-5 max-w-44 truncate">
                                {rev?.comment.slice(0, 45)}...
                            </p>
                        </div>
                    </div>
                    <div className="flex-rows gap-1">
                        <p className="text-xs text-textGray">{rev?.star}</p>
                        <p className="text-orange-500 text-xs">
                            <FaStar />
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RecentReviews