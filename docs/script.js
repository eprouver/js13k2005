
function addCSSRulesToHead(cssRules) {
  const styleElement = document.createElement('style');
  styleElement.type = 'text/css';
  
  if (styleElement.styleSheet) {
    // For IE
    styleElement.styleSheet.cssText = cssRules;
  } else {
    // For other browsers
    styleElement.appendChild(document.createTextNode(cssRules));
  }
  
  document.head.appendChild(styleElement);
}
const css = `#sh,.sc{height:100vh}#start .center,#start-cat,#timer,canvas{position:absolute}#an,#game,.sc{width:100vw}#an,#tile{display:flex}.cell,.holder{transition:1s}.cell *,.sc,.sc *{pointer-events:none}#range,.om,.reflect .c1,.sc,body{overflow:hidden}#mho,#timer{font-weight:700}#canvas-2,.cho{z-index:2}*{padding:0;margin:0}.sc,.sc *{transform-style:preserve-3d;perspective:5000px;transform-origin:50% 50%;text-align:center}body{--boardRot:50deg;--bopacity:0.25;--baseTransition:0.2s ease all;--ease1:linear(0, -0.004 4.9%, -0.02 9.4%, -0.124 26.4%, -0.126 30.5%, -0.104 34.1%, -0.027 38.8%, 0.108 43.1%, 0.299 47%, 0.817 55.2%, 0.97 59.1%, 1.071 63.4%, 1.118 67.7%, 1.127 72.6%, 1.108 77.2%, 1.019 90.7%, 1.004 95.2%, 1);background:linear-gradient(0,#b8c6e4 0,#13161e 70%,#13161e 100%)}.sc{contain:layout style paint}canvas{top:0;left:0;width:100%;height:100%}#start{box-shadow:inset 0 -11vh #7f899f;font-size:1.5vmin}#start .center{display:flex;flex-direction:column;top:24%;width:50%;left:14%;gap:3em}#start button{pointer-events:auto;border-radius:1em;padding:1em;font-size:2em;border:none;box-shadow:0 .3em #9eacc9,0 .3em .3em #000;transition:.1s;background:#ced9f2;min-width:15em;margin:0 auto}#start button:active{box-shadow:0 .1em #9eacc9,0 .1em .1em #000;transform:translateY(.1em)}#start-cat{bottom:1.5em;right:16vw;font-size:4em;transform:scale(2.5)}#t{font-size:7em;width:200%;font-family:fantasy;text-align:left;transform:translate(-.7em,-.8em) rotateY(25deg);color:#39445c}#timer{top:20px;right:20px;color:#fff;font-size:24px}#game{position:relative;height:80vw}#p-cat,.platform{position:absolute}#p-cat{width:1em;height:2em;font-size:3em}.platform{width:140%;height:.3em;background:#b23aac;bottom:0;left:-20%}#an,.star{position:fixed}#an{bottom:1em;justify-content:center;align-items:center}#ss,.cell>div{position:absolute}#an input{width:50vw;min-width:600px;pointer-events:auto}#ss{left:50%;top:40%;animation:2s ease-in infinite alternate undu}.star{animation:6s ease-in forwards shoot;font-size:3.4vmax}.c1 *,.derot .c1,.milk .toy,.reflect .c1{position:relative}@keyframes shoot{0%{opacity:0;transform:scale(0) rotate(0) translateX(0);filter:blur(20px)}20%{opacity:.5;transform:scale(.5) rotate(30deg) translateX(3vmax)}40%{opacity:1;filter:blur(0)}100%{transform:scale(2) rotate(0) translateX(100vmax);filter:blur(0)}}input[type=range]{appearance:none;background:0 0;cursor:pointer;width:26rem;max-width:100%}input[type=range]:focus{outline:0}input[type=range]::-webkit-slider-runnable-track{background-color:#b23aac;border-radius:2.5rem;height:4rem}input[type=range]::-webkit-slider-thumb{appearance:none;margin-top:8px;background-color:#393939;border-radius:3rem;height:3rem;width:3rem}input[type=range]::-moz-range-track{background-color:#b23aac;border-radius:2.5rem;height:4rem}input[type=range]::-moz-range-thumb{background-color:#383838;border:none;border-radius:3rem;height:3rem;width:3rem}svg{display:none}#tile{align-items:center;justify-content:center}.holder{display:grid;width:80vmin;gap:3.5%;transform:translate3d(5vmin,0,10em) rotateX(var(--boardRot)) rotate(45deg);font-size:2.3vmin}.holder.fail{transform:translateY(100vh)}@keyframes moveit{0%{transform:translateZ(100vh)}100%{transform:translateZ(0)}}@keyframes moveit-r{0%{transform:translateZ(0)}100%{transform:translateZ(100vh)}}.milk .toy{animation:3s ease-in-out infinite alternate hover;width:0;height:100%;font-size:.9em}.derot .toy{filter:drop-shadow(0 0 2px gold) drop-shadow(0 0 2px white)}.milk.fail .derot .toy{filter:sepia(10) saturate(10) hue-rotate(-45deg) drop-shadow(0 0 2px red) drop-shadow(0 0 2px red)}.reflect .toy{opacity:.65;left:-.5em;margin-top:-.5em}@keyframes hover{0%{transform:translateY(-.1em) rotate(10deg)}50%{transform:translateY(-.05em) rotate(-10deg)}100%{transform:translateY(0)}}.cell{aspect-ratio:1;line-height:2em;transform-origin:50% 50%;background-size:cover;animation:moveit 3s var(--ease1) 1 both}.cell:not(.milk,.cat){pointer-events:auto;cursor:pointer}.cell .derot{transform:translateZ(2em) rotate(-45deg) rotateX(calc(var(--boardRot) * -1)) translateY(1em);display:flex;justify-content:center}.cell .reflect{transform:translateZ(2em) rotate(-25deg) rotateX(calc(var(--boardRot))) translate3d(.5em,1.7em,.6em) scaleY(-2.3) scaleX(1.1);opacity:.5}.om{height:100%;width:100%}.reflect .c1{top:-3em;left:1em;width:20em;height:17em}.derot .c1{left:0;top:-3em}.cat.fail .derot{filter:invert(1) drop-shadow(0 0 2px red) drop-shadow(0 0 2px red) drop-shadow(0 0 2px red)}.cell:after,.cell:before{--thick:25px;content:"";position:absolute;width:101%;height:var(--thick);background:inherit;left:0;bottom:calc(var(--thick) * -.5);transform:rotateX(-90deg) translateY(calc(var(--thick) * .5)) scaleY(1);box-shadow:inset 0 0 20px hsl(0 0 0 / var(--bopacity))}.cell:after{left:calc(100% - (var(--thick) * .5));width:var(--thick);height:102%;bottom:0;transform:rotateY(90deg) translateX(calc(var(--thick) * .5)) scaleY(1)}.cat>div{filter:grayscale(1) brightness(.5)}.marker{color:silver;font-size:2.6em;transform:translate(-.1em,0) rotate(-45deg) translate(0,-.1em);line-height:1em;width:1.1em;transform-origin:50% 50%;background:#4e525b;height:1.1em;text-shadow:0 3px 10px #292d36,0 3px 3px #292d36;border-radius:.5em;margin:.3em;transition:var(--baseTransition);box-shadow:0 8px 0 1px #292d36,inset 0 -3px 5px #292d36}.marker.fail{background:tomato;box-shadow:0 8px 0 1px red,inset 0 -3px 5px red;text-shadow:0 3px 10px red,0 3px 1px red}.marker.correct{background:#0f0;box-shadow:0 8px 0 1px green,inset 0 -3px 5px green}.derot:not(:has(.toy)){width:100%;height:100%}.c1 div.tail-seg{height:2.5em;width:2.5em;left:1.5em;animation:5s ease-in-out infinite alternate wag;animation-delay:calc(var(--i) * 60ms);border-radius:1em;transform-origin:1em 1em}@keyframes wag{from{transform:rotateZ(-18deg)}to{transform:rotateZ(28deg)}}.body .tho{position:absolute;bottom:0;transform:rotateX(var(--boardRot))}.body .tail{position:absolute;left:3em;bottom:0;background:0 0}.c1{font-size:.11em;height:24em;filter:url(#goo);animation:.5s ease-in forwards scalein}@keyframes scalein{from{transform:scale(0) translateY(-100px)}to{transform:scale(1)}}.c1 *{background:#0a0a0a;transform-origin:0 0}.c1 .head{height:5em;width:7em;border-radius:12.6em 12.6em 20em 20em/12em 12em 8.5em 8.5em;top:2.5em}.c1 .head:after,.c1 .head:before{content:"";background:inherit;height:3em;width:1.5em;top:-2em;position:absolute;border-top-right-radius:100%;border-top-left-radius:10px;animation:8s ease-in-out infinite alternate ears;right:65%}@keyframes ears{100%,90%{top:-2em}95%{top:-1em}}.c1 .head:after{right:0;margin-right:1em}.c1 .body{border-radius:155px 105px 146px 146px/275px 275px 118px 118px;height:10em;width:8em;top:2em}.rm{border-top-left-radius:0;animation:.5s 3.5s both srow}.cm{border-top-right-radius:0;animation:.5s 3.5s both scol}.cell.rev{animation:2s both moveit-r}.cm.rev{animation:1s both scol-r}.rm.rev{animation:1s both srow-r}@keyframes srow{from{opacity:0;transform:translate(5em,0) rotate(-45deg)}to{transform:translate(0,0) rotate(-45deg)}}@keyframes srow-r{from{transform:translate(0,0) rotate(-45deg)}to{opacity:0;transform:translate(5em,0) rotate(-45deg)}}@keyframes scol{from{opacity:0;transform:translate(0,5em) rotate(-45deg)}to{transform:translate(0,0) rotate(-45deg)}}@keyframes scol-r{from{transform:translate(0,0) rotate(-45deg)}to{opacity:0;transform:translate(0,5em) rotate(-45deg)}}#range{position:absolute;bottom:50px;left:50%;transform:translateX(-50%);width:300px;height:20px;background:rgba(255,255,255,.2);border-radius:10px;border:2px solid rgba(255,255,255,.5);z-index:3}#rani{height:100%;width:0%;background:#fff;border-radius:8px}#mho,.cho{width:100%;position:absolute}#mho{opacity:0;transition:opacity 3s var(--ease1);font-size:17vmin;transform:translateY(1em) rotate3d(-3.9,2.4,2.4,45deg);color:#25f8b3;text-shadow:0 0 10px #25f8b3}.cho{display:flex;font-size:6em;bottom:-1em;justify-content:space-around}.moon-star:hover{animation:none;transform:scale(1.3)!important;filter:drop-shadow(0 0 10px rgba(255, 215, 0, .8))}.collected{animation:1s ease-in-out forwards collect}@keyframes collect{from{opacity:0}to{opacity:1}}`;


