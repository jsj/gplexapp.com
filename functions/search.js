export async function onRequest(context) {
    const appStore = "https://www.perplexity.ai/search/?q=whos+the+richest+person+in+the+world";
    const statusCode = 302;
    return Response.redirect(appStore, statusCode);
}
