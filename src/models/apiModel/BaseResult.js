export default class BaseResult{
    constructor(resultCode, message, data){
        this.resultCode = resultCode;
        this.message = message;
        this.data = data;
    }
}