addCSSRulesToHead(css);

const R = (a = 1, b = 0) => Math.random() * (a - b) + b;

const zzfx = (...t) => zzfxP(zzfxG(...t)),
  zzfxX = new AudioContext(),
  zzfxP = (...t) => {
    let a = zzfxX.createBuffer(t.length, t[0].length, 44100),
      e = zzfxX.createBufferSource();
    return (
      t.map((t, e) => a.getChannelData(e).set(t)),
      (e.buffer = a),
      e.connect(zzfxX.destination),
      e.start(),
      e
    );
  },
  zzfxG = (
    t = 1,
    a = 0.05,
    e = 220,
    n = 0,
    z = 0,
    h = 0.1,
    f = 0,
    s = 1,
    M = 0,
    r = 0,
    x = 0,
    o = 0,
    i = 0,
    c = 0,
    u = 0,
    l = 0,
    b = 0,
    d = 1,
    m = 0,
    X = 0,
    g = 0
  ) => {
    let P,
      B,
      C = 2 * Math.PI,
      G = t => (t < 0 ? -1 : 1),
      p = (M *= (500 * C) / 44100 / 44100),
      w = (e *= ((1 + 2 * a * Math.random() - a) * C) / 44100),
      A = [],
      D = 0,
      I = 0,
      R = 0,
      S = 1,
      V = 0,
      j = 0,
      k = 0,
      q = (C * Math.abs(g) * 2) / 44100,
      v = Math.cos(q),
      y = Math.sin(q) / 2 / 2,
      E = 1 + y,
      F = (-2 * v) / E,
      H = (1 - y) / E,
      J = (1 + G(g) * v) / 2 / E,
      K = -(G(g) + v) / E,
      L = J,
      N = 0,
      O = 0,
      Q = 0,
      T = 0;
    for (
      r *= (500 * C) / 44100 ** 3,
        u *= C / 44100,
        x *= C / 44100,
        o *= 44100,
        i = (44100 * i) | 0,
        t *= 0.3,
        B =
          ((n = 44100 * n + 9) +
            (m *= 44100) +
            (z *= 44100) +
            (h *= 44100) +
            (b *= 44100)) |
          0;
      R < B;
      A[R++] = k * t
    )
      (++j % ((100 * l) | 0) ||
        ((k = f
          ? f > 1
            ? f > 2
              ? f > 3
                ? Math.sin(D ** 3)
                : Math.max(Math.min(Math.tan(D), 1), -1)
              : 1 - (((((2 * D) / C) % 2) + 2) % 2)
            : 1 - 4 * Math.abs(Math.round(D / C) - D / C)
          : Math.sin(D)),
        (k =
          (i ? 1 - X + X * Math.sin((C * R) / i) : 1) *
          G(k) *
          Math.abs(k) ** s *
          (R < n
            ? R / n
            : R < n + m
              ? 1 - ((R - n) / m) * (1 - d)
              : R < n + m + z
                ? d
                : R < B - b
                  ? ((B - R - b) / h) * d
                  : 0)),
        (k = b
          ? k / 2 +
            (b > R
              ? 0
              : ((R < B - b ? 1 : (B - R) / b) * A[(R - b) | 0]) / 2 / t)
          : k),
        g && (k = T = L * N + K * (N = O) + J * (O = k) - H * Q - F * (Q = T))),
        (P = (e += M += r) * Math.cos(u * I++)),
        (D += P + P * c * Math.sin(R ** 5)),
        S && ++S > o && ((e += x), (w += x), (S = 0)),
        !i || ++V % i || ((e = w), (M = p), (S = S || 1)));
    return A;
  };

{
  let e, t, n, f, s, a, i, d, u, h, g, y, b, m, x, T, j;
  ((f = (n = Object).getPrototypeOf),
    (s = document),
    (i = {}),
    (d = f((a = { isConnected: 1 }))),
    (m = t =>
      new Proxy(
        (l, ...r) => {
          let [o, ...a] = f(r[0] ?? 0) === d ? r : [{}, ...r],
            _ = t ? s.createElementNS(t, l) : s.createElement(l);
          for (let [t, r] of n.entries(o)) {
            let o = l =>
                l ? (n.getOwnPropertyDescriptor(l, t) ?? o(f(l))) : e,
              s = l + "," + t,
              a = i[s] ?? (i[s] = o(f(_))?.set ?? 0),
              d = a ? a.bind(_) : _.setAttribute.bind(_, t),
              w = f(r ?? 0);
            w === g
              ? y(() => (d(r.val), _))
              : w !== u || (t.startsWith("on") && !r.h)
                ? d(r)
                : y(() => (d(r()), _));
          }
          return b(_, ...a);
        },
        { get: (t, l) => t.bind(e, l) }
      )),
    (j = {
      add: (b = (t, ...l) => {
        for (let r of l.flat(1 / 0)) {
          let l = f(r ?? 0),
            o = l === g ? y(() => r.val) : l === u ? y(r) : r;
          o != e && t.append(o);
        }
        return t;
      }),
      _: e => ((e.h = 1), e),
      tags: m(),
    }),
    (window.van = j));
}

let sourceIndex = 0;
let gl;

const sources = [];

