import { Link } from 'react-router-dom'
import { memberData } from '../../data'

const RecentPatients = () => {
    return (
        <div className="bg-white rounded-xl border-[1px] border-border p-5 xl:mt-6">
            <h2 className="text-sm font-medium">Recent Patients</h2>
            {memberData.slice(3, 8).map((member, index) => (
                <Link
                    to={`/patients/preview/${member.id}`}
                    key={index}
                    className="flex-btn gap-4 mt-6 border-b pb-4 border-border"
                >
                    <div className="flex gap-4 items-center">
                        <img
                            src={member.image}
                            alt="member"
                            className="w-10 h-10 rounded-md object-cover"
                        />
                        <div className="flex flex-col gap-1">
                            <h3 className="text-xs font-medium">{member.title}</h3>
                            <p className="text-xs text-gray-400">{member.phone}</p>
                        </div>
                    </div>
                    <p className="text-xs text-textGray">2:00 PM</p>
                </Link>
            ))}
        </div>
    )
}

export default RecentPatients