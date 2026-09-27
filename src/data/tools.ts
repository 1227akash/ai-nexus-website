import { AITool } from '../types';

export const AI_TOOLS: AITool[] = [
  {
    "id": "i-image-studio",
    "name": "i-ImageStudio",
    "category": "new-releases",
    "tagline": "Interactive Quantum Latent Diffusion Canvas",
    "description": "High-speed generative canvas simulator featuring real-time style transfers, cosmic seeds, prompt modifiers, and multi-ratio previews.",
    "tags": [
      "i-tool",
      "Generative Art",
      "Canvas",
      "Interactive",
      "Diffusion"
    ],
    "isNewRelease": true,
    "isITool": true,
    "rating": 4.98,
    "starsCount": 14200,
    "url": "https://blackforestlabs.ai/",
    "badge": "NEW RELEASE ★",
    "features": [
      "Real-time canvas rendering",
      "120Hz smooth preview",
      "Aspect ratio presets",
      "Style matrix switcher"
    ],
    "pricing": "Free",
    "gradient": "from-amber-500 via-orange-500 to-rose-600"
  },
  {
    "id": "i-prompt-enhancer",
    "name": "i-PromptEnhancer",
    "category": "new-releases",
    "tagline": "Neuro-Semantic Prompt Alchemist",
    "description": "Turn elementary one-line ideas into masterclass prompts tailored for Midjourney, Stable Diffusion, Claude, and GPT-4o.",
    "tags": [
      "i-tool",
      "Prompt Engineering",
      "NLP",
      "Optimizer"
    ],
    "isNewRelease": true,
    "isITool": true,
    "rating": 4.95,
    "starsCount": 9800,
    "url": "https://promptbase.com/",
    "badge": "POPULAR i-TOOL",
    "features": [
      "Multi-engine prompt target",
      "Negative prompt generation",
      "Lighting & camera tokens",
      "One-click copy"
    ],
    "pricing": "Free",
    "gradient": "from-purple-500 via-violet-600 to-indigo-700"
  },
  {
    "id": "i-voice-matrix",
    "name": "i-VoiceMatrix",
    "category": "new-releases",
    "tagline": "Acoustic Synthesizer & Voice Equalizer",
    "description": "Interactive browser-based audio waveform synthesizer and vocal resonator with live Web Audio API harmonic controls.",
    "tags": [
      "i-tool",
      "Audio AI",
      "Web Audio API",
      "Speech Synth"
    ],
    "isNewRelease": true,
    "isITool": true,
    "rating": 4.91,
    "starsCount": 8400,
    "url": "https://elevenlabs.io/",
    "badge": "NEW RELEASE",
    "features": [
      "Live oscillator synthesis",
      "Waveform visualizer",
      "Formant control",
      "Cyberpunk acoustic pitch"
    ],
    "pricing": "Free",
    "gradient": "from-cyan-400 via-teal-500 to-emerald-600"
  },
  {
    "id": "i-code-architect",
    "name": "i-CodeArchitect",
    "category": "new-releases",
    "tagline": "Full-Stack Agentic Code Synthesis Engine",
    "description": "Interactive live code runner and template architect for Three.js shaders, WebGL pipelines, and AI agent architectures.",
    "tags": [
      "i-tool",
      "Code AI",
      "WebGL",
      "Three.js",
      "Shader"
    ],
    "isNewRelease": true,
    "isITool": true,
    "rating": 4.97,
    "starsCount": 16500,
    "url": "https://cursor.com/",
    "badge": "FEATURED",
    "features": [
      "Instant code generation",
      "GLSL Black Hole presets",
      "Multi-file scaffold",
      "Syntax highlighting"
    ],
    "pricing": "Free",
    "gradient": "from-blue-500 via-indigo-600 to-purple-600"
  },
  {
    "id": "i-vision-pro",
    "name": "i-VisionPro",
    "category": "new-releases",
    "tagline": "Multimodal Neural Vision & Object Inspector",
    "description": "High-precision visual reasoning and scene decomposition inspects bounding boxes, depth maps, and aesthetic metrics.",
    "tags": [
      "i-tool",
      "Computer Vision",
      "Segmentation",
      "Depth Map"
    ],
    "isNewRelease": true,
    "isITool": true,
    "rating": 4.89,
    "starsCount": 7100,
    "url": "https://roboflow.com/",
    "features": [
      "Neural bounding box inference",
      "Depth estimation overlay",
      "Color histogram telemetry",
      "Zero-shot classification"
    ],
    "pricing": "Free",
    "gradient": "from-pink-500 via-rose-600 to-amber-500"
  },
  {
    "id": "i-agent-x",
    "name": "i-AgentX",
    "category": "new-releases",
    "tagline": "Autonomous Multi-Agent Swarm Simulator",
    "description": "Design and simulate cooperative autonomous agent swarms running iterative reasoning loops with real-time telemetry execution.",
    "tags": [
      "i-tool",
      "Agentic AI",
      "Swarm Intelligence",
      "Autonomous"
    ],
    "isNewRelease": true,
    "isITool": true,
    "rating": 4.96,
    "starsCount": 18900,
    "url": "https://langchain.com/",
    "badge": "NEW RELEASE ★",
    "features": [
      "Swarm consensus loop",
      "Step-by-step reasoning trace",
      "Task orchestration graph",
      "Memory checkpointing"
    ],
    "pricing": "Free",
    "gradient": "from-emerald-400 via-cyan-500 to-blue-600"
  },
  {
    "id": "chatgpt",
    "name": "ChatGPT",
    "category": "text-llm",
    "tagline": "Conversational Frontier Intelligence & GPT-4o",
    "description": "OpenAI's state-of-the-art conversational model with multimodal reasoning, code execution, web browsing, and custom GPTs.",
    "tags": [
      "LLM",
      "Conversational",
      "OpenAI",
      "GPT-4o"
    ],
    "rating": 4.97,
    "starsCount": 120000,
    "url": "https://chatgpt.com/",
    "features": [
      "Advanced Reasoning",
      "Vision & Voice",
      "Data Analysis",
      "Custom GPTs"
    ],
    "pricing": "Freemium",
    "gradient": "from-emerald-500 to-teal-700"
  },
  {
    "id": "claude",
    "name": "Claude",
    "category": "text-llm",
    "tagline": "Nuanced Reasoning & Artifacts by Anthropic",
    "description": "Next-generation model family featuring Claude 3.5 Sonnet with 200k token context, human-level coding, and interactive artifacts.",
    "tags": [
      "Reasoning",
      "Coding",
      "Anthropic",
      "Artifacts"
    ],
    "rating": 4.98,
    "starsCount": 95000,
    "url": "https://claude.ai/",
    "features": [
      "200k Context Window",
      "Interactive Artifacts",
      "Precise Coding",
      "Safety & Alignment"
    ],
    "pricing": "Freemium",
    "gradient": "from-amber-600 to-orange-700"
  },
  {
    "id": "gemini",
    "name": "Gemini",
    "category": "text-llm",
    "tagline": "Google's 2M Token Multimodal Pioneer",
    "description": "Google DeepMind's flagship native multimodal AI with 2-million-token context, Google Workspace integration, and deep reasoning.",
    "tags": [
      "Multimodal",
      "Google",
      "DeepMind",
      "2M Context"
    ],
    "rating": 4.94,
    "starsCount": 88000,
    "url": "https://gemini.google.com/",
    "features": [
      "2M Token Window",
      "Google Ecosystem Sync",
      "Multimodal Video/Audio",
      "Deep Research"
    ],
    "pricing": "Freemium",
    "gradient": "from-blue-500 via-indigo-500 to-purple-600"
  },
  {
    "id": "microsoft-copilot",
    "name": "Microsoft Copilot",
    "category": "text-llm",
    "tagline": "AI Companion for Web & Enterprise",
    "description": "Integrated conversational intelligence powered by GPT-4 and DALL-E 3 with web grounding and Office 365 synergy.",
    "tags": [
      "Enterprise",
      "Search",
      "Microsoft",
      "Productivity"
    ],
    "rating": 4.88,
    "starsCount": 62000,
    "url": "https://copilot.microsoft.com/",
    "features": [
      "Web-grounded Answers",
      "Image Creation",
      "Commercial Data Protection",
      "Document Summaries"
    ],
    "pricing": "Freemium",
    "gradient": "from-cyan-500 to-blue-700"
  },
  {
    "id": "perplexity",
    "name": "Perplexity",
    "category": "text-llm",
    "tagline": "Conversational Answer Engine with Citations",
    "description": "Next-generation AI search engine delivering direct, synthesized answers backed by verifiable live web citations.",
    "tags": [
      "Search",
      "Research",
      "Citations",
      "Pro Search"
    ],
    "rating": 4.95,
    "starsCount": 74000,
    "url": "https://www.perplexity.ai/",
    "features": [
      "Live Source Citations",
      "Pro Multi-step Search",
      "Collection Spaces",
      "Academic Filtering"
    ],
    "pricing": "Freemium",
    "gradient": "from-teal-400 to-cyan-700"
  },
  {
    "id": "grok",
    "name": "Grok",
    "category": "text-llm",
    "tagline": "Real-time Frontier Intelligence by xAI",
    "description": "xAI's high-speed frontier model with real-time global knowledge access, witty commentary, and deep reasoning.",
    "tags": [
      "Real-time",
      "xAI",
      "Reasoning",
      "Uncensored"
    ],
    "rating": 4.89,
    "starsCount": 54000,
    "url": "https://grok.com/",
    "features": [
      "Live Global Telemetry",
      "Fun & Normal Modes",
      "Deep Reasoning",
      "Code Generation"
    ],
    "pricing": "Freemium",
    "gradient": "from-slate-700 via-slate-900 to-cyan-900"
  },
  {
    "id": "deepseek",
    "name": "DeepSeek",
    "category": "text-llm",
    "tagline": "Open Weights Mathematical & Coding Powerhouse",
    "description": "Ultra-efficient reasoning models DeepSeek-V3 and R1 offering frontier-grade math, coding, and logical chain-of-thought.",
    "tags": [
      "DeepSeek-R1",
      "Math",
      "Reasoning",
      "Open Weights"
    ],
    "rating": 4.96,
    "starsCount": 85000,
    "url": "https://chat.deepseek.com/",
    "features": [
      "Chain of Thought Reasoning",
      "Competitive Coding",
      "Extreme Cost Efficiency",
      "Markdown Math Render"
    ],
    "pricing": "Freemium",
    "gradient": "from-blue-600 to-indigo-800"
  },
  {
    "id": "mistral-le-chat",
    "name": "Mistral Le Chat",
    "category": "text-llm",
    "tagline": "European Open & Efficient AI Platform",
    "description": "Mistral AI's conversational interface offering Mistral Large, Pixtral vision, web search, and customizable agents.",
    "tags": [
      "Mistral Large",
      "Open Source",
      "Multimodal",
      "Canvas"
    ],
    "rating": 4.9,
    "starsCount": 49000,
    "url": "https://chat.mistral.ai/",
    "features": [
      "Multilingual Mastery",
      "Canvas Ideation",
      "Document Understanding",
      "Function Calling"
    ],
    "pricing": "Freemium",
    "gradient": "from-orange-500 to-amber-700"
  },
  {
    "id": "meta-ai",
    "name": "Meta AI",
    "category": "text-llm",
    "tagline": "Llama 3 Powered Universal Assistant",
    "description": "Meta's flagship AI assistant built on open-weights Llama 3 models with real-time web search and fast image generation.",
    "tags": [
      "Llama 3",
      "Meta",
      "Free",
      "Social Sync"
    ],
    "rating": 4.86,
    "starsCount": 58000,
    "url": "https://www.meta.ai/",
    "features": [
      "Instant Image Generation",
      "Llama 3.3 Core",
      "Reels & Social Integration",
      "Free Global Access"
    ],
    "pricing": "Free",
    "gradient": "from-blue-600 via-indigo-600 to-purple-700"
  },
  {
    "id": "qwen",
    "name": "Qwen",
    "category": "text-llm",
    "tagline": "Alibaba's Leading Multilingual Foundation Model",
    "description": "Qwen2.5 foundation series by Alibaba Cloud offering superior math, coding, vision, and comprehensive multilingual capabilities.",
    "tags": [
      "Qwen2.5",
      "Alibaba",
      "Multilingual",
      "Math"
    ],
    "rating": 4.91,
    "starsCount": 51000,
    "url": "https://chat.qwen.ai/",
    "features": [
      "128k Context",
      "Advanced Code & Math",
      "Vision Language Understanding",
      "Tool Use"
    ],
    "pricing": "Free",
    "gradient": "from-purple-600 to-violet-800"
  },
  {
    "id": "kimi",
    "name": "Kimi",
    "category": "text-llm",
    "tagline": "Long-Context File Analysis & Reasoning by Moonshot",
    "description": "Moonshot AI's breakthrough long-context assistant capable of reading and cross-referencing multi-million word files instantly.",
    "tags": [
      "Long Context",
      "File Reader",
      "Moonshot",
      "Research"
    ],
    "rating": 4.88,
    "starsCount": 42000,
    "url": "https://www.kimi.com/",
    "features": [
      "2M Token Files",
      "PDF Deep Extraction",
      "Fast Synthesis",
      "Academic Citations"
    ],
    "pricing": "Freemium",
    "gradient": "from-indigo-500 to-purple-700"
  },
  {
    "id": "poe",
    "name": "Poe",
    "category": "text-llm",
    "tagline": "Multi-Model Ecosystem & Custom Bot Creator",
    "description": "Quora's unified AI platform providing instant access to all frontier models, custom bot creation, and monetization.",
    "tags": [
      "Multi-Model",
      "Bots",
      "Aggregator",
      "Poe"
    ],
    "rating": 4.87,
    "starsCount": 46000,
    "url": "https://poe.com/",
    "features": [
      "All Models in One Tab",
      "Bot Monetization",
      "Custom Knowledge Bases",
      "Server Bots"
    ],
    "pricing": "Freemium",
    "gradient": "from-violet-600 to-pink-600"
  },
  {
    "id": "you-com",
    "name": "You.com",
    "category": "text-llm",
    "tagline": "Customizable Search Assistant for Professionals",
    "description": "Search and productivity assistant with Smart, Genius, Research, and Create modes for nuanced multi-source workflows.",
    "tags": [
      "Search",
      "Research",
      "Genius Mode",
      "Workflows"
    ],
    "rating": 4.85,
    "starsCount": 38000,
    "url": "https://you.com/",
    "features": [
      "Multi-file Uploads",
      "Python Code Execution",
      "Citation Web Search",
      "Custom Team Workspaces"
    ],
    "pricing": "Freemium",
    "gradient": "from-blue-400 to-indigo-600"
  },
  {
    "id": "hugging-face",
    "name": "Hugging Face",
    "category": "text-llm",
    "tagline": "The Epicenter of Open Machine Learning",
    "description": "The world's central collaboration hub for open-source AI models, datasets, spaces, and WebGPU browser demos.",
    "tags": [
      "Open Source",
      "Models",
      "Datasets",
      "Spaces"
    ],
    "rating": 4.99,
    "starsCount": 150000,
    "url": "https://huggingface.co/",
    "features": [
      "1M+ Open Models",
      "Community Spaces",
      "Inference Endpoints",
      "Transformers Library"
    ],
    "pricing": "Open Source",
    "gradient": "from-amber-500 to-yellow-600"
  },
  {
    "id": "notebooklm",
    "name": "NotebookLM",
    "category": "text-llm",
    "tagline": "Grounded Research Partner with Audio Overviews",
    "description": "Google's personalized AI notebook that grounds strictly in your uploaded notes, PDFs, and generates realistic Audio Podcasts.",
    "tags": [
      "Grounded Notes",
      "Audio Overviews",
      "Google",
      "Research"
    ],
    "rating": 4.96,
    "starsCount": 79000,
    "url": "https://notebooklm.google.com/",
    "features": [
      "Deep Audio Podcasts",
      "Zero Hallucination Grounding",
      "Source Citation Guide",
      "Multi-format Support"
    ],
    "pricing": "Free",
    "gradient": "from-cyan-500 via-blue-600 to-indigo-700"
  },
  {
    "id": "phind",
    "name": "Phind",
    "category": "text-llm",
    "tagline": "Intelligent Search Engine for Developers",
    "description": "Specialized search and problem-solving assistant for software engineers, delivering verified code solutions and technical docs.",
    "tags": [
      "Developer Search",
      "Code Solutions",
      "Technical Docs",
      "Fast"
    ],
    "rating": 4.92,
    "starsCount": 44000,
    "url": "https://www.phind.com/",
    "features": [
      "Code-grounded Search",
      "Instant Debugging",
      "VS Code Extension",
      "Technical Citations"
    ],
    "pricing": "Freemium",
    "gradient": "from-indigo-600 to-blue-800"
  },
  {
    "id": "character-ai",
    "name": "Character.AI",
    "category": "text-llm",
    "tagline": "Hyper-Expressive Persona & Roleplay Intelligence",
    "description": "Global platform for conversational AI characters, historical figures, gaming companions, and creative writing personas.",
    "tags": [
      "Personas",
      "Roleplay",
      "Creative Writing",
      "Voices"
    ],
    "rating": 4.89,
    "starsCount": 82000,
    "url": "https://character.ai/",
    "features": [
      "Thousands of Personas",
      "Custom Voice Synthesis",
      "Group Chat Rooms",
      "Memory Anchors"
    ],
    "pricing": "Freemium",
    "gradient": "from-purple-500 to-rose-600"
  },
  {
    "id": "pi",
    "name": "Pi",
    "category": "text-llm",
    "tagline": "Empathetic & Conversational Personal AI",
    "description": "Inflection AI's supportive conversational partner engineered for emotional resonance, active listening, and fluid spoken dialogue.",
    "tags": [
      "Empathetic",
      "Audio Voice",
      "Conversational",
      "Inflection"
    ],
    "rating": 4.9,
    "starsCount": 48000,
    "url": "https://pi.ai/",
    "features": [
      "Ultra-natural Spoken Voice",
      "Empathetic Dialogue",
      "Daily Reflection",
      "Free Access"
    ],
    "pricing": "Free",
    "gradient": "from-emerald-500 to-teal-700"
  },
  {
    "id": "replika",
    "name": "Replika",
    "category": "text-llm",
    "tagline": "The AI Companion Who Cares",
    "description": "Personal AI friend with customizable 3D avatars, voice calls, augmented reality, and personalized emotional growth tracking.",
    "tags": [
      "Companion",
      "3D Avatar",
      "Emotional AI",
      "Voice Calls"
    ],
    "rating": 4.82,
    "starsCount": 39000,
    "url": "https://replika.com/",
    "features": [
      "3D Avatar Customization",
      "AR Interaction",
      "Memory Diary",
      "Voice Calls"
    ],
    "pricing": "Freemium",
    "gradient": "from-pink-500 to-rose-700"
  },
  {
    "id": "consensus",
    "name": "Consensus",
    "category": "text-llm",
    "tagline": "AI Search Engine for Scientific Research",
    "description": "Synthesizes peer-reviewed academic literature, extraction summaries, and consensus meters across 200M+ research papers.",
    "tags": [
      "Academic",
      "Science",
      "Peer-reviewed",
      "Consensus"
    ],
    "rating": 4.93,
    "starsCount": 41000,
    "url": "https://consensus.app/",
    "features": [
      "Consensus Meter",
      "Peer-Reviewed Grounding",
      "GPT-4 Research Extraction",
      "Zotero Integration"
    ],
    "pricing": "Freemium",
    "gradient": "from-sky-500 to-blue-700"
  },
  {
    "id": "github-copilot",
    "name": "GitHub Copilot",
    "category": "code-3d",
    "tagline": "The World's Most Deployed AI Pair Programmer",
    "description": "Autocomplete suggestions, multi-file code editing, and natural language terminal integration inside VS Code and JetBrains.",
    "tags": [
      "GitHub",
      "IDE Extension",
      "Autocomplete",
      "Enterprise"
    ],
    "rating": 4.93,
    "starsCount": 92000,
    "url": "https://github.com/features/copilot",
    "features": [
      "Multi-model Switcher",
      "Copilot Workspace",
      "PR Summaries",
      "Terminal CLI Assist"
    ],
    "pricing": "Paid",
    "gradient": "from-slate-800 to-slate-950"
  },
  {
    "id": "cursor",
    "name": "Cursor",
    "category": "code-3d",
    "tagline": "The AI-First Code Editor Built for Speed",
    "description": "VS Code fork engineered from the ground up for agentic multi-file editing, predictive code tab completions, and codebase indexing.",
    "tags": [
      "AI Editor",
      "Tab Completion",
      "Composer",
      "Agentic"
    ],
    "rating": 4.99,
    "starsCount": 110000,
    "url": "https://cursor.com/",
    "features": [
      "Composer Multi-file Edit",
      "Next Edit Prediction",
      "Entire Codebase Chat",
      "Shadow Workspace"
    ],
    "pricing": "Freemium",
    "gradient": "from-indigo-600 via-purple-600 to-cyan-500"
  },
  {
    "id": "replit",
    "name": "Replit",
    "category": "code-3d",
    "tagline": "Collaborative Browser IDE & Agentic Deployments",
    "description": "Complete in-browser software development environment with Replit Agent for building full-stack applications from text prompts.",
    "tags": [
      "Browser IDE",
      "Replit Agent",
      "Deployments",
      "Full-Stack"
    ],
    "rating": 4.91,
    "starsCount": 68000,
    "url": "https://replit.com/",
    "features": [
      "Replit Agent Autonomous Build",
      "Instant Cloud Deploy",
      "Multiplayer Coding",
      "PostgreSQL Built-in"
    ],
    "pricing": "Freemium",
    "gradient": "from-orange-500 to-red-600"
  },
  {
    "id": "windsurf",
    "name": "Windsurf",
    "category": "code-3d",
    "tagline": "The Revolutionary Agentic IDE by Codeium",
    "description": "Next-gen editor featuring Flows and Cascade to coordinate developer intent and AI agent execution simultaneously.",
    "tags": [
      "Cascade",
      "Flows",
      "Codeium",
      "Agentic IDE"
    ],
    "rating": 4.95,
    "starsCount": 57000,
    "url": "https://windsurf.com/",
    "features": [
      "Cascade Real-time Agent",
      "Supercomplete Prediction",
      "Deep AST Codebase Indexing",
      "Terminal Autonomy"
    ],
    "pricing": "Freemium",
    "gradient": "from-cyan-500 via-blue-600 to-indigo-700"
  },
  {
    "id": "lovable",
    "name": "Lovable",
    "category": "code-3d",
    "tagline": "Turn Ideas into Full-Stack Web Apps in Minutes",
    "description": "Prompt-driven web application builder generating clean React, Tailwind, and Supabase backends with live collaborative previews.",
    "tags": [
      "Full-Stack",
      "React",
      "Supabase",
      "No-Code/Code"
    ],
    "rating": 4.96,
    "starsCount": 49000,
    "url": "https://lovable.dev/",
    "features": [
      "Clean Git Code Export",
      "Supabase DB Integration",
      "Live Preview & Edit",
      "Instant Domain Publish"
    ],
    "pricing": "Freemium",
    "gradient": "from-rose-500 to-pink-700"
  },
  {
    "id": "bolt-new",
    "name": "Bolt.new",
    "category": "code-3d",
    "tagline": "In-Browser Full-Stack Sandbox with WebContainers",
    "description": "StackBlitz powered environment that prompts, executes, installs npm packages, and runs full Node.js servers in the browser.",
    "tags": [
      "WebContainers",
      "Full-Stack",
      "StackBlitz",
      "Browser VM"
    ],
    "rating": 4.94,
    "starsCount": 62000,
    "url": "https://bolt.new/",
    "features": [
      "In-browser Node.js VM",
      "Full npm ecosystem",
      "One-click Netlify Deploy",
      "Interactive Error Fixing"
    ],
    "pricing": "Freemium",
    "gradient": "from-blue-600 to-cyan-600"
  },
  {
    "id": "v0",
    "name": "v0",
    "category": "code-3d",
    "tagline": "Generative UI System by Vercel",
    "description": "Vercel's generative UI assistant that crafts polished, responsive React components using Tailwind CSS and shadcn/ui.",
    "tags": [
      "Vercel",
      "shadcn/ui",
      "Tailwind CSS",
      "Generative UI"
    ],
    "rating": 4.97,
    "starsCount": 76000,
    "url": "https://v0.dev/",
    "features": [
      "Figma-grade Component Gen",
      "One-click Copy Code",
      "Next.js Integration",
      "Live Interactive Canvas"
    ],
    "pricing": "Freemium",
    "gradient": "from-slate-900 to-slate-950"
  },
  {
    "id": "devin",
    "name": "Devin",
    "category": "code-3d",
    "tagline": "The World's First Fully Autonomous AI Software Engineer",
    "description": "Cognition's autonomous engineer equipped with its own shell, code editor, browser, and end-to-end task execution workflow.",
    "tags": [
      "Autonomous",
      "Software Engineer",
      "Cognition",
      "Full Autonomy"
    ],
    "rating": 4.92,
    "starsCount": 58000,
    "url": "https://devin.ai/",
    "features": [
      "Autonomous Shell & Browser",
      "Bug Resolution in Repos",
      "Long-term Planning",
      "Self-Debugging"
    ],
    "pricing": "Paid",
    "gradient": "from-emerald-500 to-teal-800"
  },
  {
    "id": "tabnine",
    "name": "Tabnine",
    "category": "code-3d",
    "tagline": "Secure, Private AI Code Assistant for Enterprise",
    "description": "Private AI code assistant ensuring zero code training on your IP, on-premises deployment, and context-aware completions.",
    "tags": [
      "Enterprise",
      "Privacy",
      "Zero Data Retention",
      "On-Prem"
    ],
    "rating": 4.86,
    "starsCount": 38000,
    "url": "https://www.tabnine.com/",
    "features": [
      "100% Code Privacy",
      "Local or On-Prem Hosting",
      "Multi-IDE Support",
      "Personalized Team Models"
    ],
    "pricing": "Freemium",
    "gradient": "from-blue-700 to-indigo-900"
  },
  {
    "id": "amazon-q-developer",
    "name": "Amazon Q Developer",
    "category": "code-3d",
    "tagline": "AWS Cloud & Architecture Specialist AI",
    "description": "AI developer companion optimized for AWS architecture, automated code transformation (Java upgrades), and security audits.",
    "tags": [
      "AWS",
      "Cloud",
      "Java Upgrade",
      "Security Scanning"
    ],
    "rating": 4.88,
    "starsCount": 43000,
    "url": "https://aws.amazon.com/q/developer/",
    "features": [
      "Automated Java Upgrades",
      "AWS Architecture Expert",
      "Security Vulnerability Scan",
      "CLI Shell Support"
    ],
    "pricing": "Freemium",
    "gradient": "from-amber-600 to-orange-800"
  },
  {
    "id": "google-ai-studio",
    "name": "Google AI Studio",
    "category": "code-3d",
    "tagline": "Rapid Prototyping IDE for Gemini APIs",
    "description": "Google's web-based developer playground for prompt tuning, multimodal experiments, and instant code generation with Gemini models.",
    "tags": [
      "Gemini API",
      "Playground",
      "Google AI",
      "Developer"
    ],
    "rating": 4.95,
    "starsCount": 65000,
    "url": "https://aistudio.google.com/",
    "features": [
      "System Instruction Tuning",
      "Free Tier API Keys",
      "Multimodal File Uploads",
      "SDK Code Export"
    ],
    "pricing": "Free",
    "gradient": "from-blue-500 via-indigo-600 to-cyan-500"
  },
  {
    "id": "google-antigravity",
    "name": "Google Antigravity",
    "category": "code-3d",
    "tagline": "Agentic AI Developer Framework & Platform",
    "description": "Google's cutting-edge agentic coding assistant and execution platform designed for complex full-stack pair programming.",
    "tags": [
      "Antigravity",
      "Google",
      "Autonomous Agent",
      "Pair Programming"
    ],
    "rating": 4.98,
    "starsCount": 81000,
    "url": "https://antigravity.google/",
    "features": [
      "Deep Repo Understanding",
      "Terminal Execution",
      "MCP Tool Integration",
      "Browser Automation"
    ],
    "pricing": "Free",
    "gradient": "from-purple-600 to-indigo-800"
  },
  {
    "id": "firebase-studio",
    "name": "Firebase Studio",
    "category": "code-3d",
    "tagline": "Next-Gen Cloud App Building Platform",
    "description": "Full-stack development environment for rapid application building, schema design, backend automation, and cloud hosting.",
    "tags": [
      "Firebase",
      "Full-Stack",
      "Cloud",
      "App Builder"
    ],
    "rating": 4.9,
    "starsCount": 47000,
    "url": "https://firebase.studio/",
    "features": [
      "Cloud Firestore Sync",
      "App Hosting Deploy",
      "Visual Schema Builder",
      "Auth & Rule Guard"
    ],
    "pricing": "Freemium",
    "gradient": "from-amber-500 to-orange-600"
  },
  {
    "id": "blackbox-ai",
    "name": "BLACKBOX AI",
    "category": "code-3d",
    "tagline": "Fast Code Search, Autocomplete & Repo Review",
    "description": "Developer-focused AI assistant built for finding and synthesizing code snippets, extracting text from videos, and code review.",
    "tags": [
      "Code Search",
      "Autocomplete",
      "Debugging",
      "Fast"
    ],
    "rating": 4.84,
    "starsCount": 36000,
    "url": "https://www.blackbox.ai/",
    "features": [
      "Repo Level Search",
      "Code Autocomplete",
      "Web Browser Integration",
      "Snippet Extraction"
    ],
    "pricing": "Freemium",
    "gradient": "from-slate-900 to-blue-900"
  },
  {
    "id": "coderabbit",
    "name": "CodeRabbit",
    "category": "code-3d",
    "tagline": "AI-Powered Automated Pull Request Reviewer",
    "description": "Deep code review platform that comments directly on GitHub/GitLab PRs with actionable code fixes, AST analysis, and security checks.",
    "tags": [
      "PR Review",
      "Code Quality",
      "GitHub/GitLab",
      "Security"
    ],
    "rating": 4.96,
    "starsCount": 52000,
    "url": "https://www.coderabbit.ai/",
    "features": [
      "Line-by-line Code Fixes",
      "Interactive Chat in PR",
      "Architecture Diagrams",
      "Zero Hallucination Mode"
    ],
    "pricing": "Freemium",
    "gradient": "from-orange-500 to-rose-700"
  },
  {
    "id": "sourcegraph-cody",
    "name": "Sourcegraph Cody",
    "category": "code-3d",
    "tagline": "Codebase-Aware AI for Enterprise Monorepos",
    "description": "Leverages Sourcegraph's massive code search graph to deliver hyper-accurate answers and edits across multi-gigabyte codebases.",
    "tags": [
      "Code Search",
      "Monorepo",
      "Enterprise",
      "Graph Index"
    ],
    "rating": 4.92,
    "starsCount": 48000,
    "url": "https://sourcegraph.com/cody",
    "features": [
      "Multi-repo Context",
      "Multi-model Choice",
      "Unit Test Generation",
      "Codebase Graph Search"
    ],
    "pricing": "Freemium",
    "gradient": "from-purple-700 to-indigo-900"
  },
  {
    "id": "aider",
    "name": "Aider",
    "category": "code-3d",
    "tagline": "Pair Programming in Your Terminal via Git",
    "description": "Command-line AI coding tool that works directly with your local git repository to edit files and automatically create clean commits.",
    "tags": [
      "CLI",
      "Terminal",
      "Git Pair",
      "Open Source"
    ],
    "rating": 4.97,
    "starsCount": 59000,
    "url": "https://aider.chat/",
    "features": [
      "Automatic Git Commits",
      "Repo Map Graph",
      "Multi-file Refactoring",
      "Works with Local LLMs"
    ],
    "pricing": "Open Source",
    "gradient": "from-emerald-600 to-teal-900"
  },
  {
    "id": "continue",
    "name": "Continue",
    "category": "code-3d",
    "tagline": "Open-Source AI Code Assistant for VS Code & JetBrains",
    "description": "Modular, extensible open-source assistant that connects any local or cloud LLM to your editor with custom slash commands.",
    "tags": [
      "Open Source",
      "VS Code",
      "JetBrains",
      "Local LLMs"
    ],
    "rating": 4.93,
    "starsCount": 45000,
    "url": "https://www.continue.dev/",
    "features": [
      "Connect Ollama / LM Studio",
      "Custom Slash Commands",
      "Context Providers",
      "Zero Telemetry Option"
    ],
    "pricing": "Open Source",
    "gradient": "from-blue-600 to-indigo-800"
  },
  {
    "id": "cline",
    "name": "Cline",
    "category": "code-3d",
    "tagline": "Autonomous Coding Agent for VS Code",
    "description": "Autonomous CLI and editor agent that creates files, executes terminal commands, opens browsers, and requests human permission.",
    "tags": [
      "Autonomous Agent",
      "VS Code",
      "Terminal Commands",
      "Open Source"
    ],
    "rating": 4.95,
    "starsCount": 53000,
    "url": "https://cline.bot/",
    "features": [
      "Human-in-the-loop Approval",
      "Terminal Shell Access",
      "MCP Tool Integration",
      "Diff Inspection"
    ],
    "pricing": "Open Source",
    "gradient": "from-cyan-600 to-teal-800"
  },
  {
    "id": "opencode",
    "name": "OpenCode",
    "category": "code-3d",
    "tagline": "Open Ecosystem for AI Developer Utilities",
    "description": "Curated suite of open-source models, developer tools, and benchmarks for high-throughput code synthesis and refactoring.",
    "tags": [
      "Open Source",
      "Developer Hub",
      "Benchmarks",
      "Tools"
    ],
    "rating": 4.87,
    "starsCount": 31000,
    "url": "https://opencode.ai/",
    "features": [
      "Open Source Datasets",
      "Model Benchmarks",
      "Syntax Parsers",
      "Community Workflows"
    ],
    "pricing": "Open Source",
    "gradient": "from-slate-700 to-slate-900"
  },
  {
    "id": "midjourney",
    "name": "Midjourney",
    "category": "image-vision",
    "tagline": "Gold Standard in Aesthetic Generative Imagery",
    "description": "Industry-leading image generation with photographic lighting, rich texturing, v6.1 realism, and modern web interface.",
    "tags": [
      "Photorealistic",
      "Aesthetic",
      "v6.1",
      "Industry Leader"
    ],
    "rating": 4.99,
    "starsCount": 135000,
    "url": "https://www.midjourney.com/",
    "features": [
      "Web Editor & Discord",
      "Inpainting & Outpainting",
      "Style Reference (sref)",
      "Character Reference (cref)"
    ],
    "pricing": "Paid",
    "gradient": "from-blue-600 via-indigo-700 to-purple-800"
  },
  {
    "id": "adobe-firefly",
    "name": "Adobe Firefly",
    "category": "image-vision",
    "tagline": "Commercially Safe Generative AI for Creatives",
    "description": "Adobe's enterprise-ready generative model integrated across Photoshop and Illustrator, trained strictly on licensed stock.",
    "tags": [
      "Adobe",
      "Commercially Safe",
      "Photoshop",
      "Vector"
    ],
    "rating": 4.92,
    "starsCount": 62000,
    "url": "https://firefly.adobe.com/",
    "features": [
      "Generative Fill in Photoshop",
      "Text to Vector Graphic",
      "Commercially Safe IP",
      "3D to Image"
    ],
    "pricing": "Freemium",
    "gradient": "from-rose-600 to-red-700"
  },
  {
    "id": "ideogram",
    "name": "Ideogram",
    "category": "image-vision",
    "tagline": "Exceptional Typography & Graphic Design AI",
    "description": "Frontier image generator renowned for flawless typographic rendering, graphic design layouts, and typography posters.",
    "tags": [
      "Typography",
      "Graphic Design",
      "Text Rendering",
      "Ideogram 2.0"
    ],
    "rating": 4.95,
    "starsCount": 54000,
    "url": "https://ideogram.ai/",
    "features": [
      "Flawless Text Rendering",
      "Color Palette Control",
      "Design & Poster Presets",
      "Magic Prompt Expander"
    ],
    "pricing": "Freemium",
    "gradient": "from-amber-500 to-pink-600"
  },
  {
    "id": "leonardo-ai",
    "name": "Leonardo AI",
    "category": "image-vision",
    "tagline": "Creative Production Suite & Custom Fine-Tuning",
    "description": "Game asset and visual production platform offering custom model training, real-time canvas generation, and 3D textures.",
    "tags": [
      "Game Assets",
      "Canvas",
      "Fine-Tuning",
      "Realtime"
    ],
    "rating": 4.94,
    "starsCount": 68000,
    "url": "https://leonardo.ai/",
    "features": [
      "Real-time Canvas Gen",
      "Custom LoRA Training",
      "Motion Generation",
      "3D Texture Generation"
    ],
    "pricing": "Freemium",
    "gradient": "from-purple-600 to-amber-600"
  },
  {
    "id": "canva-ai",
    "name": "Canva AI",
    "category": "image-vision",
    "tagline": "Magic Studio for Social & Marketing Design",
    "description": "Intuitive graphic design suite infused with Magic Media, Magic Switch, background removers, and instant social resize.",
    "tags": [
      "Marketing",
      "Social Media",
      "Canva",
      "Magic Studio"
    ],
    "rating": 4.91,
    "starsCount": 89000,
    "url": "https://www.canva.com/ai/",
    "features": [
      "One-click Background Eraser",
      "Magic Switch Translation",
      "Instant Social Resizing",
      "Brand Kit Sync"
    ],
    "pricing": "Freemium",
    "gradient": "from-cyan-500 to-purple-600"
  },
  {
    "id": "krea-ai",
    "name": "Krea AI",
    "category": "image-vision",
    "tagline": "Real-time Generative Canvas & AI Video",
    "description": "Ultra-fast generation as you draw, high-definition video generation, and photo upscaling with instant visual feedback.",
    "tags": [
      "Realtime Canvas",
      "Upscaler",
      "Fast",
      "Creative"
    ],
    "rating": 4.96,
    "starsCount": 63000,
    "url": "https://www.krea.ai/",
    "features": [
      "Real-time Latent Painting",
      "Photorealistic Upscaling",
      "Camera Motion Control",
      "Pattern Generation"
    ],
    "pricing": "Freemium",
    "gradient": "from-pink-600 via-purple-600 to-indigo-700"
  },
  {
    "id": "freepik-ai",
    "name": "Freepik AI",
    "category": "image-vision",
    "tagline": "Design Asset Generator & Stock Creation",
    "description": "Fast visual suite for generating stock photos, vector icons, mockups, and presentations for professional marketers.",
    "tags": [
      "Stock Assets",
      "Vectors",
      "Marketing",
      "Freepik"
    ],
    "rating": 4.88,
    "starsCount": 45000,
    "url": "https://www.freepik.com/ai",
    "features": [
      "Vector Generator",
      "Sketch to Image",
      "Reimagine Variations",
      "Commercial License"
    ],
    "pricing": "Freemium",
    "gradient": "from-blue-500 to-indigo-700"
  },
  {
    "id": "playground",
    "name": "Playground",
    "category": "image-vision",
    "tagline": "Infinite Collaborative Generative Canvas",
    "description": "Infinite canvas workspace blending prompt generation, image layering, background removal, and vector export.",
    "tags": [
      "Infinite Canvas",
      "Layering",
      "Design",
      "Playground v3"
    ],
    "rating": 4.9,
    "starsCount": 48000,
    "url": "https://playground.com/",
    "features": [
      "Infinite Zoom Canvas",
      "Erase and Inpaint Layers",
      "Mixed Model Generation",
      "Community Remix"
    ],
    "pricing": "Freemium",
    "gradient": "from-emerald-500 to-cyan-600"
  },
  {
    "id": "stable-diffusion",
    "name": "Stable Diffusion",
    "category": "image-vision",
    "tagline": "Pioneering Open Weights Generative Models",
    "description": "Stability AI's open-weights ecosystem including SDXL and SD3.5, powering local ComfyUI and Automatic1111 pipelines worldwide.",
    "tags": [
      "Open Source",
      "SD3.5",
      "Local GPU",
      "Stability AI"
    ],
    "rating": 4.95,
    "starsCount": 115000,
    "url": "https://stability.ai/",
    "features": [
      "Full Local Execution",
      "ComfyUI Node Support",
      "Custom LoRAs & ControlNet",
      "Weight Weights Download"
    ],
    "pricing": "Open Source",
    "gradient": "from-indigo-600 to-violet-800"
  },
  {
    "id": "flux",
    "name": "FLUX",
    "category": "image-vision",
    "tagline": "Frontier 12B Open Diffusion by Black Forest Labs",
    "description": "Breakthrough 12-billion-parameter text-to-image models FLUX.1 [schnell, dev, pro] offering photorealism and anatomy perfection.",
    "tags": [
      "FLUX.1",
      "12B Parameters",
      "Photorealism",
      "Black Forest Labs"
    ],
    "rating": 4.99,
    "starsCount": 98000,
    "url": "https://blackforestlabs.ai/",
    "features": [
      "Flawless Hands & Anatomy",
      "Accurate Typography",
      "Dev & Schnell Open Weights",
      "Distilled 4-Step Speed"
    ],
    "pricing": "Open Source",
    "gradient": "from-amber-500 to-rose-600"
  },
  {
    "id": "recraft",
    "name": "Recraft",
    "category": "image-vision",
    "tagline": "Vector & 3D Brand Asset Generator",
    "description": "Design-first platform that generates infinite resolution SVG vector graphics, 3D icons, and consistent brand style systems.",
    "tags": [
      "Vector SVG",
      "Brand Systems",
      "3D Icons",
      "Infinite Scale"
    ],
    "rating": 4.95,
    "starsCount": 47000,
    "url": "https://www.recraft.ai/",
    "features": [
      "Infinite Scalable SVG Export",
      "Color Palette Lock",
      "Consistent Style Presets",
      "Mockup Placement"
    ],
    "pricing": "Freemium",
    "gradient": "from-orange-500 to-amber-600"
  },
  {
    "id": "clipdrop",
    "name": "Clipdrop",
    "category": "image-vision",
    "tagline": "Ultimate Visual Utility Toolkit by Jasper",
    "description": "Suite of single-click image utilities: Cleanup object eraser, Relight 3D lights, Uncrop canvas expander, and Background Remover.",
    "tags": [
      "Relight",
      "Cleanup",
      "Uncrop",
      "Fast Utilities"
    ],
    "rating": 4.91,
    "starsCount": 52000,
    "url": "https://clipdrop.co/",
    "features": [
      "Virtual Studio Relighting",
      "One-click Object Remover",
      "Re-imagine XL",
      "High-res Image Upscale"
    ],
    "pricing": "Freemium",
    "gradient": "from-cyan-400 to-blue-600"
  },
  {
    "id": "photoroom",
    "name": "Photoroom",
    "category": "image-vision",
    "tagline": "E-Commerce Product Photography Studio",
    "description": "Automated photo editing app for e-commerce, creating studio-grade product backdrops, shadows, and batch processing.",
    "tags": [
      "E-Commerce",
      "Product Photos",
      "Batch Editing",
      "Shadows"
    ],
    "rating": 4.89,
    "starsCount": 43000,
    "url": "https://www.photoroom.com/",
    "features": [
      "Batch Product Cutout",
      "Realistic Drop Shadows",
      "AI Generated Studio Backgrounds",
      "Marketplace Presets"
    ],
    "pricing": "Freemium",
    "gradient": "from-purple-500 to-indigo-600"
  },
  {
    "id": "pixlr",
    "name": "Pixlr",
    "category": "image-vision",
    "tagline": "Full-Featured In-Browser Photo Editor",
    "description": "Classic browser-based photo editor enriched with generative fill, object removal, background generation, and graphic presets.",
    "tags": [
      "Photo Editor",
      "Browser",
      "Retouching",
      "Generative Fill"
    ],
    "rating": 4.84,
    "starsCount": 37000,
    "url": "https://pixlr.com/",
    "features": [
      "Layer-based Photo Editing",
      "Instant Cutout & Erase",
      "AI Face Retouching",
      "Templates Library"
    ],
    "pricing": "Freemium",
    "gradient": "from-teal-500 to-cyan-700"
  },
  {
    "id": "dreamstudio",
    "name": "DreamStudio",
    "category": "image-vision",
    "tagline": "Official Stability AI Web Interface",
    "description": "The official web playground for testing Stable Diffusion XL, offering granular prompt weighting, negative prompts, and aspect ratios.",
    "tags": [
      "SDXL",
      "Stability AI",
      "Official",
      "Prompt Weights"
    ],
    "rating": 4.88,
    "starsCount": 41000,
    "url": "https://dreamstudio.ai/",
    "features": [
      "Prompt Weight Synthesizer",
      "Negative Prompts",
      "Seed History Tracking",
      "High Resolution Output"
    ],
    "pricing": "Freemium",
    "gradient": "from-purple-600 to-rose-700"
  },
  {
    "id": "magnific",
    "name": "Magnific",
    "category": "image-vision",
    "tagline": "The World's Most Advanced AI Upscaler & Enhancer",
    "description": "Transforms low-resolution or blurry pictures into ultra-detailed 10K cinematic masterpieces by hallucinating hyper-realistic details.",
    "tags": [
      "10K Upscaling",
      "Detail Hallucination",
      "Cinematic",
      "Freaker"
    ],
    "rating": 4.97,
    "starsCount": 66000,
    "url": "https://magnific.ai/",
    "features": [
      "Up to 16x Resolution Upscale",
      "Creativity Hallucination Slider",
      "Relight Transfer",
      "Skin Texture Enhancement"
    ],
    "pricing": "Paid",
    "gradient": "from-amber-400 via-rose-500 to-purple-600"
  },
  {
    "id": "remove-bg",
    "name": "Remove.bg",
    "category": "image-vision",
    "tagline": "Instant Background Removal in 5 Seconds",
    "description": "The internet's standard background cutout engine, delivering pixel-perfect transparent PNGs for humans, cars, and products.",
    "tags": [
      "Background Remover",
      "Transparent PNG",
      "Fast",
      "API"
    ],
    "rating": 4.92,
    "starsCount": 58000,
    "url": "https://www.remove.bg/",
    "features": [
      "5-Second Cutouts",
      "Hair Edge Precision",
      "Bulk Processing API",
      "Photoshop Plugin"
    ],
    "pricing": "Freemium",
    "gradient": "from-cyan-500 to-blue-600"
  },
  {
    "id": "looka",
    "name": "Looka",
    "category": "image-vision",
    "tagline": "AI Logo Maker & Complete Brand Identity Kit",
    "description": "Generate professional custom logo concepts, vector SVG files, business card layouts, and complete brand identity guidelines.",
    "tags": [
      "Logo Maker",
      "Branding",
      "Vector SVG",
      "Identity Kit"
    ],
    "rating": 4.87,
    "starsCount": 35000,
    "url": "https://looka.com/",
    "features": [
      "300+ Brand Assets",
      "Vector SVG Files",
      "Social Media Headers",
      "Color Palette Rules"
    ],
    "pricing": "Freemium",
    "gradient": "from-blue-600 to-indigo-700"
  },
  {
    "id": "uizard",
    "name": "Uizard",
    "category": "image-vision",
    "tagline": "Turn Hand-Drawn Wireframes into UI Designs",
    "description": "Design mobile apps and web mockups from screenshots, hand-drawn paper sketches, or simple natural language text prompts.",
    "tags": [
      "UI/UX Design",
      "Wireframe to Code",
      "Mockups",
      "Prototype"
    ],
    "rating": 4.89,
    "starsCount": 42000,
    "url": "https://uizard.io/",
    "features": [
      "Sketch to UI Mockup",
      "Screenshot Theme Scanner",
      "Interactive Prototypes",
      "Figma Export"
    ],
    "pricing": "Freemium",
    "gradient": "from-rose-500 to-purple-600"
  },
  {
    "id": "galileo-ai",
    "name": "Galileo AI",
    "category": "image-vision",
    "tagline": "Text-to-Figma UI Generation Platform",
    "description": "Generate editable high-fidelity mobile and desktop user interfaces with full Figma layers, typography tokens, and design systems.",
    "tags": [
      "Text to UI",
      "Figma Layers",
      "Design Systems",
      "Product Design"
    ],
    "rating": 4.93,
    "starsCount": 46000,
    "url": "https://www.usegalileo.ai/",
    "features": [
      "Full Figma Vector Layers",
      "Multi-screen Flow Generation",
      "Design System Adherence",
      "AI Copywriting Integrated"
    ],
    "pricing": "Freemium",
    "gradient": "from-purple-600 to-indigo-800"
  },
  {
    "id": "runway",
    "name": "Runway",
    "category": "video-motion",
    "tagline": "Hollywood-Grade Generative Video & Gen-3 Alpha",
    "description": "Pioneering AI video research studio featuring Gen-3 Alpha for photorealistic camera control, expressive characters, and motion brush.",
    "tags": [
      "Gen-3 Alpha",
      "Motion Brush",
      "Hollywood",
      "Camera Control"
    ],
    "rating": 4.98,
    "starsCount": 105000,
    "url": "https://runwayml.com/",
    "features": [
      "Cinematic Camera Presets",
      "Motion Brush Control",
      "Lip-sync Integration",
      "Act-One Performance Capture"
    ],
    "pricing": "Freemium",
    "gradient": "from-emerald-500 via-teal-600 to-blue-700"
  },
  {
    "id": "kling-ai",
    "name": "Kling AI",
    "category": "video-motion",
    "tagline": "Hyper-Realistic Physics & High-Definition Motion",
    "description": "State-of-the-art video model delivering accurate real-world physics, complex human actions, and extended generation duration.",
    "tags": [
      "Realistic Physics",
      "Kling 1.5",
      "High Motion",
      "HD Video"
    ],
    "rating": 4.97,
    "starsCount": 78000,
    "url": "https://klingai.com/",
    "features": [
      "Fluid Complex Physics",
      "Up to 2-minute Extensions",
      "1080p Cinematic Quality",
      "Camera Trajectory Control"
    ],
    "pricing": "Freemium",
    "gradient": "from-cyan-500 to-indigo-700"
  },
  {
    "id": "pika",
    "name": "Pika",
    "category": "video-motion",
    "tagline": "Creative Video Studio with Pika 2.0 Effects",
    "description": "Creative generative video platform famous for Pikaffects (inflate, melt, crush, explode) and fluid 3D scene motion.",
    "tags": [
      "Pika 2.0",
      "Pikaffects",
      "3D Motion",
      "Creative Video"
    ],
    "rating": 4.93,
    "starsCount": 67000,
    "url": "https://pika.art/",
    "features": [
      "Pikaffects Physics FX",
      "Audio Sync Sound Effects",
      "Region Inpainting",
      "Camera Move Control"
    ],
    "pricing": "Freemium",
    "gradient": "from-amber-500 to-rose-600"
  },
  {
    "id": "luma",
    "name": "Luma",
    "category": "video-motion",
    "tagline": "Dream Machine High-Speed Video & 3D NeRFs",
    "description": "Fast text-to-video generation with realistic camera trajectories, fluid lighting changes, and breakthrough 3D NeRF capture.",
    "tags": [
      "Dream Machine",
      "Fast Video",
      "3D NeRFs",
      "Smooth Camera"
    ],
    "rating": 4.94,
    "starsCount": 71000,
    "url": "https://lumalabs.ai/",
    "features": [
      "5-Second Fast Generation",
      "Keyframe to Keyframe Transitions",
      "High Dynamic Lighting",
      "Interactive 3D NeRFs"
    ],
    "pricing": "Freemium",
    "gradient": "from-indigo-600 to-purple-800"
  },
  {
    "id": "sora",
    "name": "Sora",
    "category": "video-motion",
    "tagline": "OpenAI's Breakthrough World Simulator",
    "description": "OpenAI's milestone diffusion model generating complex scenes with multiple characters, specific motions, and accurate background details.",
    "tags": [
      "OpenAI",
      "World Simulator",
      "Sora",
      "Ultra Realism"
    ],
    "rating": 4.98,
    "starsCount": 125000,
    "url": "https://sora.com/",
    "features": [
      "Up to 1080p Native Gen",
      "Multi-character Tracking",
      "Temporal Consistency",
      "Complex Scene Lighting"
    ],
    "pricing": "Freemium",
    "gradient": "from-rose-600 via-purple-600 to-indigo-800"
  },
  {
    "id": "google-veo",
    "name": "Google Veo",
    "category": "video-motion",
    "tagline": "Google DeepMind's 1080p Generative Cinema",
    "description": "Generates high-definition cinematic videos understanding cinematic terminology like timelapses, aerial shots, and lens focal lengths.",
    "tags": [
      "DeepMind",
      "1080p Cinema",
      "Google Veo",
      "Visual Physics"
    ],
    "rating": 4.96,
    "starsCount": 84000,
    "url": "https://deepmind.google/models/veo/",
    "features": [
      "Cinematic Lens Prompting",
      "Masked Inpainting",
      "High Visual Coherence",
      "YouTube Shorts Integration"
    ],
    "pricing": "Freemium",
    "gradient": "from-blue-500 via-cyan-500 to-purple-600"
  },
  {
    "id": "heygen",
    "name": "HeyGen",
    "category": "video-motion",
    "tagline": "Studio-Quality AI Avatars & Video Localization",
    "description": "Create realistic video presentations with digital twins and translate video footage into 40+ languages with matching lip-sync.",
    "tags": [
      "AI Avatars",
      "Lip-Sync Translation",
      "Digital Twin",
      "Marketing"
    ],
    "rating": 4.95,
    "starsCount": 62000,
    "url": "https://www.heygen.com/",
    "features": [
      "Custom Instant Avatar",
      "Video Translation with Lip-sync",
      "Interactive Streaming Avatars",
      "Templates Library"
    ],
    "pricing": "Freemium",
    "gradient": "from-purple-600 to-blue-600"
  },
  {
    "id": "synthesia",
    "name": "Synthesia",
    "category": "video-motion",
    "tagline": "Enterprise AI Video Communications Platform",
    "description": "Transform corporate training documents and scripts into professional presenter videos featuring diverse, expressive avatars.",
    "tags": [
      "Enterprise",
      "Corporate Training",
      "Avatars",
      "Multilingual"
    ],
    "rating": 4.91,
    "starsCount": 55000,
    "url": "https://www.synthesia.io/",
    "features": [
      "160+ Diverse Avatars",
      "130+ Spoken Languages",
      "SCORM LMS Export",
      "Custom Enterprise Security"
    ],
    "pricing": "Paid",
    "gradient": "from-blue-600 to-indigo-800"
  },
  {
    "id": "invideo-ai",
    "name": "InVideo AI",
    "category": "video-motion",
    "tagline": "Script-to-Video Engine for YouTube & TikTok",
    "description": "Type any prompt or topic to generate full YouTube documentaries or TikTok shorts complete with script, voiceover, and stock B-roll.",
    "tags": [
      "Script to Video",
      "YouTube Shorts",
      "TikTok",
      "Automated Voice"
    ],
    "rating": 4.88,
    "starsCount": 49000,
    "url": "https://invideo.io/",
    "features": [
      "Full Script Generation",
      "Automatic B-Roll Matching",
      "Realistic Voice Narration",
      "Social Media Formats"
    ],
    "pricing": "Freemium",
    "gradient": "from-amber-500 to-orange-600"
  },
  {
    "id": "opusclip",
    "name": "OpusClip",
    "category": "video-motion",
    "tagline": "Repurpose Long Videos into Viral Shorts",
    "description": "AI video curation tool that extracts the most engaging highlights from podcasts or webinars and formats them with animated captions.",
    "tags": [
      "Viral Shorts",
      "Auto Captions",
      "Podcast Repurposing",
      "B-Roll"
    ],
    "rating": 4.94,
    "starsCount": 59000,
    "url": "https://www.opus.pro/",
    "features": [
      "Virality Likelihood Score",
      "Active Speaker Auto Reframe",
      "Dynamic Animated Captions",
      "Auto B-roll Insertion"
    ],
    "pricing": "Freemium",
    "gradient": "from-purple-600 to-rose-600"
  },
  {
    "id": "descript",
    "name": "Descript",
    "category": "video-motion",
    "tagline": "Edit Video and Audio as Easily as a Doc",
    "description": "Revolutionary editor where you delete filler words ('um', 'uh') by simply deleting text from the generated transcript.",
    "tags": [
      "Text-based Video Edit",
      "Studio Sound",
      "Overdub",
      "Podcast"
    ],
    "rating": 4.93,
    "starsCount": 64000,
    "url": "https://www.descript.com/",
    "features": [
      "Automatic Filler Word Removal",
      "Studio Sound Audio Polish",
      "Overdub Voice Cloning",
      "Eye Contact Correction"
    ],
    "pricing": "Freemium",
    "gradient": "from-blue-600 to-teal-600"
  },
  {
    "id": "captions",
    "name": "Captions",
    "category": "video-motion",
    "tagline": "AI Studio for Creators & Social Video",
    "description": "Mobile and desktop suite for creators with eye contact correction, 3D animated subtitles, noise isolation, and lip dubbing.",
    "tags": [
      "Eye Contact",
      "Subtitles",
      "Creator Studio",
      "Lipdub"
    ],
    "rating": 4.9,
    "starsCount": 47000,
    "url": "https://www.captions.ai/",
    "features": [
      "AI Eye Contact Correction",
      "Viral Subtitle Styles",
      "AI Lipdub Translation",
      "Studio Audio Isolation"
    ],
    "pricing": "Freemium",
    "gradient": "from-indigo-600 to-purple-700"
  },
  {
    "id": "veed",
    "name": "VEED",
    "category": "video-motion",
    "tagline": "Online Video Suite with Auto Subtitles & Avatars",
    "description": "Cloud-based video editing powerhouse with automatic subtitles, screen recording, voice translation, and customizable templates.",
    "tags": [
      "Online Editor",
      "Subtitles",
      "Screen Recorder",
      "Translations"
    ],
    "rating": 4.87,
    "starsCount": 42000,
    "url": "https://www.veed.io/",
    "features": [
      "One-Click Subtitles",
      "Clean Audio Removal",
      "Screen & Webcam Record",
      "Social Media Resizing"
    ],
    "pricing": "Freemium",
    "gradient": "from-sky-500 to-indigo-600"
  },
  {
    "id": "d-id",
    "name": "D-ID",
    "category": "video-motion",
    "tagline": "Animate Any Photo into a Talking Character",
    "description": "Turn still portrait photos and digital art into photo-realistic talking head videos with fluid lip-sync and emotional inflections.",
    "tags": [
      "Photo to Video",
      "Talking Head",
      "Digital Humans",
      "Live Agents"
    ],
    "rating": 4.86,
    "starsCount": 39000,
    "url": "https://www.d-id.com/",
    "features": [
      "Single Image Animation",
      "Live Streaming Agent API",
      "119 Language Support",
      "Canva & PPT Integration"
    ],
    "pricing": "Freemium",
    "gradient": "from-orange-500 to-rose-600"
  },
  {
    "id": "higgsfield",
    "name": "Higgsfield",
    "category": "video-motion",
    "tagline": "Personalized Cinema & Social Motion Engine",
    "description": "Mobile-first generative video platform designed for hyper-personalized human motion, action scenes, and social storytelling.",
    "tags": [
      "Mobile Video",
      "Personalized Motion",
      "Action Scenes",
      "Social"
    ],
    "rating": 4.88,
    "starsCount": 34000,
    "url": "https://higgsfield.ai/",
    "features": [
      "Dynamic Camera Movement",
      "Selfie to Character Video",
      "Smooth Slow-Mo Physics",
      "Social Story Presets"
    ],
    "pricing": "Freemium",
    "gradient": "from-pink-600 to-purple-800"
  },
  {
    "id": "elevenlabs",
    "name": "ElevenLabs",
    "category": "audio-music",
    "tagline": "Industry Leader in Expressive Speech & Voice Cloning",
    "description": "Hyper-realistic voice synthesis, emotional voice design, one-minute instant voice cloning, and audio sound effect generation.",
    "tags": [
      "Voice Cloning",
      "Text to Speech",
      "Sound Effects",
      "Industry Leader"
    ],
    "rating": 4.99,
    "starsCount": 112000,
    "url": "https://elevenlabs.io/",
    "features": [
      "Instant Voice Cloning",
      "Emotional Tone Control",
      "Sound Effect Generator",
      "Conversational AI Agents"
    ],
    "pricing": "Freemium",
    "gradient": "from-slate-800 via-indigo-900 to-slate-950"
  },
  {
    "id": "suno",
    "name": "Suno",
    "category": "audio-music",
    "tagline": "Full Radio-Quality Song Generation with Vocals",
    "description": "Generate complete musical tracks in any genre from a text prompt, including multi-part verses, chorus, and emotional vocals.",
    "tags": [
      "Full Song Generation",
      "Vocals & Lyrics",
      "Suno v3.5",
      "Any Genre"
    ],
    "rating": 4.98,
    "starsCount": 96000,
    "url": "https://suno.com/",
    "features": [
      "Complete 4-minute Songs",
      "Dual Verse & Chorus Logic",
      "Custom Lyrics & Style Prompt",
      "Audio Stem Separation"
    ],
    "pricing": "Freemium",
    "gradient": "from-rose-600 via-amber-500 to-purple-600"
  },
  {
    "id": "udio",
    "name": "Udio",
    "category": "audio-music",
    "tagline": "Audiophile-Grade Music Creation & Stem Editing",
    "description": "Founded by DeepMind alumni, Udio crafts studio-quality music with nuanced genre blending, stem separation, and track extensions.",
    "tags": [
      "Studio Music",
      "Stem Download",
      "DeepMind Alumni",
      "Genre Blend"
    ],
    "rating": 4.96,
    "starsCount": 83000,
    "url": "https://www.udio.com/",
    "features": [
      "Nuanced Vocal Harmony",
      "Audio Stem Separation",
      "Custom Section Inpainting",
      "Extended Song Structure"
    ],
    "pricing": "Freemium",
    "gradient": "from-indigo-600 via-cyan-500 to-teal-500"
  },
  {
    "id": "playht",
    "name": "PlayHT",
    "category": "audio-music",
    "tagline": "Ultra-Low Latency Conversational Voice AI",
    "description": "Sub-200ms latency voice generator tailored for real-time customer agents, podcast narration, and gaming NPCs.",
    "tags": [
      "Low Latency",
      "Voice Streaming",
      "Conversational",
      "API"
    ],
    "rating": 4.9,
    "starsCount": 44000,
    "url": "https://play.ht/",
    "features": [
      "Sub-200ms Voice Stream",
      "800+ Natural Voices",
      "Podcast RSS Export",
      "Voice Cloning API"
    ],
    "pricing": "Freemium",
    "gradient": "from-blue-600 to-indigo-800"
  },
  {
    "id": "murf-ai",
    "name": "Murf AI",
    "category": "audio-music",
    "tagline": "Studio Voiceover Production for Presentations & Ads",
    "description": "Studio-grade voiceovers with precise pitch, emphasis, and speed controls synced directly to video presentations.",
    "tags": [
      "Voiceover",
      "Presentations",
      "Pitch Control",
      "Studio"
    ],
    "rating": 4.88,
    "starsCount": 41000,
    "url": "https://murf.ai/",
    "features": [
      "Word-level Pitch Adjustment",
      "Video Timeline Sync",
      "AI Voice Changer",
      "Commercial Usage Rights"
    ],
    "pricing": "Freemium",
    "gradient": "from-amber-500 to-orange-700"
  },
  {
    "id": "speechify",
    "name": "Speechify",
    "category": "audio-music",
    "tagline": "Turn Any Text into Natural Audio Narration",
    "description": "Leading text-to-speech reading companion that reads books, PDFs, and articles at 4.5x speed with celebrity voices.",
    "tags": [
      "Text to Speech",
      "Speed Reading",
      "Snoop Dogg / Gwyneth Voice",
      "Audiobooks"
    ],
    "rating": 4.92,
    "starsCount": 58000,
    "url": "https://speechify.com/",
    "features": [
      "Up to 4.5x Speed Listening",
      "Celebrity Voice Narrators",
      "Camera OCR Text Reader",
      "Cross-Device Sync"
    ],
    "pricing": "Freemium",
    "gradient": "from-emerald-500 to-teal-700"
  },
  {
    "id": "assemblyai",
    "name": "AssemblyAI",
    "category": "audio-music",
    "tagline": "Speech-to-Text & Audio Intelligence API",
    "description": "High-accuracy speech transcription API powered by Conformer-2, offering speaker diarization, sentiment analysis, and chaptering.",
    "tags": [
      "Speech to Text",
      "Transcription",
      "Diarization",
      "Audio API"
    ],
    "rating": 4.93,
    "starsCount": 46000,
    "url": "https://www.assemblyai.com/",
    "features": [
      "Speaker Diarization",
      "Sentiment & Topic Detection",
      "Auto Chapter Summaries",
      "Real-time WebSocket API"
    ],
    "pricing": "Freemium",
    "gradient": "from-purple-700 to-indigo-900"
  },
  {
    "id": "deepgram",
    "name": "Deepgram",
    "category": "audio-music",
    "tagline": "Lightning-Fast Voice AI for Real-time Streaming",
    "description": "End-to-end deep learning speech transcription and voice synthesis delivering sub-100ms latency for conversational voice agents.",
    "tags": [
      "Sub-100ms Latency",
      "Nova-2 Speech",
      "Voice Agent API",
      "Enterprise"
    ],
    "rating": 4.95,
    "starsCount": 49000,
    "url": "https://deepgram.com/",
    "features": [
      "Nova-2 Speed & Accuracy",
      "Lowest Cost per Hour",
      "Streaming Audio Input/Output",
      "Domain Specific Training"
    ],
    "pricing": "Freemium",
    "gradient": "from-rose-600 to-purple-800"
  },
  {
    "id": "aiva",
    "name": "AIVA",
    "category": "audio-music",
    "tagline": "Symphonic AI Composer & Soundtrack Generator",
    "description": "Composes original classical, cinematic, and electronic music scores with full MIDI track download and emotional chord progression.",
    "tags": [
      "Cinematic",
      "Symphonic",
      "MIDI Export",
      "Soundtrack"
    ],
    "rating": 4.89,
    "starsCount": 36000,
    "url": "https://www.aiva.ai/",
    "features": [
      "Full MIDI File Download",
      "Key & Tempo Customization",
      "Orchestral Instrument Matrix",
      "Copyright Ownership"
    ],
    "pricing": "Freemium",
    "gradient": "from-amber-600 to-rose-700"
  },
  {
    "id": "soundraw",
    "name": "SOUNDRAW",
    "category": "audio-music",
    "tagline": "Royalty-Free Music Generator for Creators",
    "description": "Customize intro lengths, chorus drops, and instrumental energy to create copyright-safe background music for YouTube.",
    "tags": [
      "Royalty-Free",
      "YouTube Music",
      "Energy Slider",
      "Customizable"
    ],
    "rating": 4.87,
    "starsCount": 33000,
    "url": "https://soundraw.io/",
    "features": [
      "Interactive Energy Curve",
      "Royalty-Free Commercial Use",
      "Tempo & Mood Controls",
      "Stem Track Export"
    ],
    "pricing": "Freemium",
    "gradient": "from-cyan-500 to-blue-700"
  },
  {
    "id": "notion-ai",
    "name": "Notion AI",
    "category": "agentic",
    "tagline": "Connected Workspace Intelligence & Q&A",
    "description": "Search across all team documents, draft specifications, summarize meeting transcripts, and build custom workflows inside Notion.",
    "tags": [
      "Workspace",
      "Team Knowledge",
      "Notion",
      "Productivity"
    ],
    "rating": 4.94,
    "starsCount": 87000,
    "url": "https://www.notion.com/product/ai",
    "features": [
      "Universal Document Search",
      "Instant Action Item Extraction",
      "Automated DB Autofill",
      "Page Translation"
    ],
    "pricing": "Paid",
    "gradient": "from-slate-800 to-slate-950"
  },
  {
    "id": "gamma",
    "name": "Gamma",
    "category": "agentic",
    "tagline": "Generate Polished Presentations, Webpages & Docs",
    "description": "Transform text outlines into visually stunning, interactive slide decks, responsive webpages, and documents in one click.",
    "tags": [
      "Presentations",
      "Slide Decks",
      "Webpages",
      "Design"
    ],
    "rating": 4.96,
    "starsCount": 74000,
    "url": "https://gamma.app/",
    "features": [
      "One-Click Deck Generation",
      "Interactive Embeds & Cards",
      "Responsive Webpage Export",
      "Analytics on Slide Views"
    ],
    "pricing": "Freemium",
    "gradient": "from-purple-600 via-pink-600 to-amber-500"
  },
  {
    "id": "napkin-ai",
    "name": "Napkin AI",
    "category": "agentic",
    "tagline": "Transform Text into Visual Diagrams & Infographics",
    "description": "Paste any text or paragraph to instantly generate clean flowcharts, Venn diagrams, mindmaps, and infographics.",
    "tags": [
      "Visual Diagrams",
      "Flowcharts",
      "Infographics",
      "Fast"
    ],
    "rating": 4.93,
    "starsCount": 42000,
    "url": "https://www.napkin.ai/",
    "features": [
      "Auto Flowchart Synthesis",
      "Vector SVG & PNG Export",
      "Custom Brand Colors",
      "Click to Edit Shapes"
    ],
    "pricing": "Freemium",
    "gradient": "from-teal-500 to-cyan-700"
  },
  {
    "id": "tome",
    "name": "Tome",
    "category": "agentic",
    "tagline": "AI Storytelling & Dynamic Pitch Decks",
    "description": "Interactive presentation builder combining AI text generation, DALL-E imagery, live 3D models, and Figma prototypes.",
    "tags": [
      "Pitch Decks",
      "Storytelling",
      "3D Embeds",
      "Interactive"
    ],
    "rating": 4.88,
    "starsCount": 39000,
    "url": "https://tome.app/",
    "features": [
      "Dynamic Canvas Layout",
      "Interactive 3D Embeds",
      "Executive Tone Synthesis",
      "Mobile Responsive Views"
    ],
    "pricing": "Freemium",
    "gradient": "from-rose-500 to-purple-700"
  },
  {
    "id": "zapier-ai",
    "name": "Zapier AI",
    "category": "agentic",
    "tagline": "Automate Workflows Across 7,000+ Business Apps",
    "description": "Build automated multi-step agent actions connecting Slack, Gmail, Google Sheets, HubSpot, and CRM databases without code.",
    "tags": [
      "Automation",
      "7000+ Integrations",
      "Zapier",
      "No-Code"
    ],
    "rating": 4.95,
    "starsCount": 91000,
    "url": "https://zapier.com/ai",
    "features": [
      "7,000+ App Connectors",
      "Natural Language Zap Builder",
      "AI Actions API",
      "Conditional Branching"
    ],
    "pricing": "Freemium",
    "gradient": "from-orange-500 to-amber-600"
  },
  {
    "id": "make",
    "name": "Make",
    "category": "agentic",
    "tagline": "Visual No-Code Automation & API Integration Platform",
    "description": "Design complex visual workflows with drag-and-drop nodes, webhooks, JSON parsers, and custom enterprise logic.",
    "tags": [
      "Visual Workflows",
      "API Integration",
      "Webhooks",
      "Enterprise"
    ],
    "rating": 4.92,
    "starsCount": 65000,
    "url": "https://www.make.com/",
    "features": [
      "Infinite Canvas Visual Flow",
      "Real-time Execution Telemetry",
      "Advanced Data Mapping",
      "Error Handling Routes"
    ],
    "pricing": "Freemium",
    "gradient": "from-purple-600 to-indigo-800"
  },
  {
    "id": "n8n",
    "name": "n8n",
    "category": "agentic",
    "tagline": "Fair-Code Self-Hostable Workflow Automation with AI",
    "description": "Hostable workflow platform with native LangChain nodes, memory, vector databases, and full data sovereignty.",
    "tags": [
      "Self-Hosted",
      "Open Source",
      "LangChain Nodes",
      "Data Privacy"
    ],
    "rating": 4.97,
    "starsCount": 78000,
    "url": "https://n8n.io/",
    "features": [
      "Self-Host with Docker",
      "Native AI Agent Nodes",
      "400+ Pre-built Integrations",
      "Full JavaScript Code Nodes"
    ],
    "pricing": "Open Source",
    "gradient": "from-rose-600 to-orange-600"
  },
  {
    "id": "gumloop",
    "name": "Gumloop",
    "category": "agentic",
    "tagline": "The AI Automation Platform for Complex Operations",
    "description": "Orchestrate web scrapers, LLMs, and Python scripts on a visual canvas to automate manual back-office and marketing tasks.",
    "tags": [
      "Visual Scraping",
      "Back-Office",
      "Pipeline",
      "Python"
    ],
    "rating": 4.91,
    "starsCount": 36000,
    "url": "https://www.gumloop.com/",
    "features": [
      "Browser Scraping Node",
      "Parallel Execution Swarms",
      "Python Sandbox Integration",
      "Scheduled Cron Triggers"
    ],
    "pricing": "Freemium",
    "gradient": "from-cyan-500 to-blue-700"
  },
  {
    "id": "manus",
    "name": "Manus",
    "category": "agentic",
    "tagline": "Autonomous General-Purpose Web Agent",
    "description": "Next-generation autonomous agent capable of conducting complex multi-step research, booking services, and analyzing data independently.",
    "tags": [
      "General Agent",
      "Autonomous Web",
      "Complex Tasks",
      "Breakthrough"
    ],
    "rating": 4.94,
    "starsCount": 52000,
    "url": "https://manus.im/",
    "features": [
      "Autonomous Browser Navigation",
      "Multi-tab Synthesis",
      "Long Horizon Task Plan",
      "Detailed PDF Reports"
    ],
    "pricing": "Freemium",
    "gradient": "from-amber-500 via-orange-600 to-rose-700"
  },
  {
    "id": "microsoft-autogen",
    "name": "Microsoft AutoGen",
    "category": "agentic",
    "tagline": "Multi-Agent Conversation Framework by Microsoft",
    "description": "Open-source framework that enables multiple conversational agents to cooperate, execute code, and solve complex problems.",
    "tags": [
      "Multi-Agent",
      "Microsoft",
      "Open Source",
      "Conversation"
    ],
    "rating": 4.96,
    "starsCount": 58000,
    "url": "https://microsoft.github.io/autogen/",
    "features": [
      "Multi-Agent Group Chat",
      "Human-in-the-Loop Checkpoints",
      "Code Execution Sandbox",
      "Extensible Agent Personas"
    ],
    "pricing": "Open Source",
    "gradient": "from-blue-600 to-cyan-700"
  },
  {
    "id": "crewai",
    "name": "CrewAI",
    "category": "agentic",
    "tagline": "Orchestrate Role-Playing AI Agent Crews",
    "description": "Python framework for orchestrating autonomous role-playing crews where agents collaborate on tasks with delegated duties.",
    "tags": [
      "CrewAI",
      "Role-Playing",
      "Python Framework",
      "Delegation"
    ],
    "rating": 4.97,
    "starsCount": 63000,
    "url": "https://www.crewai.com/",
    "features": [
      "Hierarchical Task Delegation",
      "Custom Tool Integrations",
      "Works with Any LLM",
      "Production Flow Monitoring"
    ],
    "pricing": "Open Source",
    "gradient": "from-orange-600 to-rose-700"
  },
  {
    "id": "langchain",
    "name": "LangChain",
    "category": "agentic",
    "tagline": "The Essential Framework for LLM Application Development",
    "description": "The standard open-source library and ecosystem for building context-aware reasoning applications, RAG pipelines, and agent graphs.",
    "tags": [
      "LangChain",
      "RAG",
      "Framework",
      "Ecosystem"
    ],
    "rating": 4.95,
    "starsCount": 102000,
    "url": "https://www.langchain.com/",
    "features": [
      "LangGraph State Machine",
      "LangSmith Observability",
      "Hundreds of Integrations",
      "Production Ready Templates"
    ],
    "pricing": "Open Source",
    "gradient": "from-emerald-600 to-teal-800"
  },
  {
    "id": "ollama",
    "name": "Ollama",
    "category": "agentic",
    "tagline": "Run Frontier LLMs Locally on Your Machine in One Line",
    "description": "Get up and running with Llama 3, DeepSeek-R1, Mistral, and Qwen locally on macOS, Linux, and Windows with zero configuration.",
    "tags": [
      "Local AI",
      "Ollama",
      "Offline",
      "One-Command"
    ],
    "rating": 4.99,
    "starsCount": 118000,
    "url": "https://ollama.com/",
    "features": [
      "One-Command Model Download",
      "OpenAI-Compatible Local API",
      "GPU Acceleration (Metal/CUDA)",
      "Modelfile Customization"
    ],
    "pricing": "Open Source",
    "gradient": "from-slate-800 to-slate-950"
  },
  {
    "id": "lm-studio",
    "name": "LM Studio",
    "category": "agentic",
    "tagline": "Discover, Download, and Run Local LLMs Offline",
    "description": "Beautiful desktop application for experimenting with local LLMs, chat interface, hardware monitoring, and local inference server.",
    "tags": [
      "Desktop App",
      "Local LLM",
      "Offline",
      "Local Server"
    ],
    "rating": 4.97,
    "starsCount": 74000,
    "url": "https://lmstudio.ai/",
    "features": [
      "Clean Modern Desktop UI",
      "GGUF Model Browser",
      "Hardware RAM/VRAM Monitor",
      "Local OpenAI-compatible Server"
    ],
    "pricing": "Free",
    "gradient": "from-purple-600 via-indigo-600 to-blue-700"
  },
  {
    "id": "replicate",
    "name": "Replicate",
    "category": "agentic",
    "tagline": "Run Open-Source AI Models with a Cloud API",
    "description": "Run and fine-tune open-source models with one line of code, serverless GPU scaling, and pay-per-second cloud execution.",
    "tags": [
      "Cloud API",
      "Serverless GPU",
      "Open Source",
      "Scale"
    ],
    "rating": 4.94,
    "starsCount": 69000,
    "url": "https://replicate.com/",
    "features": [
      "One-line Code Execution",
      "Pay-per-Second Billing",
      "Automatic GPU Scale to Zero",
      "Fine-Tuning Pipelines"
    ],
    "pricing": "Freemium",
    "gradient": "from-slate-900 to-indigo-950"
  }
];

export const TOOL_CATEGORIES = [
  { id: 'all', label: 'All Intelligence (106)', icon: 'Sparkles' },
  { id: 'new-releases', label: 'New Releases (i-Tools)', icon: 'Rocket', badge: 'LIVE' },
  { id: 'text-llm', label: 'LLM & Reasoning', icon: 'Brain' },
  { id: 'code-3d', label: 'Code & Developer AI', icon: 'Cpu' },
  { id: 'image-vision', label: 'Generative Art & Vision', icon: 'Palette' },
  { id: 'video-motion', label: 'Video & Motion', icon: 'Film' },
  { id: 'audio-music', label: 'Voice & Music', icon: 'Music' },
  { id: 'agentic', label: 'Productivity & Agents', icon: 'Workflow' },
] as const;