function initScene(canvasName, shaderText) {
  let bufObj = {};
  let canvas = document.getElementById(canvasName);
  gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  if (!gl) return;

  let progDraw = gl.createProgram();
  for (let i = 0; i < 2; ++i) {
    let source =
      i == 0 ? document.getElementById("draw-shader-vs").text : shaderText;
    if (i == 1) {
      source = `
          precision mediump float;
          uniform vec2 iResolution;
          uniform vec2 iMouse;
          uniform float iTime;
          ${source}
          void main() 
          {
              mainImage( gl_FragColor, gl_FragCoord.xy );
          }`;
    }
    let shaderObj = gl.createShader(
      i == 0 ? gl.VERTEX_SHADER : gl.FRAGMENT_SHADER
    );
    gl.shaderSource(shaderObj, source);
    gl.compileShader(shaderObj);
    let status = gl.getShaderParameter(shaderObj, gl.COMPILE_STATUS);
    if (!status) alert(gl.getShaderInfoLog(shaderObj));
    gl.attachShader(progDraw, shaderObj);
    gl.linkProgram(progDraw);
  }
  status = gl.getProgramParameter(progDraw, gl.LINK_STATUS);
  if (!status) alert(gl.getProgramInfoLog(progDraw));
  progDraw.inPos = gl.getAttribLocation(progDraw, "inPos");
  progDraw.iTime = gl.getUniformLocation(progDraw, "iTime");
  progDraw.iMouse = gl.getUniformLocation(progDraw, "iMouse");
  progDraw.iResolution = gl.getUniformLocation(progDraw, "iResolution");
  gl.useProgram(progDraw);

  var pos = [-1, -1, 1, -1, 1, 1, -1, 1];
  var inx = [0, 1, 2, 0, 2, 3];
  bufObj.pos = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, bufObj.pos);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(pos), gl.STATIC_DRAW);
  bufObj.inx = gl.createBuffer();
  bufObj.inx.len = inx.length;
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bufObj.inx);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(inx), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(progDraw.inPos);
  gl.vertexAttribPointer(progDraw.inPos, 2, gl.FLOAT, false, 0, 0);

  gl.enable(gl.DEPTH_TEST);
  gl.clearColor(0.0, 0.0, 0.0, 1.0);

  return { canvas, progDraw, gl, progDraw, bufObj };
}

let paused = true;
let startTime = performance.now();
let pauseTime = 0;

function render() {
  if (!paused) {
    const now = performance.now();
    const elapsed = (now - startTime) / 1000; // in seconds

    sources.forEach(c => {
      c.canvas.style.display = "none";
    });

    const { canvas: canvas1, gl, progDraw, bufObj } = sources[sourceIndex];
    canvas1.style.display = "block";

    const size = Math.min(canvas1.clientWidth, canvas1.clientHeight);

    gl.viewport(0, 0, size,size);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.uniform1f(progDraw.iTime, elapsed);
    gl.uniform2f(progDraw.iResolution, canvas1.width, canvas1.height);
    gl.drawElements(gl.TRIANGLES, bufObj.inx.len, gl.UNSIGNED_SHORT, 0);

    const ss = document.getElementById('ss');
    if(ss) {
      ss.style.transform = `translateY(${Math.sin(elapsed)  * -20}vh)`;
    }
  }

  requestAnimationFrame(render);
}


const instruments = [
  "triangle",
  "organ",
  "bell",
  "fm",
  "springy",
  "meow",
];

const drums = ["tick", "snare", "kick"];
const drumPatterns = ["breakbeat", "standard"];
let timeouts = [];

const scales = {
  major: [0, 2, 4, 5, 7, 9, 11],
  naturalMinor: [0, 2, 3, 5, 7, 8, 10],
  blues: [0, 3, 5, 6, 7, 10],
};

let defaultSettings = {
  instrument: "bell",
  scale: "blues",
  tempo: 70,
  scaleChange: 4,
  drumType: "kick",
  drumType2: null,

  baseNote: 60,
  drumPattern: "standard",
  measures: [],
  measureSFX: [,5,100,.01,.2,.09,1,2.2,-10,25,,,,,.5,,,.94,.1,,-1140],
  doubleDrum: 1,
};

const getFrequency = (
  { scale = "chromatic", degree = 1, octave = 4 },
  settings = defaultSettings
) => {
  const baseNote = settings.baseNote; // 0 = C4
  const scaleDegrees = scales[scale]; // semitone offsets
  const semitoneOffset = scaleDegrees[degree % scaleDegrees.length];
  const scaleLength = scaleDegrees.length;
  const octaveOffset = Math.floor(degree / scaleLength);
  const midiNote = baseNote + semitoneOffset + 12 * (octave - 4 + octaveOffset);

  return 440 * 2 ** ((midiNote - 69) / 12);
};

let audioContext = new AudioContext();
let audioBuffer;
let count = 0;

const createNewBuffer = duration => {
  if (audioContext && audioContext.state !== "closed") {
    audioContext.close();
  }
  audioContext = new AudioContext();
  audioBuffer = audioContext.createBuffer(
    1,
    Math.ceil(44100 * duration),
    44100
  );
  return audioBuffer;
};

const lerp = (a, b, x) => a + (b - a) * x;
const gauss = (x, mu, sigma) => Math.exp(-0.5 * ((x - mu) / sigma) ** 2);

const synthFunction = (sampleIndex, frequency, settings = defaultSettings) => {
  const sampleRate = 44100;
  const durationInSamples = sampleRate;
  const t = sampleIndex / sampleRate;
  const u = Math.min(1, sampleIndex / durationInSamples); // 0..1 progress
  const omega = 2 * Math.PI * frequency;

  // Envelope shaping
  const attackTime = 0.02;
  const releaseTime = 0.02;
  const sustainLevel = 0.7;

  const attackSamples = Math.floor(attackTime * sampleRate);
  const releaseSamples = Math.floor(releaseTime * sampleRate);
  const sustainSamples = Math.max(
    0,
    durationInSamples - attackSamples - releaseSamples
  );

  let envelope;
  if (sampleIndex < attackSamples) {
    const a = sampleIndex / attackSamples;
    envelope = a * a; // smoother fade-in
  } else if (sampleIndex < attackSamples + sustainSamples) {
    envelope = sustainLevel;
  } else if (sampleIndex < durationInSamples) {
    const r = (sampleIndex - attackSamples - sustainSamples) / releaseSamples;
    envelope = sustainLevel * (1 - r) ** 2; // smoother fade-out
  } else {
    return 0;
  }

  let rawSample;

  switch (settings.instrument) {
    case "meow":
    case "springy":
      // 1) Pitch glide in semitones: slight up then down
      let semi;
      if (u < 0.35)
        semi = lerp(-2, +6, u / 0.35); // rise
      else semi = lerp(+6, -7, (u - 0.35) / 0.65); // fall
      // tiny vibrato
      const vib =
        (settings.instrument === "springy" ? 0.01 : 0.002) *
        Math.sin(2 * Math.PI * 5 * t); // ±2% at 5 Hz
      const instFreq = frequency * Math.pow(2, semi / 12) * (1 + vib);

      // 2) Vowel formants morph (rough cat-ish: /i/ -> /aʊ/)
      const F1 = lerp(500, 900, u); // formant 1 (Hz)
      const F2 = lerp(1800, 1100, u); // formant 2 (Hz)
      const BW1 = 120,
        BW2 = 180; // bandwidths

      // 3) Build harmonic series, weight each harmonic by proximity to formants
      let s = 0,
        norm = 0;
      const H = 12; // number of harmonics (tradeoff cpu vs quality)
      for (let k = 1; k <= H; k++) {
        const hk = k * instFreq;
        const w = gauss(hk, F1, BW1) + 0.6 * gauss(hk, F2, BW2); // F2 softer
        s += w * Math.sin(2 * Math.PI * hk * t);
        norm += w;
      }
      s = norm > 0 ? s / norm : 0;

      // 4) Nasal/noisy onset for the 'm' (first ~60 ms)
      const mDur = 0.06; // seconds
      const mAmt = Math.max(0, 1 - t / mDur); // fades out quickly
      const mNoise = (R() * 2 - 1) * 0.15 * mAmt;

      rawSample = 0.9 * s + mNoise;
      break;

    case "triangle":
      rawSample =
        2 * Math.abs(2 * (t * frequency - Math.floor(t * frequency + 0.5))) - 1;
      break;

    case "organ":
      rawSample =
        0.6 * Math.sin(omega * t) +
        0.4 * Math.sin(omega * t * 2) +
        0.2 * Math.sin(omega * t * 4);
      break;

    case "bell":
      let wsum = 0;
      let stum = 0;

      for (let i = 0; i < 10; i++) {
        const f = frequency * i * (0.5 + 0.501 * i); // micro-detune
        const a = 1 / (1 + 0.7 * i); // amplitude roll-off
        const d = Math.exp((-3 - i * 0.2) * t); // per-mode decay
        stum += a * Math.sin(2 * Math.PI * f * t) * d;
        wsum += a;
      }
      rawSample = wsum ? stum / wsum : 0;
      break;

    case "fm":
      const modulator = Math.sin(2 * Math.PI * frequency * 2 * t) * 100;
      rawSample = 0.25 * Math.sin(2 * Math.PI * frequency * t + modulator);
      break;

    default:
      rawSample = Math.sin(omega * t);
      break;
  }

  let sample = envelope * rawSample * 0.35;
  if (!Number.isFinite(sample)) sample = 0;
  sample = Math.max(-1, Math.min(1, sample));

  return sample;
};

