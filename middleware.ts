import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Public rotaları belirliyoruz
const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);

export default clerkMiddleware(async (auth, request) => {
  // Eğer public route değilse, auth koruması ekleyin
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Next.js içsel dosyalarını ve statik dosyaları koruma dışı bırakıyoruz
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // API rotalarını her zaman koruma altına alın
    "/(api|trpc)(.*)",
    // Ana rotayı ve onun alt rotalarını middleware'den hariç tutun
    "/",
    "/[[...rest]]", // Catch-all rotaları hariç tut
  ],
};
