try {
          console.log(searchText.current.value);
      
         
      
          const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo', // Use a valid model
          });
      
          console.log(gptResults.choices);
        } catch (error) {
          console.error('Error calling OpenAI API:', error.message);
          toast.error('Error: ' + error.message);
        }