/**
 * Cloudflare Pages Functions - Asset Upload (Images & PDFs)
 * Endpoint: /api/upload
 * Connects with Cloudflare R2 Bucket binding 'PORTFOLIO_ASSETS'
 */

export async function onRequestPost({ request, env }) {
  try {
    if (!env.PORTFOLIO_ASSETS) {
      return new Response(JSON.stringify({ 
        error: "Cloudflare R2 binding 'PORTFOLIO_ASSETS' not configured. Local fallback active." 
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    const contentType = request.headers.get("content-type") || "";

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      const file = formData.get("file");

      if (!file || typeof file === "string") {
        return new Response(JSON.stringify({ error: "No file provided" }), {
          status: 400,
          headers: { "Content-Type": "application/json" }
        });
      }

      // Generate unique key
      const timestamp = Date.now();
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
      const key = `${timestamp}-${safeName}`;

      // Upload directly into R2
      await env.PORTFOLIO_ASSETS.put(key, file.stream(), {
        httpMetadata: {
          contentType: file.type
        }
      });

      const publicUrl = `/api/assets/${key}`;

      return new Response(JSON.stringify({
        success: true,
        key,
        filename: file.name,
        type: file.type,
        size: file.size,
        url: publicUrl
      }), {
        status: 201,
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify({ error: "Expected multipart/form-data" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