const addNoteToBuffer = (noteObject, settings = defaultSettings) => {
  const { degree, octave, duration } = noteObject;

  if (degree === null || audioBuffer === null) {
    return; // Skip adding any sound to the buffer
  }

  noteObject.scale = settings.scale;
  const frequency = getFrequency(noteObject);

  const lengthInSamples = Math.floor(44100 * duration * (60 / settings.tempo));
  const startSample = Math.floor(audioContext.currentTime * 44100);
  const D = [];

  for (let i = 0; i < lengthInSamples; i++) {
    const decay = i < 88 ? i / 88.2 : 1 - (i - 88.2) / (lengthInSamples - 88.2);
    D[i] = decay * synthFunction(i, frequency); // use piano/guitar synthesis
  }

  const bufferData = audioBuffer.getChannelData(0);

  for (let i = 0; i < lengthInSamples; i++) {
    const writeIndex = startSample + i;
    if (writeIndex < bufferData.length) {
      bufferData[writeIndex] += D[i]; // critical change: additive
    }
  }
};

let bufferSource;
let masterGain;

const makeReverbIR = (context, duration = 2, decay = 2) => {
  const sampleRate = context.sampleRate;
  const length = duration * sampleRate;
  const ir = context.createBuffer(2, length, sampleRate);

  for (let channel = 0; channel < 2; channel++) {
    const data = ir.getChannelData(channel);
    for (let i = 0; i < length; i++) {
      // white noise * exponential decay
      data[i] = (R() * 2 - 1) * Math.pow(1 - i / length, decay);
    }
  }
  return ir;
};

const startPlayback = (settings = defaultSettings) => {
  return new Promise((resolve, reject) => {
    if (!audioContext || !audioBuffer) {
      reject("Audio context or buffer is missing.");
      return;
    }

    if (bufferSource) {
      bufferSource.stop(); // optional safety
      bufferSource.disconnect();
    }

    bufferSource = audioContext.createBufferSource();
    bufferSource.buffer = audioBuffer;
    masterGain = audioContext.createGain();
    masterGain.gain.value = 0.8;
    // volumeSlider && volumeSlider.value ? parseFloat(volumeSlider.value) : 1; // global volume

    // convolver with inline IR
    const convolver = audioContext.createConvolver();
    const reverbDuration = 1.5;
    convolver.buffer = makeReverbIR(audioContext, reverbDuration, 3); // keeping these consistant w/o settings

    // dry path (optional: include lowpass here too)
    bufferSource.connect(masterGain);

    // wet path with filter
    bufferSource.connect(convolver);
    convolver.connect(masterGain);

    masterGain.connect(audioContext.destination);
    const duration = audioBuffer.length / audioContext.sampleRate;

    bufferSource.start();

    // create a new buffer after playback
    timeouts.push(
      setTimeout(() => {
        resolve();
      }, duration * 1000)
    );
  });
};

const bpmToMilliseconds = bpm => 60000 / bpm;

const addDrumToBuffer = (timeOffset, settings = defaultSettings) => {
  if (settings.drumType === null || audioBuffer === null) {
    return;
  }
  const sampleRate = 44100;
  const bufferData = audioBuffer.getChannelData(0);

  const duration = 0.1; // up to 100 ms per drum hit
  const length = Math.floor(sampleRate * duration);

  for (let i = 0; i < length; i++) {
    const t = i / sampleRate;
    let env = 1;
    let sample = 0;

    switch (settings.drumType) {
      case "kick":
        env = Math.exp(-140 * t);
        sample = 2 * Math.sin(2 * Math.PI * 150 * t * Math.exp(-30 * t)) * env;
        sample *= 1.5;
        break;

      case "snare":
        env = Math.exp(-20 * t);
        const noise = R() * 2 - 1;
        sample = (0.5 * noise + 0.5 * Math.sin(2 * Math.PI * 200 * t)) * env;
        sample *= 0.3;
        break;

      case "tick":
      default:
        env = Math.exp(-40 * t);
        sample = (R() * 2 - 1) * env;
        sample *= 0.5;
        break;
    }

    if (!Number.isFinite(sample)) sample = 0;
    sample = Math.max(-1, Math.min(1, sample));

    const idx = timeOffset + i;
    if (idx < bufferData.length) bufferData[idx] += sample * 0.5;
  }
};

const addDrumLoop = (settings = defaultSettings) => {
  const tempo = settings.tempo * settings.doubleDrum || 1;
  const samplesPerBeat = Math.floor(
    ((0.5 * bpmToMilliseconds(tempo)) / 1000) * 44100
  );
  const offsetShift = ~~(0.2 * (bpmToMilliseconds(tempo) / 1000) * 44100);

  for (let i = 0; i < 200; i++) {
    let offset = i * samplesPerBeat;

    switch (settings.drumPattern) {
      case "breakbeat":
        if (i % 4 === 0) {
          addDrumToBuffer(offset, {
            ...settings,
            drumType: settings.drumType,
          });
        }
        if (i % 8 === 5) {
          addDrumToBuffer(offset + samplesPerBeat, {
            ...settings,
            drumType: settings.drumType2,
          });
        }
        if (i % 16 === 15) {
          addDrumToBuffer(offset - offsetShift, {
            ...settings,
            drumType: settings.drumType,
          });
        }
        break;

      case "standard":
      default:
        addDrumToBuffer(offset, {
          ...settings,
          drumType: i % 2 === 0 ? settings.drumType : settings.drumType2,
        });

        if (i % 8 === 0) {
          addDrumToBuffer(offset - offsetShift, {
            ...settings,
            drumType: i % 2 === 0 ? settings.drumType : settings.drumType2,
          });
        }
        break;
    }
  }
};

const playMeasure = async (measure, settings = defaultSettings) => {
  const interval = bpmToMilliseconds(settings.tempo);
  let currentTime = 0;

  // Calculate total duration of the measure
  const rawDuration = Math.ceil(
    measure.reduce((acc, note) => acc + note.duration, 3)
  );
  const totalDuration = interval * 0.005 + Math.ceil(rawDuration * 4) / 4;

  // Create a new buffer for this measure
  createNewBuffer(totalDuration * (60 / settings.tempo));

  measure.forEach(note => {
    let timeoutDelay;
    timeoutDelay = currentTime + interval * note.duration;
    timeouts.push(
      setTimeout(() => {
        addNoteToBuffer({ ...note }, settings);
      }, timeoutDelay)
    );
    currentTime = timeoutDelay;
  });

  addDrumLoop(settings);


};

const newMotifMeasure = settings => {
  const noteSpread = 8;
  const base = ~~(R() * noteSpread);
  const oct = [2, 3, 4, 5];

  const types = {
    ascend: [0, 2, 4, 5],
    descend: [5, 4, 2, 0],
    arch: [0, 3, 5, 2],
    zigzag: [0, 5, 1, 4],
    cascade: [0, 1, 2, 4],
  };

  const rhythmPatterns = [
    [...new Array(10)].map(a => 0.25),
    [0.5, 0.5, 0.25, 0.75],
    [0.25, 0.25, 0.25, 0.25, 1],
    [4, 2, 2],
    [0.75, 0.25, 0.5, 0.5],
    [0, 2, 0, 2],
    [1, 2, 1, 4],
  ];

  const typeKeys = Object.keys(types);
  const seq = types[typeKeys[~~(R() * typeKeys.length)]];
  const rhythm = rhythmPatterns[~~(R() * rhythmPatterns.length)];
  const articulation = 1; //R() < 0.5 ? 0.8 : 1;

  const note = (d, o, t = 0.5) =>
    R() < 0.25
      ? { degree: null, octave: null, duration: t }
      : { degree: d, octave: o, duration: t };

  const motif = seq.map((s, i) =>
    note(
      (base + s + noteSpread) % noteSpread,
      oct[~~(R() * oct.length)],
      rhythm[i % rhythm.length] * articulation
    )
  );

  // Add some rests at the end with a small probability
  if (R() < 0.3) {
    const restCount = ~~(R() * 3) + 1;
    for (let i = 0; i < restCount; i++) {
      motif.push({
        degree: null,
        octave: null,
        duration: 0.25 + R() * 0.5,
      });
    }
  }

  // Optionally mirror the motif
  if (R() < 0.4) {
    const mirror = motif.map((n, i) =>
      n.degree == null
        ? n
        : note(
            R() > 0.5
              ? base - (n.degree - base)
              : n.degree + (i % 2 ? -1 : 1),
            n.octave,
            n.duration
          )
    );
    return motif.concat(mirror);
  }

  return motif;
};

