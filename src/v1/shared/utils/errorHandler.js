const { CelebrateError } = require("celebrate");

const AppError = require("./appError");

module.exports = function errorHandler(error, request, response, _) {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      success: false,
      message: error.message,
    });
  }

  if (error instanceof CelebrateError) {
    const bodyMessage = error.details.get("body")?.message;
    const queryMessage = error.details.get("query")?.message;
    const paramsMessage = error.details.get("params")?.message;

    const message = bodyMessage || queryMessage || paramsMessage;
    console.log(`${message}`);

    return response.status(400).json({
      success: false,
      message,
    });
  }

  console.error(error.message);

  return response.status(500).json({
    success: false,
    message: "Internal server error",
  });
};
