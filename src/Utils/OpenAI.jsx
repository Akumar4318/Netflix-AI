import OpenAI from 'openai';
import { OPEN_AI_KEY, OPEN_deep_key } from './Constant';



const openai = new OpenAI({
  apiKey: OPEN_AI_KEY,
  dangerouslyAllowBrowser: true 
});

  export default openai

// const openai = new OpenAI({
//   baseURL: 'https://api.deepseek.com',
//   apiKey: OPEN_deep_key,dangerouslyAllowBrowser: true 
// });

// export default openai