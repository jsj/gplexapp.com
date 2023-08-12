export function onRequest(context) {
    const destinationURL = "https://www.apple.com/legal/internet-services/itunes/dev/stdeula";
    const statusCode = 301;
    return Response.redirect(destinationURL, statusCode);
}