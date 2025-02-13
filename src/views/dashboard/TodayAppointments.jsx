import { BsCheckCircleFill, BsClockFill, BsXCircleFill } from "react-icons/bs"
import { appointmentsData } from "../../data"
import { Link } from "react-router-dom"

const TodayAppointments = () => {
    return (
        <div className="bg-white rounded-xl border-[1px] border-border p-5 xl:mt-6">
            <h2 className="text-sm mb-4 font-medium">Today Appointments</h2>
            {appointmentsData.map((appointment) => (
                <div
                    key={appointment.id}
                    className="grid grid-cols-12 gap-2 items-center"
                >
                    <p className="text-textGray text-[12px] col-span-3 font-light">
                        {appointment.time}
                    </p>
                    <div className="flex-colo relative col-span-2">
                        <hr className="w-[2px] h-20 bg-border" />
                        <div
                            className={`w-7 h-7 flex-colo text-sm bg-opacity-10
           ${appointment.status === 'Pending' &&
                                'bg-orange-500 text-orange-500'
                                }
          ${appointment.status === 'Cancel' && 'bg-red-500 text-red-500'
                                }
          ${appointment.status === 'Approved' &&
                                'bg-green-500 text-green-500'
                                }
           rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
                        >
                            {appointment.status === 'Pending' && <BsClockFill />}
                            {appointment.status === 'Cancel' && <BsXCircleFill />}
                            {appointment.status === 'Approved' && <BsCheckCircleFill />}
                        </div>
                    </div>
                    <Link
                        to="/appointments"
                        className="flex flex-col gap-1 col-span-6"
                    >
                        <h2 className="text-xs font-medium">
                            {appointment.user?.title}
                        </h2>
                        <p className="text-[12px] font-light text-textGray">
                            {appointment.from} - {appointment.to}
                        </p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default TodayAppointments