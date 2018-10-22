export default class Result{
    constructor(resultCode, message, isError = true){
        this.resultCode = resultCode;
        this.message = message;
        this.isError = isError
    }
}
