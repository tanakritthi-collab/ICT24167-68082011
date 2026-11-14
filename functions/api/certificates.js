/**
 * Cloudflare Pages Functions - REST API for Certifications
 * Endpoint: /api/certificates
 * Connects with Cloudflare D1 Database binding 'DB'
 */

export async function onRequestGet({ env }) {
  try {
    if (!env.DB) {
      return new Response(JSON.stringify({ error: "Cloudflare D1 binding 'DB' not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    const { results } = await env.DB.prepare(
      "SELECT * FROM certificates ORDER BY issue_date DESC"
    ).all();

    return new Response(JSON.stringify(results), {
      status: 200,
      headers: { 
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=60"
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

export async function onRequestPost({ request, env }) {
  try {
    if (!env.DB) {
      return new Response(JSON.stringify({ error: "Cloudflare D1 binding 'DB' not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    const body = await request.json();
    const id = body.id || `cert-${Date.now()}`;

    await env.DB.prepare(
      `INSERT INTO certificates (id, title_th, title_en, issuer_th, issuer_en, issue_date, credential_id, credential_url, pdf_name, pdf_url)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      id,
      body.titleTh || body.title_th,
      body.titleEn || body.title_en,
      body.issuerTh || body.issuer_th,
      body.issuerEn || body.issuer_en,
      body.issueDate || body.issue_date,
      body.credentialId || body.credential_id,
      body.credentialUrl || body.credential_url,
      body.pdfName || body.pdf_name,
      body.pdfUrl || body.pdf_url
    ).run();

    return new Response(JSON.stringify({ success: true, id }), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

export async function onRequestPut({ request, env }) {
  try {
    if (!env.DB) {
      return new Response(JSON.stringify({ error: "Cloudflare D1 binding 'DB' not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    const body = await request.json();
    if (!body.id) {
      return new Response(JSON.stringify({ error: "Certificate ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    await env.DB.prepare(
      `UPDATE certificates 
       SET title_th = ?, title_en = ?, issuer_th = ?, issuer_en = ?, issue_date = ?, credential_id = ?, credential_url = ?, pdf_name = ?, pdf_url = ?, updated_at = CURRENT_TIMESTAMP
       WHERE id = ?`
    ).bind(
      body.titleTh || body.title_th,
      body.titleEn || body.title_en,
      body.issuerTh || body.issuer_th,
      body.issuerEn || body.issuer_en,
      body.issueDate || body.issue_date,
      body.credentialId || body.credential_id,
      body.credentialUrl || body.credential_url,
      body.pdfName || body.pdf_name,
      body.pdfUrl || body.pdf_url,
      body.id
    ).run();

    return new Response(JSON.stringify({ success: true, id: body.id }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

export async function onRequestDelete({ request, env }) {
  try {
    if (!env.DB) {
      return new Response(JSON.stringify({ error: "Cloudflare D1 binding 'DB' not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return new Response(JSON.stringify({ error: "Certificate ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    await env.DB.prepare("DELETE FROM certificates WHERE id = ?").bind(id).run();

    return new Response(JSON.stringify({ success: true, deletedId: id }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
