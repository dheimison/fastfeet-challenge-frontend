export function openModalRequest(order) {
  return {
    type: '@modal/OPEN_MODAL_REQUEST',
    payload: { order },
  };
}

export function openModalSuccess(order) {
  return {
    type: '@modal/OPEN_MODAL_SUCCESS',
    payload: { order },
  };
}

export function closeModal() {
  return {
    type: '@modal/CLOSE_MODAL',
  };
}
