import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

/*   
Auth Protected untuk masing-masing page
upcoming,previous,recordings,personal-room,meeting
*/
const protectedRoute = createRouteMatcher([
    '/',
    '/upcoming',
    '/previous',
    '/recordings',
    '/personal-room',
    '/meeting(.*)'
   ])

   export default clerkMiddleware(async(auth, req) => {
    if (protectedRoute(req)) await auth.protect();
    });
   

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};

//membuat agar sebelum masuk ke home page, user selalu dikonfirmasi sudah login atau belum