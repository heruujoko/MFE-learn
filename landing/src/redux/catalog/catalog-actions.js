// @flow
const MODULE = 'landing';
const SEGMENT = 'catalog';

export const INIT = `${MODULE}/${SEGMENT}/INIT`;
export const FETCH_CATALOG_LOADING = `${MODULE}/${SEGMENT}/FETCH_CATALOG_LOADING`;
export const FETCH_CATALOG_ACTION = `${MODULE}/${SEGMENT}/FETCH_CATALOG_ACTION`;
export const FETCH_CATALOG_EFFECT = `${MODULE}/${SEGMENT}/FETCH_CATALOG_EFFECT`;

export const fetchCatalogsAction = () => ({
  type: FETCH_CATALOG_ACTION
});

export const fetchCatalogsEffect = (payload) => ({
  type: FETCH_CATALOG_EFFECT,
  payload,
});

export const catalogLoadingEffect = (payload: boolean) => ({
  type: FETCH_CATALOG_LOADING,
  payload,
});