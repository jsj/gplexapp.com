export function onRequest(context) {
    const appStore = "https://apps.apple.com/us/app/parrotflow/id6450801102?platform=iphone";
    const statusCode = 302;
    return Response.redirect(appStore, statusCode);
}