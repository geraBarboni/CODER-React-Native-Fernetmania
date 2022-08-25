import { URL_API } from '../../constants/DataBase';

import { insertPublication, fetchPublication } from '../../db';

export const ADD_PUBLICATION = 'ADD_PUBLICATION';
export const LOAD_PUBLICATION = 'LOAD_PUBLICATION';

export const addPlublication = (publication) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}fernets/${publication.id}.json`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(publication),
      });
      console.log('ESTO SE SUBIO A FIREBASE: ', response);

      const result = await insertPublication(
        publication.id,
        publication.desc,
        publication.autor,
        publication.name,
        publication.uri,
        publication.ubication
      );

      dispatch({
        type: ADD_PUBLICATION,
        publication: {
          id: result.id,
          desc: result.desc,
          autor: result.autor,
          name: result.name,
          uri: result.uri,
          ubication: result.ubication,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const loadPublication = () => {
  return async (dispatch) => {
    try {
      const result = await fetchPublication();
      console.log('esto tendria que cargar las publicaciones', result);
      const publicationsArray = result.rows._array;
      dispatch({ type: LOAD_PUBLICATION, publications: publicationsArray });
    } catch (error) {
      console.log('fallo el loadPublication ACTION: ', error.message);
      throw error;
    }
  };
};
