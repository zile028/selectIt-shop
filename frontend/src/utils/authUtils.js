import {LS_USER} from "../config/config";

export class AuthUtils {
    static isLogged = () => localStorage.hasOwnProperty(LS_USER)
}
