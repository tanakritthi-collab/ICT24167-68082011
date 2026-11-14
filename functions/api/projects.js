/**
 * Cloudflare Pages Functions - REST API for Projects
 * Endpoint: /api/projects
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
      "SELECT * FROM projects ORDER BY created_at DESC"
    ).all();

    // Parse JSON tags
    const projects = results.map(row => ({
      ...row,
      tags: row.tags ? JSON.parse(row.tags) : []
    }));

    return new Response(JSON.stringify(projects), {
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
    const id = body.id || `proj-${Date.now()}`;
    const tagsJson = JSON.stringify(body.tags || []);

    await env.DB.prepare(
      `INSERT INTO projects (id, title_th, title_en, category, description_th, description_en, tags, demo_url, github_url, image_url)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      id,
      body.titleTh || body.title_th,
      body.titleEn || body.title_en,
      body.category || 'Full-Stack',
      body.descriptionTh || body.description_th,
      body.descriptionEn || body.description_en,
      tagsJson,
      body.demoUrl || body.demo_url,
      body.githubUrl || body.github_url,
      body.imageUrl || body.image_url
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
      return new Response(JSON.stringify({ error: "Project ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const tagsJson = JSON.stringify(body.tags || []);

    await env.DB.prepare(
      `UPDATE projects 
       SET title_th = ?, title_en = ?, category = ?, description_th = ?, description_en = ?, tags = ?, demo_url = ?, github_url = ?, image_url = ?, updated_at = CURRENT_TIMESTAMP
       WHERE id = ?`
    ).bind(
      body.titleTh || body.title_th,
      body.titleEn || body.title_en,
      body.category,
      body.descriptionTh || body.description_th,
      body.descriptionEn || body.description_en,
      tagsJson,
      body.demoUrl || body.demo_url,
      body.githubUrl || body.github_url,
      body.imageUrl || body.image_url,
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
      return new Response(JSON.stringify({ error: "Project ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    await env.DB.prepare("DELETE FROM projects WHERE id = ?").bind(id).run();

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
