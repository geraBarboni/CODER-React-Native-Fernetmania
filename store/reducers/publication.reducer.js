import { ADD_PUBLICATION } from '../actions/publication.action';

// models
import Publication from '../../models/Publication';

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

/*
      const newPublication = {
        id: action.payload.id,
        category: action.payload.category,
        desc: action.payload.desc,
        autor: action.payload.autor,
        name: action.payload.title,
        uri: action.payload.image,
        ubication: action.payload.ubication,
        
        ubication: {
          name: action.payload.address,
          lat: action.payload.lat,
          lng: action.payload.lng,
        },
        

*/
