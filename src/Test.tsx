import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from './store/store';

export function Test() {
  const dummy = useSelector((state: RootState) => state.dummy);
  const dispatch: AppDispatch = useDispatch();

  return <div>{JSON.stringify(dummy)}</div>;
}
