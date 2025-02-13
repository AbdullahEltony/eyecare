/* eslint-disable react/prop-types */
import { transactionData } from '../../data';
import { PaymentTable } from '../ui/tables';
import { useNavigate } from 'react-router-dom';

function PaymentsUsed({ doctor }) {
  const navigate = useNavigate();
  // onClick event handler
  const handleEventClick = (id) => {
    navigate(`/payments/preview/${id}`);
  };
  return (
    <div className="w-full">
      <h1 className="text-sm font-medium mb-6">Payments</h1>
      <div className="w-full overflow-x-scroll">
        <PaymentTable
          data={transactionData}
          doctor={doctor}
          functions={{
            preview: handleEventClick,
          }}
        />
      </div>
    </div>
  );
}

export default PaymentsUsed;
