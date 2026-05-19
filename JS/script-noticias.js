const lista_noticias = document.querySelector('#lista-noticias');

// --- Consulta DataJud: UI + chamadas ao proxy ----------------------------
function renderConsultaForm() {
    const campo = document.getElementById('campo-noticias');
    if (!campo) return;

    // criar área de consulta no topo da seção
    const consultaHtml = `
        <div id="datajud-consulta" style="margin-bottom:18px;padding:12px;border:1px solid #e6e6e6;border-radius:8px;background:#fff;color:#111;">
            <h3 style="margin:0 0 8px 0;color:inherit;font-size:18px;">Consultar processo (DataJud)</h3>
            <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
                <input id="input-numero" placeholder="Número do processo (CNJ)" style="flex:1;padding:8px;border:1px solid #ccc;border-radius:6px" />
                <select id="select-tribunal" style="padding:8px;border:1px solid #ccc;border-radius:6px">
                    <option value="tjms" selected>TJMS</option>
                    <option value="tjsp">TJSP</option>
                    <option value="tjrj">TJRJ</option>
                    <option value="trf1">TRF1</option>
                </select>
                <button id="btn-consultar-datajud" style="padding:8px 12px;border-radius:6px;background:#3b82f6;color:#fff;border:none;cursor:pointer">Consultar</button>
            </div>
            <div id="datajud-result" style="margin-top:12px"></div>
        </div>`;

    // inserir antes da lista de noticias
    lista_noticias.insertAdjacentHTML('beforebegin', consultaHtml);

    document.getElementById('btn-consultar-datajud').addEventListener('click', consultarProcesso);
    document.getElementById('input-numero').addEventListener('keydown', (e) => { if (e.key === 'Enter') consultarProcesso(); });
}

async function consultarProcesso() {
    const numero = document.getElementById('input-numero').value.trim();
    const tribunal = document.getElementById('select-tribunal').value || 'tjms';
    const resultEl = document.getElementById('datajud-result');
    if (!numero) { resultEl.innerHTML = `<div style="color:#b91c1c">Informe o número do processo.</div>`; return; }

    resultEl.innerHTML = `<div style="color:#0ea5e9">Consultando DataJud...</div>`;

    try {
        const resp = await fetch('/.netlify/functions/datajud-proxy', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ numero, tribunal })
        });

        if (!resp.ok) {
            const err = await resp.json().catch(() => ({}));
            resultEl.innerHTML = `<div style="color:#b91c1c">Erro: ${err.error || resp.statusText}</div>`;
            return;
        }

        const data = await resp.json();

        // Normaliza possíveis formatos de retorno
        let items = [];
        if (data.hits && data.hits.hits) items = data.hits.hits.map(h => h._source || h);
        else if (data.processos) items = data.processos;
        else if (data.total && data.processos === undefined && data.hits === undefined) items = [data];

        if (!items || items.length === 0) {
            resultEl.innerHTML = `<div>Nenhum processo encontrado.</div>`;
            return;
        }

        // Mostrar primeiro processo (ou todos, se preferir)
        const p = items[0];
        const numeroProc = p.numeroProcesso || p.numero || '—';
        const classe = p.classe?.nome || p.classe || p.classeProcessual || '—';
        const orgao = p.orgaoJulgador?.nome || p.orgaoJulgador || p.orgao || '—';
        const dataAtual = p.dataHoraUltimaAtualizacao || p.dataUltimaMovimentacao || '';
        const movs = p.movimentos || p.movimentacoes || p.movimentos || [];

        const movHtml = (movs.slice ? movs.slice(0,5) : []).map(m => {
            const d = m.dataHora || m.data || m.dataHoraUltimaAtualizacao || '';
            const desc = m.nome || m.descricao || m.descricaoMovimento || JSON.stringify(m).slice(0,120);
            return `<div style="padding:6px 0;border-bottom:1px solid #eee"><strong style="display:block">${d || '—'}</strong><div style="color:#333">${desc}</div></div>`;
        }).join('');

        resultEl.innerHTML = `
            <div style="padding:12px;border:1px solid #e6e6e6;border-radius:6px;background:#fafafa;color:#111">
                <div style="font-weight:600;margin-bottom:6px">${numeroProc} • ${tribunal.toUpperCase()}</div>
                <div style="margin-bottom:6px">Classe: <strong>${classe}</strong></div>
                <div style="margin-bottom:6px">Órgão: <strong>${orgao}</strong></div>
                <div style="margin-bottom:8px">Última atualização: <strong>${dataAtual || '—'}</strong></div>
                <div style="margin-top:8px"><div style="font-weight:600;margin-bottom:6px">Movimentações (últimas)</div>${movHtml || '<div>Nenhuma movimentação pública disponível.</div>'}</div>
            </div>`;

    } catch (err) {
        console.error(err);
        resultEl.innerHTML = `<div style="color:#b91c1c">Erro na consulta: ${err.message}</div>`;
    }
}

// Inicialização
window.onload = () => { renderConsultaForm(); };
