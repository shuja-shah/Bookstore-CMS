import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../Redux/Categories/categories';

const Catogory = () => {
  const dispatch = useDispatch();

  const handleStatus = () => {
    dispatch(checkStatus());
  };
  const status = useSelector((state) => state.status);
  return (
    <div>
      <button type="submit" className="btn btn-primary" onClick={handleStatus}>Check Status</button>
      <p>{status.currentStatus}</p>
    </div>
  );
};
export default Catogory;
