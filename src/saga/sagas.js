import "regenerator-runtime/runtime"
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function* fetchUser(action) {
   try {
      const json = yield fetch('https://photos.casata.md/json.php').then(res=>res.json())
      yield put({type: "MARKERS_FETCH_SUCCEEDED", payload: json});
   } catch (e) {
      yield put({type: "MARKERS_FETCH_FAILED", message: e.message});
   }
}

function* requestPosition() {
   // yield put({type: "MARKERS_FETCH_REQUEST"});
}

function* takePositions() {
    yield takeLatest("MARKERS_FETCH_REQUEST", fetchUser)
}

export default function* rootSaga() {
  yield all([
    requestPosition(),
    takePositions()
    ]);
}
