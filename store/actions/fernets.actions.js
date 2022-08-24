import { URL_API } from '../../constants/DataBase';

export const FERNETS = 'FERNETS';

export const getFernets = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}fernets.json`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      const fernets = result;
      dispatch({ type: FERNETS, payload: fernets });
    } catch (error) {
      console.log(error.message);
    }
  };
};