const newMeasure = async (settings = defaultSettings) => {
  if (!playing) {
    return;
  }
  if (settings.measures.length === 0) {
    // Predefined melodic motifs
    for (let i = 0; i < 5; i++) {
      settings.measures.push(newMotifMeasure(settings));
    }
  }

  let measure = settings.measures[count % settings.measures.length];
  playMeasure(measure);

  const totalDuration = measure.reduce(
    (o, n) => o + (n.degree !== null ? n.duration : 0),
    0
  );

  // extra melody bumps
  if (R() > 0.5 && totalDuration < 2) {
    const extra = [...new Array(8)]
      .map(a => [
        {
          degree: 2,
          octave: 2,
          duration: 0.25,
        },
        {
          degree: null,
          octave: null,
          duration: 0.25,
        },
      ])
      .flat();

    extra[7] = {
      degree: null,
      octave: null,
      duration: 1,
    };
    playMeasure(extra);
  }

  settings.measureSFX[0] =
    settings.volume === undefined ? 0.2 : settings.volume * 0.25;
    zzfx(...settings.measureSFX);
  await startPlayback(settings);
  if (!playing) return;
  settings.measureSFX[0] =
    settings.volume === undefined ? 0.2 : settings.volume * 0.25;
    zzfx(...settings.measureSFX);

  // repeat motif a second time
  await startPlayback(settings);
  newMeasure();
  count++;
  if (count > defaultSettings.scaleChange) {
    defaultSettings.scale = Object.keys(scales).sort(
      () => R() - 0.5
    )[0];
    count = 0;
  }
};

let playing = false;

// Helper function to reset audio state
const resetAudio = () => {
  timeouts.forEach(t => clearTimeout(t));
  timeouts = [];
  if (audioContext) {
    audioContext.close();
    audioContext = null;
  }
  audioContext = new AudioContext();
  if (bufferSource) {
    bufferSource.stop();
    bufferSource.disconnect();
  }
  audioBuffer = null;
  createNewBuffer(1);
  count = 0;
};

const startMusic = () => {
  playing = true;
  resetAudio();
  newMeasure();
};

const stopMusic = () => {
  playing = false;
  resetAudio();
  const tempo = 100;
  defaultSettings = {
    ...defaultSettings,
    instrument: instruments[~~(R() * instruments.length)],
    scale: Object.keys(scales).sort(() => R() - 0.5)[0],
    tempo,
    drumType: drums[~~(R() * drums.length)],
    drumType2: drums[~~(R() * drums.length)],
    baseNote: ~~(R() * 60) + 40,
    drumPattern: drumPatterns[~~(R() * drumPatterns.length)],
    doubleDrum: tempo < 60 ? 2 : 1,
    measures: [],
  };
};

const doubleTiempo = () => {
  resetAudio();
  defaultSettings.tempo *= 2;
  newMeasure();
};

const slowTiempo = () => {
  resetAudio();
  defaultSettings.tempo = 40;
  newMeasure();
};

const { div, input, button, canvas } = van.tags;

// Game Configuration - Easy to modify
const GAME_CONFIG = {
  SKY_TIME_LIMIT: 30000, // Time in milliseconds (30 seconds) - Change this to adjust game length
  STAR_SPAWN_INTERVAL: 400, // How often stars spawn (1 second)
};

let cRow = 1;
let cCol = 2;
let cDif = 0.4;

const tileRounds = 4;
const starGoal = 300;
let starsCollected = 0;
let currentTotalStars = 0;

const Tail = (count = 8) => {
  let inner = null; // innermost segment
  for (let i = count - 1; i >= 0; i--) {
    // outermost gets --i:0
    inner = div({ class: "tail-seg", style: `--i:${i}` }, inner);
  }
  return div({ class: "tho" }, div({ class: "tail" }, inner));
};

const Cat = (nSeg = 8) =>
  div(
    { class: "c1" },
    div({ class: "head" }),
    div({ class: "body" }, Tail(nSeg))
  );

let voices = [];

function say(text, voice) {
  if (voices.length === 0) {
    voices = speechSynthesis
      .getVoices()
      .filter(v => v.lang.toLowerCase().startsWith("en"));
  }
  const u = new SpeechSynthesisUtterance(text);
  u.voice = voice || voices[(R() * voices.length) | 0];
  speechSynthesis.speak(u);
}

const startMoon = () => {
  sourceIndex = 1;
  paused = false;
  GAME_CONFIG.STAR_SPAWN_INTERVAL = 800;
  moon.scrollIntoView({ behavior: 'smooth' });
  slowTiempo();

  const starHolder = div({ class: "star-holder" });
  van.add(moon, starHolder);

  for (var i = 0; i < starsCollected; i++) {
    setTimeout(
      () => {
        van.add(
          starHolder,
          div(
            {
              class: "collected",
              style: `transform: translate(${R() * 100}vw, ${R() * 70}vh) scale(${R() * 0.5 + 0.5});
          position: absolute; color: #fff;`,
            },
            "·"
          )
        );

        currentTotalStars++;
        rangeInner.style.width = `${(currentTotalStars / starGoal) * 100}%`;
      },
      1000 + 50 * i
    );
  }

  say(`${currentTotalStars + starsCollected} of ${starGoal} stars collected`);

  setTimeout(
    () => {
      starsCollected = 0;

      if (currentTotalStars >= starGoal) {
        say("You've collected all the stars!");
        document.querySelector("#mho").style.opacity = 1;
        zzfx(...[1.5,0,100,.06,1,.19,,3.6,,,100,.2,.5,,,,,.56,.18,,100]);
      } else {
        setTimeout(() => {
          starHolder.remove();
          stopMusic();
          tile.scrollIntoView({ behavior: 'smooth' });

          setTimeout(() => {
            startBoard(tile);
            startMusic();
          }, 1000);
        }, 4500);
      }
    },
    starsCollected * 50 + 1000
  );
};

