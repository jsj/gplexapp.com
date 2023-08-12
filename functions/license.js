export function onRequest(context) {
    const destinationURL = "https://opensource.org/licenses/mit";
    const statusCode = 301;
    return Response.redirect(destinationURL, statusCode);
}