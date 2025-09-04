"use server"
import { GoogleGenAI } from '@google/genai';

export async function generateSummaryContent(content: string): Promise<string> {
    const ai = new GoogleGenAI({
        apiKey: process.env.GOOGLE_API_KEY!,
    });
    
    const config = {};
    const model = 'gemini-2.0-flash';
    const contents = [
        {
            role: 'user',
            parts: [
                {
                    text: `Generate a concise summary for the following content in markdown format:\n\n${content}\n\nSummary:`,
                },
            ],
        },
    ];

    const response = await ai.models.generateContentStream({
        model,
        config,
        contents,
    });

    let generatedText = '';
    for await (const chunk of response) {
        
        generatedText += chunk.text;
        console.log(chunk.text);
    }

    return generatedText;
}
