class ResponseHelper {
  constructor(code, status, result) {
    this.code = code;
    this.status = status;
    this.result = result;
  }
}

const responseHelper = (res, code, status, result) => {
  res.status(code).send(new ResponseHelper(code, status, result));
}
module.exports = responseHelper;
