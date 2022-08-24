import { URL_API } from '../../constants/DataBase';

export const SELECT_FERNET = 'SELECTED_FERNET';

export const selectFernet = (id) => {
  console.log('id del fernet seleccionado: ', id);
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}fernets/${id}.json`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      const fernet = result;
      dispatch({ type: SELECT_FERNET, payload: fernet });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const filteredFernet = (id) => {
  console.log(id);
};
