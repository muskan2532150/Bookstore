import { useDispatch, useSelector } from 'react-redux';
import { verifyState } from '../redux/categories/category';

export default function Category() {
  const dispatch = useDispatch();
  const Category = useSelector((state) => state.category);
  return (
    <div className="container">
      <button type="button" onClick={() => dispatch(verifyState())}> Check Status</button>
      <p className="catText">
        {' '}
        {Category}
      </p>
    </div>
  );
}
