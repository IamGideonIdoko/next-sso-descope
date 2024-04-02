import { authMiddleware } from "@descope/nextjs-sdk/server";

export default authMiddleware({
  // The Descope project ID to use for authentication
  projectId: process.env.NEXT_PUBLIC_DESCOPE_PROJECT_ID,
  // The URL to redirect to if the user is not authenticated
  redirectUrl: "/login",
  // An array of public routes that do not require authentication
  publicRoutes: ["/", "/login"],
});

export const config = {
  matcher: ["/", "/login", "/dashboard"],
};
