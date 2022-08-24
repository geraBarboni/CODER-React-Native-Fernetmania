import { ADD_PUBLICATION } from '../actions/publication.action';

const initialState = {
  publications: [],
};

const publicationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PUBLICATION:
      console.log(action.publication);
      console.log(state.publications);
      return {
        ...state,
        publications: [...state.publications, action.publication],
      };
    default:
      return state;
  }
};

export default publicationsReducer;
