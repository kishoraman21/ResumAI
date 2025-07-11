const { GoogleGenAI } = require("@google/genai");
const ai = new GoogleGenAI({
  apiKey: "AIzaSyBWZzlHNfuNKvmBZU3Nq7gVGCMSSbHo9aM",
});

const generateWithGemini = async (name, jobTitle, experience, skills) => {
  const prompt = `Write a professional but short resume for ${name}, applying for a ${jobTitle} role. 
Experience: ${experience}. Skills: ${skills}. Make it ATS-friendly and structured. Do not include the AI generation note. Make it concise and impactful, also add bullet points for skills and experience.Keep the tone professional and formal and  color scheme should be black and white. Remove the extra spaces and new lines and also symbols like "@" and "#". keep the color of titles like "Experience", "Skills", "Name" and "Education" in black. do not include the title like "name", "experience", "Eduacation " and "skills" in the summary part .`;
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    // responseFormat: "json-object",
    contents: prompt,
  });
  console.log(response.text);
  return response.text;
};

module.exports = generateWithGemini;
