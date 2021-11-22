import * as mysql from 'mysql';
import config from '../../server/config';

//table query imports
import blogs from './queries/blogs';
import users from './queries/users';

export const Connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'blogguser',
    password: 'password',
    database: 'blog'
});


export const Query = (query: string, values?: Array<string | number>) => {
    return new Promise<Array<any>>((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if(err) return reject(err);
            return resolve(results);
        });
    });
}

export default {
    blogs, 
    users
}