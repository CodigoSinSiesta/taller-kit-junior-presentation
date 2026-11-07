/* escalera · peldaños que suben, uno por paso, con el trazo de la escalera dibujándose. Plantilla propia del taller,
   con las convenciones del motor de vídeo. Datos: kicker, title, steps[] = { k, t, s, lit? } (3–5 peldaños). */
TPL.escalera = {
  def: {
    kicker: 'Cómo te acompaña', title: 'Una [[escalera]] de pistas',
    steps: [
      { k: 'Peldaño 1', t: 'Dónde mirar', s: 'El fichero o la función' },
      { k: 'Peldaño 2', t: 'Qué comprobar', s: 'Un valor o un test' },
      { k: 'Peldaño 3', t: 'El concepto', s: 'La idea que te falta' },
      { k: 'Peldaño 4', t: 'Un caso parecido', s: 'Un ejemplo de otro dominio', lit: true },
    ],
    meta: '/pista sube un peldaño. La solución no está en la escalera.',
  },
  html(d, H) {
    const n = d.steps.length;
    const ancho = Math.floor(1680 / n);
    const altoPeldano = Math.floor(350 / n);
    const x = (i) => 120 + i * ancho;
    const y = (i) => 700 - i * altoPeldano;
    const tramos = d.steps.map((_, i) => `<path class="draw" data-i="${i + 1}" d="M${x(i)} ${y(i) + altoPeldano} V${y(i)} H${x(i) + ancho}"/>`).join('');
    const peldanos = d.steps.map((s, i) => `<div class="g${s.lit ? ' lit' : ''} r" data-i="${i + 1}" style="left:${x(i) + 8}px;top:${y(i) + 16}px;width:${ancho - 16}px;height:${980 - y(i) - 16}px;padding:22px 26px">
<div class="k cy">${H.esc(s.k)}</div><div class="t" style="font-size:38px;margin-top:10px">${H.esc(s.t)}</div><div class="s" style="font-size:28px;margin-top:8px">${H.esc(s.s)}</div></div>`).join('');
    return `${H.HEAD(d)}
<svg class="abs" style="left:0;top:0" width="1920" height="1080" fill="none" stroke="#60a5fa" stroke-width="4">${tramos}</svg>
${peldanos}
<div class="mono r" data-i="${n}" style="position:absolute;left:120px;top:270px;font-size:28px;color:var(--pale)">${H.A(d.meta)}</div>`;
  },
};