const startSky = holder => {
  if (currentTotalStars === 0) {
    say("Steer cat to collect stars");
  }
  sourceIndex = 0;
  paused = false;
  doubleTiempo();
  let skyRound = true;

  const hit = (a, b) =>
    !(
      a.right < b.left ||
      a.left > b.right ||
      a.bottom < b.top ||
      a.top > b.bottom
    );

  const cat = div(
    { id: "p-cat" },
    div({
      class: "platform",
    }),
    Cat(8)
  );

  const slider = input({
    type: "range",
    min: "-5",
    max: "5",
    step: "0.1",
    value: "0",
    oninput: e => (vel = +e.target.value),
  });

  const starStart = div({ id: "ss"});

  // Add timer display
  const timerDisplay = div({
    id: "timer",
  });

  const board = div(
    { id: "sh" },
    div({ id: "game" }, cat, starStart),
    div({ id: "an" }, slider),
    timerDisplay
  );

  // state
  let cx = 0,
    cy = 0,
    r = 0;
  let ang = 0,
    vel = 0,
    t0;

  const layout = () => {
    // center near middle; radius scales with viewport
    cx = innerWidth / 2;
    cy = innerHeight * 0.4; // 40% height looks nice; tweak as you like
    r = Math.min(innerWidth, innerHeight) * 0.4;
    setPos();
  };

  const setPos = () => {
    const screenRatio = innerWidth / innerHeight;
    const baseRadius = Math.min(innerWidth, innerHeight) * 0.4;

    const radiusX = baseRadius * Math.max(1, screenRatio); // Wider on wide screens
    const radiusY = baseRadius * Math.max(1, 1 / screenRatio); // Taller on tall screens

    const x = cx + radiusX * Math.cos(ang) - cat.offsetWidth / 2;
    const y = cy + radiusY * Math.sin(ang) - cat.offsetHeight / 2;
    cat.style.left = x + "px";
    cat.style.top = y + "px";
  };

  const dz = 0.5; // small deadzone for stillness
  const tick = t => {
    if (!t0) t0 = t;
    const dt = (t - t0) / 1000;
    t0 = t;
    const v = Math.abs(vel) < dz ? 0 : vel;
    ang = (ang + v * dt) % (Math.PI * 2);
    setPos();
    requestAnimationFrame(tick);
  };

  // init
  van.add(holder, board);
  layout();
  vel = +slider.value || 0;
  requestAnimationFrame(tick);
  addEventListener("resize", layout);

  // Time-based progression instead of star collection
  const startTime = Date.now();
  const updateTimer = () => {
    if (!skyRound) return;

    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, GAME_CONFIG.SKY_TIME_LIMIT - elapsed);
    const seconds = Math.ceil(remaining / 1000);

    timerDisplay.textContent = `${seconds}s`;

    if (remaining > 0) {
      requestAnimationFrame(updateTimer);
    }
  };

  const gameTimer = setTimeout(() => {
    if (skyRound) {
      skyRound = false;
      document.querySelectorAll(".star").forEach(s => s.remove());
      startMoon();
      setTimeout(() => {
        holder.innerHTML = "";
      }, 2000);
    }
  }, GAME_CONFIG.SKY_TIME_LIMIT);

  // Start timer display
  requestAnimationFrame(updateTimer);

  let rotation = R() * 360;

  const newStar = () => {
    const ss = div(
      {
        class: "star",
        style: `margin-top: ${Math.random() * 40}vh`,
        onanimationend: () => {
          star.parentElement.removeChild(star);
        },
      },
      "⭐"
    );

    rotation += R() > 0.75 ? 2 : -2;

    if (R() > 0.95) {
      rotation = R() * 360;
    }
    const star = div(
      {
        class: "st",
        style: `transform: rotate(${R() * 360}deg)`,
      },
      ss
    );

    van.add(starStart, star);

    const checkCollision = () => {
      if (hit(ss.getBoundingClientRect(), cat.getBoundingClientRect())) {
        // Play sound effect when collecting stars
        zzfx(...[,0,1500,.02,,.2,,2,1,3,230,.1,,.1,,,,.8]);

        // Remove star but don't affect progression
        star.parentElement.removeChild(star);
        starsCollected++;
        return;
      } else if (skyRound) {
        requestAnimationFrame(checkCollision);
      }
    };

    requestAnimationFrame(checkCollision);

    // Continue spawning stars until time runs out
    if (skyRound) {
      requestAnimationFrame(() => {
        setTimeout(newStar, Math.max(100, GAME_CONFIG.STAR_SPAWN_INTERVAL++));
      });
    }
  };

  requestAnimationFrame(newStar);
  holder.scrollIntoView({ behavior: 'smooth' });
};

