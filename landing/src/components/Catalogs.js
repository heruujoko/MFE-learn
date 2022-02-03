import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatalogsAction } from '../redux/catalog/catalog-actions';

const Catalogs = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.catalog.loading);
  const catalogs = useSelector(state => state.catalog.catalogs);

  useEffect(() => {
    dispatch(fetchCatalogsAction());
  }, []);

  return (
    <div>
      {loading && <p>loading...</p>}
      {catalogs.map(c => (
        <p key={c.id}>{c.title}</p>
      ))}
    </div>
  )
}

export default Catalogs;