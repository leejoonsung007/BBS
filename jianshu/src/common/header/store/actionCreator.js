import * as constants from './constants';
import axios from 'axios'
import { fromJS } from 'immutable';

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUES,
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR,
});

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data;
      dispatch(changeList(data.data));
    }).catch((error) => {
      console.log(error);
    })
  }
}

const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
})
