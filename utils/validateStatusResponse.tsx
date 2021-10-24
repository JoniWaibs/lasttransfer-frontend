
/**
 * Validate statusCode to build Alerts
 * @param statusCode
 * @returns Boolean
 */
export const validateStatusResponse = (statusCode: number): boolean => {
  if(Number(statusCode) >= 200 && Number(statusCode) <= 299) {
    return true
  };
  return false;
}
