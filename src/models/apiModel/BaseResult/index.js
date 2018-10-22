import Result from "../Result";

export default class BaseResult extends Result{
    constructor(resultCode, message, isError, data){
        super(resultCode, message, isError)
        this.data = data;
    }
}
