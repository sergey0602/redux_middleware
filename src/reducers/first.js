import { FIRST_SUCCESS, FIRST_FAIL } from '../action_creators/actions';

const initialState = {
  data: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FIRST_SUCCESS:
      return { ...state, data: action.payload };

    case FIRST_FAIL:
      return { ...state, data: ['Данные загрузились с ошибкой'] }

    default:
      return state;
  }
}
