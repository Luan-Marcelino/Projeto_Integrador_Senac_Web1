// Netlify Function: datajud-proxy
// Proxy to DataJud public API. Accepts POST JSON { numero, tribunal }
// Returns DataJud response. Set environment variables in Netlify:
// DATAJUD_BASE (optional) and DATAJUD_API_KEY (recommended)

const DATAJUD_BASE = process.env.DATAJUD_BASE || 'https://api-publica.datajud.cnj.jus.br';
const API_KEY = process.env.DATAJUD_API_KEY || 'cDZHYzlZa0JadVREZDJCendQbXY6SkJlTzNjLV9TRENyQk1RdnFKZGRQdw==';

exports.handler = async (event) => {
  try {
    if (event.httpMethod === 'OPTIONS') {
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: ''
      };
    }

    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        headers: {
          'Allow': 'POST, OPTIONS',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: 'Use POST with JSON body { numero, tribunal }' }),
      };
    }

    const body = event.body ? JSON.parse(event.body) : {};
    const numero = (body.numero || '').toString().trim();
    const tribunal = (body.tribunal || 'tjms').toString().toLowerCase().trim();

    if (!numero) {
      return {
        statusCode: 400,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: 'Campo "numero" é obrigatório.' }),
      };
    }

    // Build endpoint name. consulta-tjms uses endpoints like api_publica_tjms
    const endpoint = `api_publica_${tribunal}`;
    const url = `${DATAJUD_BASE}/${endpoint}/_search`;

    const numeroLimpo = numero.replace(/[^0-9]/g, '');
    const fetchBody = { query: { match: { numeroProcesso: numeroLimpo } } };

    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `APIKey ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fetchBody),
    });

    const text = await resp.text();
    let data = null;
    try { data = JSON.parse(text); } catch { data = text; }

    if (!resp.ok) {
      return {
        statusCode: resp.status || 502,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: 'DataJud error', detail: data }),
      };
    }

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: err.message }),
    };
  }
};
