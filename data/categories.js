import { URL_API } from '../constants/DataBase';

export const CATEGORIES = async () => {
  fetch(`${URL_API}/categories.json`)
    .then((response) => response.json())
    .then((json) => {
      return json;
    });
};

/*
export const CATEGORIES = [
  {
    id: 1,
    title: 'perfec',
  },
  {
    id: 2,
    title: 'maome',
  },
  {
    id: 3,
    title: 'puraso',
  },
  {
    id: 4,
    title: 'cheto',
  },
];
*/
