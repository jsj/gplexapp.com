export function onRequest(context) {
    const repo = "https://github.com/jsj/parrotflow";
    const statusCode = 301;
    return Response.redirect(repo, statusCode);
}