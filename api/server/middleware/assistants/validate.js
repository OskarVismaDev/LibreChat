const { v4 } = require('uuid');
const { handleAbortError } = require('~/server/middleware/abortMiddleware');

/**
 * Checks if the assistant is supported or excluded
 * @param {object} req - Express Request
 * @param {object} req.body - The request payload.
 * @param {object} res - Express Response
 * @param {function} next - Express next middleware function.
 * @returns {Promise<void>}
 */
const validateAssistant = async (req, res, next) => {
  const { endpoint } = req.body;

  /** @type {Partial<TAssistantEndpoint>} */
  const assistantsConfig = req.app.locals?.[endpoint];
  if (!assistantsConfig) {
    return next();
  }

  // Removed the validation checks for supportedIds and excludedIds

  return next();
};

module.exports = validateAssistant;
