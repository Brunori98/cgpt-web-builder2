```javascript
   import { Configuration, OpenAIApi } from "openai";

   // Configura la chiave API
   const configuration = new Configuration({
     apiKey: process.env.OPENAI_API_KEY, // Usa la variabile di ambiente
   });
   const openai = new OpenAIApi(configuration);

   export default async function handler(req, res) {
     if (req.method === "POST") {
       try {
         // Richiesta di completamento dal modello GPT-3
         const response = await openai.createCompletion({
model: "text-davinci-003", // Usa il modello di OpenAI
           prompt: req.body.prompt,   // Il prompt viene inviato dal client
           max_tokens: 100,           // Numero massimo di token nella risposta
         });

         // Restituisci la risposta a chi ha effettuato la richiesta
         res.status(200).json(response.data);
       } catch (error) {
         console.error("Errore con OpenAI:", error);
         res.status(500).json({ error: "Errore nella chiamata a OpenAI" });
       }
     } else {
       res.status(405).json({ error: "Metodo non consentito" }); // Metodo non supportato
     }
   }
   ```

