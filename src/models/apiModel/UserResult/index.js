import  Result from "../Result";

export default class User extends Result{
    constructor(resultCode, message, isError, user, accessToken) {
        super(resultCode, message, isError);
        this.user = user;
        this.accessToken = accessToken
    }
}