const form=document.getElementById('chat-form');
const mytextInput=document.getElementById('myText');
const responseTextAera=document.getElementById('response');


form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const myText= mytextInput.value.trim();
    
    if(myText)
    {
        try{

            const { Configuration, OpenAIApi } = require("openai");

            const configuration = new Configuration({
              apiKey: "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",
            });
            const openai = new OpenAIApi(configuration);
            
            const response = await openai.createChatCompletion({
              model: "gpt-3.5-turbo",
              messages: [],
              temperature: 0,
              max_tokens: 256,
              top_p: 1,
              frequency_penalty: 0,
              presence_penalty: 0,
            });

            if(response.ok)
            {
                const data=await response.json();
                responseTextAera.value=data.choices[0].messages.content;
            }
            else
            {
                responseTextAera.value='error no response';
            }
        }
        catch(error){
            console.error(error);
            responseTextAera.value='Error connection';
        }

    }

});