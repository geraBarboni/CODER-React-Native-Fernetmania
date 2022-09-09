import {
  ADD_PUBLICATION,
  LOAD_PUBLICATION,
} from '../actions/publication.action';

const initialState = {
  publications: [],
};

const publicationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PUBLICATION:
      return {
        ...state,
        publications: [...state.publications, action.publication],
      };
    case LOAD_PUBLICATION:
      return {
        ...state,
        publications: action.publications,
        /*
        .map((item) => ({
          id: item.id,
          desc: item.desc,
          autor: item.autor,
          name: item.name,
          uri: item.uri,
          ubication: item.ubication,
        })),
        */
      };
    default:
      return state;
  }
};

export default publicationsReducer;