const startBoard = tileHolder => {
  let round = 0;
  /* lower is emptier */
  const boardHolder = (rowNum = 2, colNum = 2, difficulty = 0.22) => {
    if (rowNum + colNum < 4) {
      setTimeout(() => {
        say("place cat on empty tile. Match tags to number of cats");
      }, 2000);
    }

    let S, grid, rowMarkers, colMarkers;
    let target = Math.min(
      Math.round(difficulty * rowNum * colNum),
      Math.ceil(rowNum / 2) * Math.ceil(colNum / 2)
    );

    const ORTHO = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    const ALL8 = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];

    const inB = (r, c) => r >= 0 && r < rowNum && c >= 0 && c < colNum;

    function adjMilks(S, r, c) {
      let n = 0;
      for (const [dR, dC] of ORTHO) {
        const R = r + dR,
          C = c + dC;
        if (inB(R, C) && S[R][C] === 1) n++;
      }
      return n;
    }
    function nearCat(S, r, c) {
      for (const [dR, dC] of ALL8) {
        const R = r + dR,
          C = c + dC;
        if (inB(R, C) && S[R][C] === 2) return true;
      }
      return false;
    }

    function toySatisfied(S, r, c) {
      let n = 0;
      for (const [dR, dC] of ORTHO) {
        const R = r + dR,
          C = c + dC;
        if (inB(R, C) && S[R][C] === 2) n++;
      }
      return n === 1;
    }

    let placed = 0;

    const testFinished = () => {
      placed += 1;

      if (placed === target) {
        holder.style.setProperty("--bopacity", 1);
        setTimeout(async () => {
          let colCorrect;
          let rowCorrect;

          const catsInGridRow = r =>
            grid[r].reduce((n, el) => n + el.classList.contains("cat"), 0);

          const catsInGridCol = c => {
            let n = 0;
            for (let r = 0; r < grid.length; r++)
              n += grid[r][c].classList.contains("cat");
            return n;
          };

          // array of booleans, one per row
          rowCorrect = rowMarkers.map(
            (m, i) => parseInt(m.innerText) === catsInGridRow(i)
          );

          // array of booleans, one per col
          colCorrect = colMarkers.map(
            (m, i) => parseInt(m.innerText) === catsInGridCol(i)
          );

          const borderingCats = (() => {
            const isCat = el => el.classList.contains("cat");
            const s = new Set();
            for (let r = 0; r < grid.length; r++)
              for (let c = 0; c < grid[r].length; c++) {
                if (!isCat(grid[r][c])) continue;
                for (const [dr, dc] of ALL8) {
                  const R = r + dr,
                    C = c + dc;
                  if (inB(R, C) && isCat(grid[R][C])) {
                    s.add(grid[r][c]);
                    s.add(grid[R][C]);
                    break;
                  }
                }
              }
            return [...s];
          })();

          const pairToysWithCats = () => {
            const out = [];
            for (let r = 0; r < grid.length; r++)
              for (let c = 0; c < grid[r].length; c++) {
                const el = grid[r][c];
                if (!el.classList.contains("milk")) continue;
                let cat; // remains undefined if none found
                for (const [dr, dc] of ORTHO) {
                  const R = r + dr,
                    C = c + dc;
                  if (inB(R, C) && grid[R][C].classList.contains("cat")) {
                    cat = grid[R][C];
                    break;
                  }
                }
                out.push([el, cat]);
              }
            return out;
          };

          if (
            rowCorrect.every(a => a) &&
            colCorrect.every(a => a) &&
            pairToysWithCats().some(p => p[1] !== undefined) &&
            borderingCats.length === 0
          ) {
            // success
            GAME_CONFIG.STAR_SPAWN_INTERVAL -= 150;
            round += 1;
            say("meow");

            if (cRow < 3 || cCol < 2) {
              if (cRow < cCol) cRow++;
              else cCol++;
            } else {
              cDif += 0.07;
              if (cDif > 0.36 && cRow < 7 && cCol < 7) {
                if (cRow < cCol) cRow++;
                else cCol++;
                cDif = 0.25;
              } else if (cDif > 0.36) {
                cDif = 0.2;
              }
            }

            rowMarkers
              .concat(colMarkers)
              .forEach(c => c.classList.add("correct"));
            zzfx(
              ...[
                ,
                0,
                864,
                0.03,
                0.08,
                0.27,
                ,
                0.4,
                ,
                ,
                428,
                0.05,
                ,
                ,
                ,
                ,
                ,
                0.63,
                0.04,
              ]
            );

            setTimeout(() => {
              [...document.getElementsByClassName("cell")]
                .concat([...document.getElementsByClassName("rm")])
                .concat([...document.getElementsByClassName("cm")])
                .forEach(c => {
                  c.offsetWidth;
                  c.classList.add("rev");
                });

              setTimeout(() => {
                //swoop up
                zzfx(
                  ...[
                    0.7,
                    ,
                    126,
                    0.5,
                    0.6,
                    0.3,
                    ,
                    13.4,
                    ,
                    ,
                    34,
                    0.25,
                    0.15,
                    ,
                    ,
                    ,
                    ,
                    0.63,
                    ,
                    0.01,
                    -1029,
                  ]
                );
              }, 200);

              setTimeout(() => {
                if (round === tileRounds) {
                  tile.innerHTML = "";
                  startSky(skyHolder);
                  tunnel.scrollIntoView({ behavior: 'smooth' });
                  return;
                }
                const holder = boardHolder(cRow, cCol, cDif);
                tileHolder.innerHTML = "";
                van.add(tileHolder, holder);
              }, 2000);
            }, 400);
          } else {
            // failure
            GAME_CONFIG.STAR_SPAWN_INTERVAL += 400;
            [...document.querySelectorAll(".cell")].forEach(cell =>
              cell.style.setProperty("pointer-events", "none")
            );
            const interval = 800;

            async function badRowCol(correct, markers) {
              return new Promise(resolve => {
                let counter = 0;
                for (let i = 0; i < correct.length; i++) {
                  if (!correct[i]) {
                    counter++;
                    setTimeout(() => {
                      zzfx(
                        ...[
                          0.2,
                          ,
                          10,
                          0.02,
                          0.2,
                          0.03,
                          1,
                          0.1,
                          88,
                          22,
                          ,
                          ,
                          ,
                          ,
                          145,
                          ,
                          ,
                          0.68,
                          0.03,
                          ,
                          -1493,
                        ]
                      );
                      markers[i].classList.add("fail");
                    }, counter * interval);
                  }
                }

                setTimeout(() => {
                  resolve();
                }, counter * interval);
              });
            }

            async function noToy() {
              const nocats = pairToysWithCats().filter(p => p[1] === undefined);
              say(`No bordering cat"}`);
              return new Promise(resolve => {
                nocats.forEach((p, i) => {
                  setTimeout(() => {
                    zzfx(
                      ...[
                        0.2,
                        ,
                        10,
                        0.02,
                        0.2,
                        0.03,
                        1,
                        0.1,
                        88,
                        22,
                        ,
                        ,
                        ,
                        ,
                        145,
                        ,
                        ,
                        0.68,
                        0.03,
                        ,
                        -1493,
                      ]
                    );
                    p[0].classList.add("fail");
                  }, i * interval);
                });

                setTimeout(() => {
                  resolve("resolved");
                }, nocats.length * interval);
              });
            }

            async function angryCats() {
              say("cats too close");
              return new Promise(resolve => {
                borderingCats.forEach((c, i) => {
                  setTimeout(() => {
                    zzfx(
                      ...[
                        0.2,
                        ,
                        10,
                        0.02,
                        0.2,
                        0.03,
                        1,
                        0.1,
                        88,
                        22,
                        ,
                        ,
                        ,
                        ,
                        145,
                        ,
                        ,
                        0.68,
                        0.03,
                        ,
                        -1493,
                      ]
                    );
                    c.classList.add("fail");
                  }, i * interval);
                });
                setTimeout(() => {
                  resolve("resolved");
                }, borderingCats.length * interval);
              });
            }

            const pairs = [
              [
                !rowCorrect.every(a => a),
                () => badRowCol(rowCorrect, rowMarkers),
              ],
              [
                !colCorrect.every(a => a),
                () => badRowCol(colCorrect, colMarkers),
              ],
              [true, () => new Promise(res => setTimeout(res, interval))],
              [pairToysWithCats().some(p => p[1] === undefined), noToy],
              [borderingCats.length !== 0, angryCats],
              [true, () => new Promise(res => setTimeout(res, interval * 1.5))],
            ];

            // call sequentially
            for (const [cond, fn] of pairs) {
              if (cond) await fn();
            }

            zzfx(
              ...[
                0.5,
                ,
                89,
                0.09,
                0.11,
                0.27,
                ,
                0.2,
                7,
                8,
                ,
                ,
                ,
                1.2,
                ,
                0.9,
                ,
                0.4,
                0.06,
                ,
                1299,
              ]
            );

            if (cRow > 2 || cCol > 2) {
              if (cRow > cCol) cRow--;
              else cCol--;
            } else {
              cDif -= 0.1;
              if (cDif < 0.2) {
                if (cRow > cCol) cRow--;
                else cCol--;
                cDif = 0.4;
              }
            }
            if (cRow === 3 && cCol === 3) {
              cCol = 4;
            }

            holder.classList.add("fail");
            setTimeout(() => {
              if (round === tileRounds) {
                tile.innerHTML = "";
                startSky(skyHolder);
                tunnel.scrollIntoView({ behavior: 'smooth' });
                return;
              }
              const holder = boardHolder(cRow, cCol, cDif);
              tileHolder.innerHTML = "";
              van.add(tileHolder, holder);
            }, 2000);
          }
        }, 500);
      }
    };

    function makeBoard(rows, cols, k, retries = 50000) {
      function candidates(S, m) {
        const out = [];
        for (const [dR, dC] of ORTHO) {
          const r = m.r + dR,
            c = m.c + dC;
          if (!inB(r, c) || S[r][c] !== 0) continue;
          if (nearCat(S, r, c)) continue;
          if (adjMilks(S, r, c) !== 1) continue;
          out.push({ r, c });
        }
        // shuffle small
        for (let i = out.length - 1; i > 0; i--) {
          const j = (R() * (i + 1)) | 0;
          [out[i], out[j]] = [out[j], out[i]];
        }
        return out;
      }

      for (let i = 0; i < retries; i++) {
        S = Array.from({ length: rows }, _ => new Uint8Array(cols));
        const milks = [];
        let placed = 0,
          guard = rows * cols * 6;
        while (placed < k && guard-- && i < retries) {
          const r = (R() * rows) | 0,
            c = (R() * cols) | 0;
          if (S[r][c] !== 0) continue;
          S[r][c] = 1;
          let ok = false;
          for (const [dR, dC] of ORTHO) {
            const R = r + dR,
              C = c + dC;
            if (inB(R, C) && S[R][C] === 0) {
              ok = true;
              break;
            }
          }
          if (ok) {
            milks.push({ r, c });
            placed++;
          } else {
            S[r][c] = 0;
          }
        }
        if (placed < k) continue; // retry board

        // 3) backtrack: one cat per milk, no touching cats
        function dfs() {
          let mi = -1,
            best = null;
          for (let i = 0; i < milks.length; i++) {
            const m = milks[i];
            if (toySatisfied(S, m.r, m.c)) continue;
            const opts = candidates(S, m);
            if (opts.length === 0) return false;
            if (!best || opts.length < best.opts.length) {
              best = { i, opts };
              mi = i;
            }
          }
          if (mi === -1) return true; // all satisfied
          for (const { r, c } of best.opts) {
            S[r][c] = 2;
            if (dfs()) return true;
            S[r][c] = 0;
          }
          return false;
        }

        if (dfs()) return S;
        // else retry a fresh board
      }
      return false;
    }

    const holder = div({
      class: "holder",
    });

    grid = [...new Array(rowNum)].map(c => [...new Array(colNum)]);
    while (!makeBoard(rowNum, colNum, target)) {
      target -= 1;
      cDif = 0.22;
    }
    rowMarkers = [];
    colMarkers = [];

    for (let row = 2; row < rowNum + 2; row++) {
      let marker = div({
        class: "marker rm",
      });
      van.add(
        holder,
        div(
          {
            style: `grid-area: ${row} / ${colNum + 2} / ${row + 1} / ${
              colNum + 3
            }; display: flex;
    align-items: center;`,
          },
          marker
        )
      );
      rowMarkers.push(marker);
    }

    for (let col = 2; col < colNum + 2; col++) {
      let marker = div({
        class: "marker cm",
      });
      van.add(
        holder,
        div(
          {
            style: `grid-area: ${rowNum + 2} / ${col} / ${rowNum + 3} / ${
              col + 1
            }; display: flex;
    justify-content: center;
    `,
          },
          marker
        )
      );
      colMarkers.push(marker);
    }

    const bopacity = "var(--bopacity)";
    const backingGrads =
      R() > 0.5
        ? [
            `hsl(225 73% 57% / ${bopacity}), hsl(240 100% 50% / ${bopacity})`, // royalblue, blue
            `hsl(25 90% 55% / ${bopacity}), hsl(45 100% 50% / ${bopacity})`, // sorta orangey
          ]
        : [
            `hsl(300 76% 72% / ${bopacity}), hsl(300 100% 25% / ${bopacity})`, // violet, purple
            `hsl(120 100% 50% / ${bopacity}), hsl(120 100% 25% / ${bopacity})`, // lime, green
          ];

    for (let row = 0; row < rowNum; row++) {
      let rowCats = 0;
      for (let col = 0; col < colNum; col++) {
        grid[row][col] = div({
          class: "cell",
          style: `grid-area: ${row + 2} / ${col + 2} / ${row + 3} / ${
            col + 3
          };background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20000" height="400"><filter id="a"><feTurbulence seed="${~~(
            R() * 2000
          )}" baseFrequency="2" result="noise" type="fractalNoise"/><feComponentTransfer><feFuncR tableValues="0 1" type="discrete"/><feFuncG tableValues="0 1" type="discrete"/><feFuncB tableValues="0 1" type="discrete"/><feFuncA type="linear"/></feComponentTransfer><feColorMatrix type="saturate" values="0.10"/></filter><g transform="scale(40)"><rect width="100%" height="100%" filter="url(%23a)" opacity=".15"/></g></svg>'), linear-gradient(${R()}turn, ${
            backingGrads[(row + col) % backingGrads.length]
          });
      background-color: hsl(0 0 20 / 0.1);
      animation-delay: ${R() * 1000}ms;
      font-size: ${(11 - Math.max(rowNum, colNum)) * 0.6}em`,
          onclick: () => {
            if (
              S[row][col] !== 1 &&
              !grid[row][col].classList.contains("cat")
            ) {
              zzfx(
                ...[
                  10,
                  0.5,
                  161.6256,
                  0.04,
                  0.58,
                  0.16,
                  ,
                  2.7,
                  ,
                  ,
                  ,
                  ,
                  ,
                  ,
                  ,
                  ,
                  0.18,
                  0.73,
                  0.02,
                  ,
                  645,
                ]
              );

              grid[row][col].classList.add("cat");
              grid[row][col].style.setProperty("--bopacity", 1);

              van.add(
                grid[row][col],

                div({ class: "om" }, div({ class: "reflect" }, Cat(0))),
                div({ class: "derot" }, Cat(9))
              );

              testFinished();
            }
          },
        });

        // if (S[row][col] == 2) {
        //   grid[row][col].style.setProperty('border', '5px solid tomato');
        // }

        if (S[row][col] == 1) {
          const toy = ["⭐️", "☁️", "🌙"][~~(R() * 3)];
          grid[row][col].classList.add("milk");
          grid[row][col].style.setProperty("--bopacity", 1);
          van.add(
            grid[row][col],

            div(
              { class: "om" },
              div({ class: "reflect" }, div({ class: "toy" }, toy))
            ),
            div({ class: "derot" }, div({ class: "toy" }, toy))
          );
        } else if (S[row][col] == 2) {
          rowCats += 1;
        }
        van.add(holder, grid[row][col]);
      }
      rowMarkers[row].innerText = rowCats;
    }

    for (let col = 0; col < colNum; col++) {
      let total = 0;
      for (let row = 0; row < rowNum; row++) {
        if (S[row][col] === 2) total++;
      }
      colMarkers[col].innerText = total;
    }

    return holder;
  };

  const holder = boardHolder(cRow, cCol, cDif);
  van.add(tileHolder, holder);
};

