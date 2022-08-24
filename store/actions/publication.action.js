import * as FileSystem from 'expo-file-system';
import { URL_API } from '../../constants/DataBase';

export const ADD_PUBLICATION = 'ADD_PUBLICATION';

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
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return function (dispatch) {
    console.log('desde el action: ', publication);
    return dispatch({
      type: ADD_PUBLICATION,
      publication: publication,
    });
  };

  /*
  curl -X PUT -d '{ "first": "Jack", "last": "Sparrow" }' \
  'https://[PROJECT_ID].firebaseio.com/users/jack/name.json'


  /*
  return async (dispatch) => {
    const fileName = publication.image.split('/').pop();
    const Path = FileSystem.documentDirectory + fileName;
    try {
      await FileSystem.moveAsync({
        from: image,
        to: Path,
      });
    } catch (error) {
      console.log(error.message);
      throw error;
    }
    dispatch({
      type: ADD_PLACE,
      payload: {
        id,
        category,
        desc,
        autor,
        name,
        uri: Path,
        ubication: {
          name: action.payload.address,
          lat: action.payload.lat,
          lng: action.payload.lng,
        },
      },
    });
  };
  */
};
