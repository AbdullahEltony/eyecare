import React from 'react';
import { patientTab } from '../../data';
import { Link } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';
import MedicalRecord from '../../views/patient/MedicalRecord';
import AppointmentsUsed from '../../components/common/AppointmentsUsed';
import InvoiceUsed from '../../components/common/InvoiceUsed';
import PaymentsUsed from '../../components/common/PaymentsUsed';
import PersonalInfo from '../../components/common/PersonalInfo';
import PatientImages from '../../views/patient/PatientImages';
import HealthInformation from '../../views/patient/HealthInformation';
import DentalChart from '../../views/patient/DentalChart';
import ProfileImg from '../../assets/profile-img.png';

function PreviewPatient() {
  const [activeTab, setActiveTab] = React.useState(1);

  const tabPanel = () => {
    switch (activeTab) {
      case 1:
        return <MedicalRecord />;
      case 2:
        return <AppointmentsUsed doctor={false} />;
      case 3:
        return <InvoiceUsed />;
      case 4:
        return <PaymentsUsed doctor={false} />;
      case 5:
        return <PatientImages />;
      case 6:
        return <DentalChart />;
      case 7:
        return <PersonalInfo titles={false} />;
      case 8:
        return <HealthInformation />;
      default:
        return;
    }
  };

  return (
    <>
      <div className="flex items-center gap-4">
        <Link
          to="/patients"
          className="bg-white border border-subMain border-dashed rounded-lg py-3 px-4 text-md"
        >
          <IoArrowBackOutline />
        </Link>
        <h1 className="text-xl font-semibold">Amani Mmassy</h1>
      </div>
      <div className=" grid grid-cols-12 gap-6 my-8 items-start">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-offset="200"
          className="col-span-12 flex-colo gap-6 lg:col-span-4 bg-white rounded-xl border-[1px] border-border p-6 lg:sticky top-28"
        >
          <img
            src={ProfileImg}
            alt="setting"
            className="w-40 h-40 rounded-full object-cover border border-dashed border-subMain"
          />
          <div className="gap-2 flex-colo">
            <h2 className="text-sm font-semibold">Amani Mmassy</h2>
            <p className="text-xs text-textGray">amanimmassy@gmail.com</p>
            <p className="text-xs">+254 712 345 678</p>
          </div>
          {/* tabs */}
          <div className="flex-colo gap-3 px-2 xl:px-12 w-full">
            {patientTab.map((tab, index) => (
              <button
                onClick={() => setActiveTab(tab.id)}
                key={index}
                className={`
                ${activeTab === tab.id
                    ? 'bg-text text-subMain'
                    : 'bg-dry text-main hover:bg-text hover:text-subMain'
                  }
                text-xs gap-4 flex items-center w-full p-4 rounded`}
              >
                <tab.icon className="text-lg" /> {tab.title}
              </button>
            ))}
          </div>
        </div>
        {/* tab panel */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-offset="200"
          className="col-span-12 lg:col-span-8 bg-white rounded-xl border-[1px] border-border p-6"
        >
          {tabPanel()}
        </div>
      </div>
    </>
  );
}

export default PreviewPatient;
