import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('publications.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS publications (id INTEGER PRIMARY KEY NOT NULL, desc TEXT NOT NULL,autor TEXT NOT NULL, name TEXT NOT NULL, uri TEXT NOT NULL, ubication TEXT NOT NULL)`,
        [],
        () => {
          resolve();
        },
        (_, err) => {
          console.log('error en db/index.js');
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const insertPublication = (id, desc, autor, name, uri, ubication) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO publications(id, desc, autor, name, uri, ubication) VALUES (?,?,?,?,?,?)`,
        [id, desc, autor, name, uri, ubication],
        (_, result) => {
          resolve(result),
            console.log('EN TEORIA SE SUBIO ALGO NUEVO A LA TABLA');
        },
        (_, err) => {
          reject(err), console.log('claramente no funciono');
        }
      );
    });
  });
  return promise;
};

export const fetchPublication = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM publications`,
        [],
        (_, result) => {
          resolve(result), console.log('en teoria se cargo la tabla');
        },
        (_, err) => {
          reject(err), console.log('no se cargo la tabla');
        }
      );
    });
  });
  return promise;
};
