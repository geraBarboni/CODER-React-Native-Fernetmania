import { URL_API } from '../../constants/DataBase';

export const SELECT_FERNET = 'SELECTED_FERNET';
export const FILTERED_FERNET = 'FILTERED_FERNET';

export const selectFernet = (id) => ({
  type: SELECT_FERNET,
  fernetID: id,
});

export const filteredFernet = (id) => ({
  type: FILTERED_FERNET,
  categoryID: id,
});
