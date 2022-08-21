import { URL_API } from '../../constants/DataBase';

export const CATEGORIES = 'CATEGORIES';

export const getCategories = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}categories.json`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      const categories = Object.keys(result).map((key) => ({
        ...result[key],
        id: key,
      }));
      console.log('categorias desde el action: ', categories);
      dispatch({ type: CATEGORIES, payload: categories });
    } catch (error) {
      console.log(error.message);
    }
  };
};
