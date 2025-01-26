const opanAIkey = import.meta.env.VITE_OPENAI_API_KEY;
const tmdbkey = import.meta.env.VITE_TMDB_API_KEY;

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${tmdbkey}`, // Added space after 'Bearer'
  },
};



  export const IMG_CDN_URL='https://image.tmdb.org/t/p/w500/'


 

export const OPEN_deep_key='sk-fe025b765d6147989791199fcef5867a'


export const OPENAI_KEY=opanAIkey;




  
   export const SUPPORTED_LANGUAGES=[{
    identifier:"english",
    name:'English',
   },{
    identifier:"hindi",
    name:'Hindi',
   },
   {
    identifier:"spanish",
    name:'Spanish',
   },{
    identifier:"sanskrit",
    name:'Sanskrit',
   },
   {
    identifier:"japanese",
    name:'Japanese',
   },
   {
    identifier: "gujarati",
    name: "Gujarati",
  },
  {
    identifier: "kannada",
    name: "Kannada",
  },
  {
    identifier: "tamil",
    name: "Tamil",
  },
  {
    identifier: "marathi",
    name: "Marathi",
  },
  {
    identifier: "urdu",
    name: "Urdu",
  },
  {
    identifier: "oriya",
    name: "Oriya",
  },
   {
    identifier:"chinese",
    name:'Chinese',
   },
   {
    identifier: "telugu",
    name: "Telugu",
  },
  {
    identifier: "punjabi",
    name: "Punjabi",
  },
  {
    identifier: "malayalam",
    name: "Malayalam",
  },
  {
    identifier: "assamese",
    name: "Assamese",
  },
  {
    identifier: "kashmiri",
    name: "Kashmiri",
  },
  {
    identifier: "maithili",
    name: "Maithili",
  },
 
  {
    identifier: "konkani",
    name: "Konkani",
  },
  {
    identifier: "bengali",
    name: "Bengali",
  },
  ]