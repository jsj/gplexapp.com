export async function onRequest(context) {
    const { request, env } = context;
    const { searchParams } = new URL(request.url)
    let q = searchParams.get('q')
    const url = `https://www.perplexity.ai/search/?q=${encodeURIComponent(q)}`
    return Response.redirect(url, 302);
}
