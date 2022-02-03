import { takeLatest, put, call } from "redux-saga/effects";
import { FETCH_CATALOG_ACTION, catalogLoadingEffect, fetchCatalogsEffect } from "./catalog-actions";
import { queryCatalogs } from '../../services/catalog-service';

function* fetchCatalogs() {
  try {
    yield put(catalogLoadingEffect(true));
    const resp = yield call(queryCatalogs);
    const catalogs = resp.data?.data?.posts?.data || [];
    yield put(catalogLoadingEffect(false));
    yield put(fetchCatalogsEffect(catalogs));
  } catch (err) {
    yield put(catalogLoadingEffect(false));
  }
}

function* catalogSaga() {
  yield takeLatest(FETCH_CATALOG_ACTION, fetchCatalogs);
}

export default catalogSaga;