class BadRequestError extends Error {
    constructor(statusCode, message){
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}


class errorHandler{
    constructor(){
        this.handleError = (error, responseStream = null) =>{
            if(responseStream) {
                responseStream.status(error.statusCode || 500).json({
                    message: error.message || "Internal sever Error",
                });
            }else {
                console.log(error);
            }
        };
    }
}

module.exports ={
    BadRequestError, 
    errorHandler: new errorHandler(),
};