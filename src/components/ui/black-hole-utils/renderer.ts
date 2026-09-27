/**
 * High-Performance 120Hz Black Hole WebGL & Physics Renderer
 * Designed for Akash AI Nexus
 * Simulates:
 * - Schwarzschild Event Horizon
 * - Relativistic Accretion Disk with Gravitational Lensing
 * - Einstein Ring Photon Sphere & Chromatic Dispersion
 * - Interactive Mouse Gravity Distortions
 */

export interface RendererOptions {
  canvas: HTMLCanvasElement;
}

export interface BlackHoleRenderer {
  ready: Promise<void>;
  dispose: () => void;
  resize: () => void;
}

const VERTEX_SHADER_SRC = `#version 300 es
in vec2 a_position;
out vec2 v_uv;
void main() {
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER_SRC = `#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 fragColor;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

// Simplex/hash noise for cosmic dust and accretion disk turbulence
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  vec2 shift = vec2(100.0);
  mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
  for (int i = 0; i < 4; ++i) {
    v += a * noise(p);
    p = rot * p * 2.0 + shift;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 st = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
  
  // Interactive mouse offset for celestial parallax
  vec2 mouseNorm = (u_mouse - 0.5) * 0.35;
  vec2 p = st - mouseNorm;

  float r = length(p);
  float theta = atan(p.y, p.x);

  // Black hole event horizon radius (Schwarschild radius ~ 0.22)
  float rs = 0.22;
  
  // Gravitational lensing ray deflection approximation
  float deflection = rs / max(r - rs * 0.45, 0.001);
  vec2 lensedP = p * (1.0 + deflection * 0.18);
  float lensedR = length(lensedP);
  float lensedTheta = atan(lensedP.y, lensedP.x);

  // Cosmic Deep Space background with stars
  vec2 starCoord = lensedP * 6.0;
  float stars = pow(hash(floor(starCoord)), 38.0) * 1.8;
  vec3 col = vec3(0.012, 0.008, 0.03) + vec3(stars);

  // Accretion disk coordinate transform (tilted elliptical projection)
  mat2 tilt = mat2(1.0, 0.0, -0.25, 0.42);
  vec2 diskP = tilt * lensedP;
  float diskR = length(diskP);
  float diskTheta = atan(diskP.y, diskP.x);

  // Accretion disk bounds: Inner edge ~ 0.25, Outer edge ~ 0.85
  if (diskR > 0.22 && diskR < 0.95) {
    float diskNorm = (diskR - 0.22) / (0.95 - 0.22);
    
    // Keplerian orbital speed (faster near the event horizon)
    float speed = 1.6 / (diskR + 0.1);
    float angle = diskTheta - u_time * speed * 0.5;
    
    // Plasma turbulence
    vec2 flow = vec2(diskR * 9.0, angle * 3.5);
    float plasma = fbm(flow + vec2(u_time * 0.4));
    
    // Relativistic Doppler beaming: approaching side is boosted & blue-shifted
    float doppler = 1.0 + 0.55 * cos(diskTheta);
    
    // Accretion disk radial intensity profile
    float intensity = exp(-pow(diskNorm - 0.18, 2.0) * 8.0) * plasma * doppler;
    
    // Dynamic color gradient: Amber-Gold core -> Magenta/Violet -> Electric Cyan edge
    vec3 coreColor = vec3(1.0, 0.65, 0.15); // incandescent plasma
    vec3 midColor = vec3(0.85, 0.2, 0.95);  // synchrotron purple
    vec3 outerColor = vec3(0.0, 0.85, 1.0);  // relativistic cyan
    
    vec3 diskColor = mix(coreColor, midColor, smoothstep(0.05, 0.45, diskNorm));
    diskColor = mix(diskColor, outerColor, smoothstep(0.45, 0.9, diskNorm));
    
    col += diskColor * intensity * 2.2;
  }

  // Photon Sphere / Einstein Ring Glow around r = rs * 1.5
  float photonDist = abs(r - rs * 1.38);
  float photonGlow = exp(-photonDist * 42.0) * 1.4;
  col += vec3(1.0, 0.82, 0.45) * photonGlow;

  // Secondary halo glow
  float outerHalo = exp(-abs(r - rs * 2.1) * 6.5) * 0.35;
  col += vec3(0.6, 0.3, 0.9) * outerHalo;

  // Relativistic Jets perpendicular to disk (soft vertical beams)
  float jetY = abs(p.y);
  float jetX = abs(p.x);
  float jetBeam = exp(-jetX * 35.0) * exp(-jetY * 1.5) * (0.2 + 0.15 * sin(u_time * 3.0 + jetY * 8.0));
  col += vec3(0.2, 0.7, 1.0) * jetBeam * 0.9;

  // The Event Horizon (Pure Black Void singularity)
  float horizon = smoothstep(rs, rs + 0.015, r);
  col *= horizon;

  // Subtle vignette
  col *= 1.0 - smoothstep(0.7, 1.4, length(st));

  fragColor = vec4(col, 1.0);
}
`;

export function createRenderer({ canvas }: RendererOptions): BlackHoleRenderer {
  let animationFrameId: number;
  let isDisposed = false;
  let mouseX = 0.5;
  let mouseY = 0.5;
  let targetMouseX = 0.5;
  let targetMouseY = 0.5;
  let lastTime = performance.now();
  let time = 0;

  // Create WebGL2 context or fallback
  const gl = canvas.getContext("webgl2", {
    alpha: false,
    antialias: true,
    powerPreference: "high-performance",
    preserveDrawingBuffer: false,
  });

  const readyPromise = new Promise<void>((resolve) => {
    // If WebGL2 is supported, set up shader pipeline
    if (gl) {
      initWebGL(gl);
    } else {
      // 2D fallback for extreme compatibility
      initCanvas2D(canvas);
    }
    resolve();
  });

  function initWebGL(gl: WebGL2RenderingContext) {
    const compileShader = (type: number, src: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.warn(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vert = compileShader(gl.VERTEX_SHADER, VERTEX_SHADER_SRC);
    const frag = compileShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER_SRC);

    if (!vert || !frag) {
      initCanvas2D(canvas);
      return;
    }

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vert);
    gl.attachShader(program, frag);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.warn(gl.getProgramInfoLog(program));
      initCanvas2D(canvas);
      return;
    }

    gl.useProgram(program);

    // Fullscreen quad
    const quadBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const posLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uResLoc = gl.getUniformLocation(program, "u_resolution");
    const uTimeLoc = gl.getUniformLocation(program, "u_time");
    const uMouseLoc = gl.getUniformLocation(program, "u_mouse");

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.clientWidth * dpr;
      const height = canvas.clientHeight * dpr;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    };

    resize();

    // Render Loop (120Hz optimized)
    const render = (now: number) => {
      if (isDisposed) return;

      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      time += dt;

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      resize();

      gl.useProgram(program);
      gl.uniform2f(uResLoc, canvas.width, canvas.height);
      gl.uniform1f(uTimeLoc, time);
      gl.uniform2f(uMouseLoc, mouseX, mouseY);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
  }

  // Ultra-crisp 2D Fallback if WebGL2 is disabled
  function initCanvas2D(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    interface Particle {
      r: number;
      theta: number;
      speed: number;
      size: number;
      hue: number;
    }

    const particles: Particle[] = [];
    const count = 400;
    for (let i = 0; i < count; i++) {
      particles.push({
        r: 50 + Math.random() * 320,
        theta: Math.random() * Math.PI * 2,
        speed: 0.5 + Math.random() * 1.5,
        size: 1 + Math.random() * 2.5,
        hue: Math.random() > 0.5 ? 35 : 280,
      });
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
    };
    resize();

    const render = (now: number) => {
      if (isDisposed) return;
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      time += dt;

      resize();
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      ctx.fillStyle = "#030014";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Accretion disk glow
      const grad = ctx.createRadialGradient(cx, cy, 30, cx, cy, 260);
      grad.addColorStop(0, "rgba(0, 0, 0, 1)");
      grad.addColorStop(0.2, "rgba(255, 170, 64, 0.8)");
      grad.addColorStop(0.5, "rgba(168, 85, 247, 0.4)");
      grad.addColorStop(0.8, "rgba(6, 182, 212, 0.15)");
      grad.addColorStop(1, "rgba(3, 0, 20, 0)");

      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(1, 0.38);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(0, 0, 260, 0, Math.PI * 2);
      ctx.fill();

      // Inflowing particles
      for (const p of particles) {
        p.theta += (p.speed / (p.r * 0.08 + 1)) * dt * 3.5;
        p.r -= dt * 18;
        if (p.r < 40) p.r = 300 + Math.random() * 50;

        const px = Math.cos(p.theta) * p.r;
        const py = Math.sin(p.theta) * p.r;

        ctx.fillStyle = p.hue === 35 ? "rgba(251, 191, 36, 0.8)" : "rgba(192, 132, 252, 0.8)";
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // Event Horizon Void
      ctx.fillStyle = "#000000";
      ctx.beginPath();
      ctx.arc(cx, cy, 48, 0, Math.PI * 2);
      ctx.fill();

      // Photon Ring
      ctx.strokeStyle = "rgba(255, 200, 100, 0.9)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(cx, cy, 50, 0, Math.PI * 2);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
  }

  // Pointer event tracking for gravitational lensing interaction
  const handlePointerMove = (e: PointerEvent) => {
    const rect = canvas.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      targetMouseX = (e.clientX - rect.left) / rect.width;
      targetMouseY = 1.0 - (e.clientY - rect.top) / rect.height;
    }
  };

  window.addEventListener("pointermove", handlePointerMove, { passive: true });

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = canvas.clientWidth * dpr;
    canvas.height = canvas.clientHeight * dpr;
  };

  const ro = new ResizeObserver(() => resize());
  ro.observe(canvas);

  const dispose = () => {
    isDisposed = true;
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener("pointermove", handlePointerMove);
    ro.disconnect();
  };

  return {
    ready: readyPromise,
    dispose,
    resize,
  };
}
