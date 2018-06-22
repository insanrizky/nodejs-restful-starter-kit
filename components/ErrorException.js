export default class ErrorExeption {
    constructor(res, msg, code) {
        const data = {
            error: code, message: msg
        };
        return res.status(code).json(data);
    }
}
