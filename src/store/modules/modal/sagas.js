import { takeLatest, put, all } from 'redux-saga/effects';
import { format, parseISO, isValid } from 'date-fns';

import { openModalSuccess } from './actions';

export function* openModal({ payload }) {
  if (payload.order.start_date && isValid(parseISO(payload.order.end_date))) {
    const dateFormatted = format(
      parseISO(payload.order.end_date),
      'MM/dd/yyyy'
    );
    payload.order.end_date = dateFormatted;
  }

  if (payload.order.end_date && isValid(parseISO(payload.order.end_date))) {
    const dateFormatted = format(
      parseISO(payload.order.end_date),
      'MM/dd/yyyy'
    );

    payload.order.end_date = dateFormatted;
  }

  yield put(openModalSuccess(payload.order));
}

export default all([takeLatest('@modal/OPEN_MODAL_REQUEST', openModal)]);
