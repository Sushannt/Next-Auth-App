/**
 * An array of routes accessible to public
 *  @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * An array of routes used for authentication
 * these routes will redirect logged-in users to /settings
 *  @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register"];

/**
 * The prefix of API authentication routes
 * Routes that start with this prefix are use for API authentication purposes
 *  @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 *  @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
