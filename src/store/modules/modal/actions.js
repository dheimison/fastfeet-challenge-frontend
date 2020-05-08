export function openModal(order) {
  return {
    type: '@modal/OPEN_MODAL',
    payload: { order },
  };
}

export function closeModal() {
  return {
    type: '@modal/CLOSE_MODAL',
  };
}
