import * as services from '../api/index';

// eslint-disable-next-line
export default {
  namespace: 'home',
  state: {
    menuList: []
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload }
    }
  },
  effects: {
    // eslint-disable-next-line
    * fetchMenu({ payload: { } }, { call, put }) {
      var menuList = yield call(services.getAllMenu);
      console.log(menuList);
      yield put({ type: "save", payload: { menuList: menuList.data.data } });

    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen((location) => {
        console.log(location);
        dispatch({ type: "fetchMenu", payload: {} });
      })
    }
  }
}