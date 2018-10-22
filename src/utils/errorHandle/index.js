import { Result } from "../../models/apiModel";

export function errorHandlerTopLevel(err, req, res, next) {
    if (typeof (err) === 'string') {
        // custom application error
        return res.status(400).json({ message: err });
    }

    if (err.name === 'UnauthorizedError') {
        // jwt authentication error
        return res.status(401).json(new Result(401, "Unauthorized", true));
    }

    // default to 500 server error
    return res.status(500).json({ message: err.message });
}

export function catchEx(err, res){
    res.send(200).json(err)
}