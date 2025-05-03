export async function generateBlogContent({ title, category, prompt }: { title: string; category: string; prompt?: string }): Promise<string> {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  const endpoint = "https://api.openai.com/v1/chat/completions";

  const systemPrompt = `You are an expert blog writer and web developer. Write a detailed, SEO-optimized blog post in HTML format. Use headings, subheadings, lists, and include some inline CSS for visual appeal. The topic is: ${title} (Category: ${category}). ${prompt ? "Instructions: " + prompt : ""}`;

  const body = {
    model: "gpt-4",
    messages: [
      { role: "system", content: systemPrompt },
      {
        role: "user",
        content: `Write the full blog post in HTML. Do not include <html> or <body> tags. Use <h1> for the title, <h2> for sections, and style with inline CSS where appropriate.`,
      },
    ],
    max_tokens: 1800,
    temperature: 0.7,
  };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    const html = data.choices?.[0]?.message?.content || "";
    return html;
  } catch (error) {
    console.error("OpenAI API error:", error);
    throw new Error("Failed to generate blog content with AI.");
  }
}
