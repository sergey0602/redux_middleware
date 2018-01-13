import {
  FIRST_SUCCESS,
  FIRST_FAIL,
  SECOND_SUCCESS,
  SECOND_FAIL
} from '../action_creators/actions';

const initialState = {
  firstData: null,
  secondData: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FIRST_SUCCESS:
      return { ...state, firstData: action.payload };

    case SECOND_SUCCESS:
      return { ...state, secondData: action.payload };

    case FIRST_FAIL:
      return { ...state, firstData: ['Данные загрузились с ошибкой'] }

    case SECOND_FAIL:
      return { ...state, secondData: ['Данные загрузились с ошибкой'] }

    default:
      return state;
  }
}
