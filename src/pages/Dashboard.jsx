import {
} from 'react-icons/bs';

import AreaChart from '../components/charts/AreaChart';

import {
} from '../data';

import TopCards from '../views/dashboard/TopCards';
import Banner from '../views/dashboard/Banner';
import RecentTransactions from '../views/dashboard/RecentTransactions';
import RecentReviews from '../views/dashboard/RecentReviews';
import RecentPatients from '../views/dashboard/RecentPatients';
import TodayAppointments from '../views/dashboard/TodayAppointments';

function Dashboard() {
  return (
    <>
      {/* boxes */}
      < TopCards />
      <div className="w-full my-6 grid xl:grid-cols-8 grid-cols-1 gap-6">
        <div className="xl:col-span-6  w-full">
          {/* eye banner */}
          <Banner />
          <div className="mt-6 bg-white rounded-xl border-[1px] border-border p-5">
            <div className="flex-btn gap-2">
              <h2 className="text-sm font-medium">Earning Reports</h2>
              <p className="flex gap-4 text-sm items-center">
                5.44%{' '}
                <span className="py-1 px-2 bg-subMain text-white text-xs rounded-xl">
                  +2.4%
                </span>
              </p>
            </div>
            {/* Earning Reports */}
            <div className="mt-4">
              <AreaChart />
            </div>
          </div>
          {/* transaction */}
          <RecentTransactions />
        </div>
        {/* side 2 */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="10"
          data-aos-offset="200"
          className="xl:col-span-2 xl:block grid sm:grid-cols-2 gap-6"
        >
          <RecentReviews />
          <RecentPatients />
          <TodayAppointments />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
