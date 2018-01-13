import { SECOND_SUCCESS, SECOND_FAIL } from '../action_creators/actions';

const initialState = {
  data: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SECOND_SUCCESS:
      return { ...state, data: action.payload };

    case SECOND_FAIL:
      return { ...state, data: ['Данные загрузились с ошибкой'] }

    default:
      return state;
  }
}
