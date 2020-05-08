import produce from 'immer';

const INITIAL_STATE = {
  open: false,
  order: null,
};

export default function modal(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@modal/OPEN_MODAL': {
        draft.open = true;
        draft.order = action.payload.order;
        break;
      }
      case '@modal/CLOSE_MODAL': {
        draft.open = false;
        draft.order = null;
        break;
      }
      default:
    }
  });
}
