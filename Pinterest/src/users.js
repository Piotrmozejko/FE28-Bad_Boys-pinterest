//console.log(user_base);

//------------------------------------------------------------------//
//--------------------------------------------------------------------//
import { createLi } from "./func.js";
//--------------------------------------------------------------------//
//--------------------------------------------------------------------//
export function createAllLi(users, desk) {
    users.forEach((users_source) => {
        if (users_source.board === desk) {
            createLi(users_source);
        } else if (users_source.name === desk) {
            createLi(users_source);
        }
    });
}