const rangeInner = div({ id: "rani" });
const skyHolder = div();
const moon = div(
  { id: "moon", class: "sc" },
  div({ id: "mho" }, "Winner!"),
  canvas({ id: "canvas-2" }),
  div(
    { class: "cho" },
    [...new Array(5)].map(c => Cat(0))
  ),
);
const tunnel = div(
  { id: "tunnel", class: "sc" },
  canvas({ id: "canvas-1" }),
  skyHolder
);
const tile = div({ id: "tile", class: "sc" });
const start = div(
  {
    id: "start",
    class: "sc",
  },
  div(
    { class: "center" },
    div({ id: "t" }, "🌙 Celestial Paws ⭐️"),
    button(
      {
        id: "start-btn",
        onclick: () => {
          tile.scrollIntoView({ behavior: 'smooth' });
          startBoard(tile);
          startMusic();
        },
      },
      "Start"
    )
  ),
  div({ id: "start-cat" }, Cat(8))
);

van.add(document.body, moon, tunnel, tile, start);

sources.push(
  initScene(
    "canvas-1",
`#define s iTime
float h(float n){return fract(sin(n)*43758.5453123);}
float n3(vec3 x){vec3 p=floor(x),f=fract(x);f=f*f*(3.0-2.0*f);float n=p.x+p.y*57.0+p.z*113.0;return mix(mix(mix(h(n+0.0),h(n+1.0),f.x),mix(h(n+57.0),h(n+58.0),f.x),f.y),mix(mix(h(n+113.0),h(n+114.0),f.x),mix(h(n+170.0),h(n+171.0),f.x),f.y),f.z);}
float c(vec3 p,vec3 r){return length(p.xy-r.xy)-r.z;}
vec2 r(vec2 k,float a){return vec2(cos(a)*k.x-sin(a)*k.y,sin(a)*k.x+cos(a)*k.y);}
float d(vec3 p){p.z+=s*2.0;p.x+=sin(p.z*0.5)*1.5;return c(p,vec3(0.0,0.0,1.5));}
vec4 d4(vec3 p){float t=d(p);p.z+=s*4.0;t+=n3(p*1.75-s*1.5)*0.6;vec4 r=vec4(clamp(t,0.0,1.0));r.xyz=mix(vec3(1.0,1.0,1.0),vec3(0.0,0.0,0.05),r.x);return r;}
void mainImage(out vec4 f,in vec2 c){vec3 o=vec3(0.0,0.0,-3.0);vec3 d=normalize(vec3((-1.0+2.0*c.xy/iResolution.xy)*vec2(iResolution.x/iResolution.y,1.0),1.0));o.x+=cos(s)*1.0;d.xy=r(d.xy,s*0.05+cos(s*0.05));d.x+=sin(s-3.14*0.5)*0.5;float t=0.0;vec4 l=vec4(0.07,0.1,0.15,0.0);for(int i=0;i<220;i++){vec4 v=d4(o+d*t);v.w*=0.35;v.xyz*=v.w;l=l+v*(1.0-l.w);t+=0.1;}l.xyz/=l.w;l=sqrt(l);f=vec4(l.xyz,1.0)*0.6;}`
  )
);
sources.push(
  initScene(
    "canvas-2",
`#define S 0.6
mat2 r(float a){float c=cos(a),s=sin(a);return mat2(c,s,-s,c);}
float t(float x){return clamp(abs(fract(x)-0.5),0.01,0.49);}
vec2 t2(vec2 p){return vec2(t(p.x)+t(p.y),t(p.y+t(p.x)));}
float n2(vec2 p,float s){float c=1.8,d=2.5,n=0.0;vec2 w=p*r(p.x*0.06),b=w;for(float i=0.0;i<5.0;i++){vec2 l=t2(b*1.85)*0.75;l*=r(iTime*s);w-=l/d;b*=1.3;d*=0.45;c*=0.42;w*=1.21+(n-1.0)*0.02;n+=t(w.x+t(w.y))*c;w*=-mat2(0.95534,0.29552,-0.29552,0.95534);}return clamp(1.0/pow(n*29.0,1.3),0.0,0.55);}
float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,4.1414)))*43758.5453);}
vec4 a(vec3 o,vec3 d){vec4 c=vec4(0.0),l=vec4(0.0);for(float i=0.0;i<50.0;i++){float f=0.006*h(gl_FragCoord.xy)*smoothstep(0.0,15.0,i);float t=(0.8+pow(i,1.4)*0.002-o.y)/(d.y*2.0+0.4);t-=f;vec3 p=o+t*d;vec2 j=p.zx;float a=n2(j,S);vec4 s=vec4(0.0,0.0,0.0,a);s.rgb=(sin(1.0-vec3(2.15,-0.5,1.2)+i*0.043)*0.5+0.5)*a;l=mix(l,s,0.5);c+=l*exp2(-i*0.065-2.5)*smoothstep(0.0,5.0,i);}c*=clamp(d.y*15.0+0.4,0.0,1.0);return c*1.8;}
void mainImage(out vec4 fragColor,in vec2 c){vec2 q=c/iResolution.xy;vec2 p=q;p.x*=iResolution.x/iResolution.y;vec3 o=vec3(0.0,0.0,-6.7);vec3 d=normalize(vec3(p,1.3));vec3 l=vec3(0.0);float f=smoothstep(0.0,0.01,abs(d.y))*0.1+0.9;if(d.y>0.0){vec4 u=smoothstep(0.0,1.5,a(o,d))*f;l=l*(1.0-u.a)+u.rgb;}float m=dot(l.rgb,vec3(0.299,0.587,0.114));fragColor=vec4(l.rgb,m);}`
  )
);

requestAnimationFrame(() => {
  window.scrollTo(0, 0);
  start.scrollIntoView({ behavior: 'smooth' });
  render();
  setTimeout(() => {
    van.add(moon, div({ id: "range" }, rangeInner));
  }, 1000);
});
