/**
 * Creates an object of faked versions of the key/value pairs returned in URL params
 * from a successful Google OAuth authentication.
 *
 * @param {Object} [overrides] - Values to override the default test OAuth params
 *
 * @returns {Object} - The mock Google OAuth params.
 */
export const createOAuthParams = (overrides = {}) => {
  return {
    code: "auth-code-123",
    scope: "https://google.com/myactivity.youtube",
    state: JSON.stringify({
      external_id: "test-external-id",
      show_insights: true,
    }),
    ...overrides,
  };
};

/**
 * Creates a mocked version of the `searchParams` returned by React Router's
 * useSearchParams hook. This mock implements the `.get` method on this object.
 *
 * @param {Object} mockParams - Key/value pairs representing mocked URL params.
 *
 * @returns {Object} - The mocked `searchParams` object
 */
export const createMockSearchParams = (mockParams) => {
  const mockSearchParams = {
    get: (param) => {
      if (mockParams.hasOwnProperty(param)) return mockParams[param];
      return null;
    },
  };
  return mockSearchParams;
};
