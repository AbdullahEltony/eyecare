import { useState } from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { Button, Checkbox, Select, Textarea } from '../../components/Form';
import { BiChevronDown, BiPlus } from 'react-icons/bi';
import ProfileImg from '../../assets/profile-img.png';
import {
  medicineData,
  memberData,
  patientImages,
  servicesData,
} from '../../data';
import { MedicineDosageTable } from '../../components/ui/tables';
import MedicineDosageModal from '../../components/ui/modals/MedicineDosageModal';
import { FaTimes } from 'react-icons/fa';
import Uploader from '../../components/Uploader';
import { HiOutlineCheckCircle } from 'react-icons/hi';

const doctorsData = memberData.map((item) => {
  return {
    id: item.id,
    name: item.title,
  };
});
function NewMedicalRecode() {
  const [doctors, setDoctors] = useState(doctorsData[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [treatmeants, setTreatmeants] = useState(
    servicesData.map((item) => {
      return {
        name: item.name,
        checked: false,
        price: item.price,
      };
    })
  );

  // on change treatmeants
  const onChangeTreatmeants = (e) => {
    const { name, checked } = e.target;
    const newTreatmeants = treatmeants.map((item) => {
      if (item.name === name) {
        return {
          ...item,
          checked: checked,
        };
      }
      return item;
    });
    setTreatmeants(newTreatmeants);
  };

  return (
    <>
      {
        // modal
        isOpen && (
          <MedicineDosageModal
            isOpen={isOpen}
            closeModal={() => {
              setIsOpen(false);
            }}
          />
        )
      }
      <div className="flex items-center gap-4">
        <button
          onClick={() => history.back()}
          className="bg-white border border-subMain border-dashed rounded-lg py-3 px-4 text-md"
        >
          <IoArrowBackOutline />
        </button>
        <h1 className="text-xl font-semibold">New Medical Record</h1>
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
            <p className="text-xs text-subMain bg-text font-medium py-1 px-4 rounded-full border-[0.5px] border-subMain">
              45 yrs{' '}
            </p>
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
          <div className="flex w-full flex-col gap-5">
            {/* doctor */}
            <div className="flex w-full flex-col gap-3">
              <p className="text-black text-sm">Doctor</p>
              <Select
                selectedPerson={doctors}
                setSelectedPerson={setDoctors}
                datas={doctorsData}
              >
                <div className="w-full flex-btn text-textGray text-sm p-4 border border-border font-light rounded-lg focus:border focus:border-subMain">
                  {doctors.name} <BiChevronDown className="text-xl" />
                </div>
              </Select>
            </div>
            {/* complains */}
            <Textarea
              label="Complains"
              color={true}
              rows={3}
              placeholder={'Sudden loss of vision,Red eyes ....'}
            />
            {/* Diagnosis */}
            <Textarea
              label="Diagnosis"
              color={true}
              rows={3}
              placeholder={'High blood pressure, Diabetes ....'}
            />
            {/* Vital Signs */}
            <Textarea
              label="Vital Signs"
              color={true}
              rows={3}
              placeholder={'Blood pressure, Pulse, ....'}
            />
            {/* Treatment */}
            <div className="flex w-full flex-col gap-4">
              <p className="text-black text-sm">Treatment</p>
              <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-6 pb-6">
                {servicesData?.slice(1, 100).map((item) => (
                  <Checkbox
                    label={item.name}
                    checked={
                      treatmeants.find((i) => i.name === item.name).checked
                    }
                    onChange={onChangeTreatmeants}
                    name={item.name}
                    key={item.id}
                  />
                ))}
              </div>
            </div>
            {/* medicine */}
            <div className="flex w-full flex-col gap-4 mb-6">
              <p className="text-black text-sm">Medicine</p>
              <div className="w-full overflow-x-scroll">
                <MedicineDosageTable
                  data={medicineData?.slice(0, 3)}
                  functions={{}}
                  button={true}
                />
              </div>
              <button
                onClick={() => {
                  setIsOpen(true);
                }}
                className=" text-subMain flex-rows gap-2 rounded-lg border border-subMain border-dashed py-4 w-full text-sm"
              >
                <BiPlus /> Add Medicine
              </button>
            </div>
            {/* attachment */}
            <div className="flex w-full flex-col gap-4">
              <p className="text-black text-sm">Attachments</p>
              <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
                {patientImages?.slice(0, 4)?.map((image, i) => (
                  <div key={i} className="relative w-full">
                    <img
                      src={image}
                      alt="patient"
                      className="w-full  md:h-40 rounded-lg object-cover"
                    />
                    <button
                      onClick={() => { }}
                      className="bg-white rounded-full w-8 h-8 flex-colo absolute -top-1 -right-1"
                    >
                      <FaTimes className="text-red-500" />
                    </button>
                  </div>
                ))}
              </div>
              <Uploader setImage={{}} />
            </div>
            {/* submit */}
            <Button
              label={'Save'}
              Icon={HiOutlineCheckCircle}
              onClick={() => { }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NewMedicalRecode;
