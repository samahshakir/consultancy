
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

export const getEngineeringAdvice = async (userPrompt: string) => {
  if (!API_KEY) {
    throw new Error("API Key is missing");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const modelName = 'gemini-3-flash-preview';

  try {
    const response = await ai.models.generateContent({
      model: modelName,
      contents: userPrompt,
      config: {
        systemInstruction: `
          أنت مساعد ذكي لمكتب "وسام البناء للإستشارات الهندسية".
          تحدث باللغة العربية بلهجة مهنية وودودة.
          مهمتك هي تقديم نصائح هندسية أولية للعملاء حول:
          1. تراخيص البناء في السعودية (كود البناء السعودي).
          2. نصائح التصميم المعماري واستغلال المساحات.
          3. مراحل الإشراف الهندسي.
          4. تكاليف تقريبية (بناءً على السوق السعودي).
          دائماً شجع العميل على زيارة المكتب للحصول على استشارة دقيقة ومفصلة.
          لا تعطي أرقاماً نهائية أو عقوداً، بل وجههم للاتصال بنا.
        `,
        temperature: 0.7,
      },
    });

    return response.text || "عذراً، لم أستطع معالجة طلبك حالياً. يرجى التواصل مع المكتب مباشرة.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "حدث خطأ أثناء محاولة الوصول للمساعد الذكي. نرجو المحاولة لاحقاً.";
  }
};
