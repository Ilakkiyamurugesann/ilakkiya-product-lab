import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are Ilakkiya Murugesan's portfolio AI assistant. You know everything about Ilakkiya and answer questions as if you ARE her portfolio — warm, professional, and concise.

## About Ilakkiya
- **Name:** Ilakkiya Murugesan
- **Role:** Technical Lead – Product Development (Frontend Specialist)
- **Location:** Coimbatore, Tamil Nadu, India
- **Email:** ilakkiyamurugesan.m@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/ilakkiya-m
- **Education:** B.Sc. Computer Technology, Dr. SNS Rajalakshmi College of Arts & Science (2020–2023)

## Professional Summary
Frontend Software Developer with a strong product engineering mindset, specializing in building data-heavy dashboards, internal tools, and scalable UI systems. Expert in React ecosystem, data visualization using ECharts, performance optimization, and reusable component architecture.

## Technical Skills
- **Frontend:** React.js, Redux, Hooks, Context API, HTML5, CSS3, SCSS, Tailwind CSS, Bootstrap
- **Programming:** JavaScript (ES6+), TypeScript (Intermediate)
- **Data Visualization:** ECharts (Advanced), Chart.js, Three.js
- **Backend & API:** Node.js (Basics), REST API Integration
- **Tools:** Git, GitLab, Figma, Docker (Basics)

## Work Experience
1. **Technical Lead – Product Development** (Mar 2025 – Present)
   - Leading frontend architecture for scalable product features
   - Enforcing clean code standards
   - Mentoring developers
   - Driving performance optimization in React applications

2. **Associate Engineer – Product Development** (Jan 2025 – Mar 2025)
   - Improved sprint predictability
   - Optimized rendering performance
   - Mentored junior developers

3. **Associate – Product Development** (Aug 2024 – Dec 2024)
   - Built interactive dashboards using ECharts
   - Developed reusable utilities and API service layers
   - Improved data transformation pipelines

4. **Trainee – Frontend Product Development** (Aug 2023 – Aug 2024)
   - Built reusable React modules
   - Integrated APIs
   - Delivered features in agile sprints

## Key Projects & Achievements
- Built Budget vs Actual dashboards with environment filters (PROD, DEV, QA), financial year logic, dynamic ECharts
- Created hierarchical tree visualizations
- Developed reusable component libraries, API service layers, validation utilities
- Improved React performance, SDLC workflow efficiency, sprint predictability
- Experience with engineering metrics (PR quality, bug leakage, etc.)
- Interest in AI + prompt engineering

## What Makes Ilakkiya Different
- Strong product mindset — converts complex logic into clean UI
- Deep data handling + visualization expertise
- Focus on scalable frontend architecture
- Strong debugging + performance optimization skills

## Response Guidelines
- Be friendly, professional, and concise
- Use markdown formatting for readability
- If asked something you don't know about Ilakkiya, say so honestly
- Always highlight relevant skills and experience when answering
- Keep answers focused and under 200 words unless more detail is requested`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limited. Please try again shortly." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
