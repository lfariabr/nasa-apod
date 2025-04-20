import os
from dotenv import load_dotenv
from openai import OpenAI
from fastapi import HTTPException

load_dotenv()
client = OpenAI(api_key=os.getenv("OPEN_API_KEY"))

async def get_fun_facts(image_description, image_title=None):
    """
    Generate fun facts about an astronomical image using OpenAI's API
    
    Args:
        image_description (str): Description of the astronomical image
        image_title (str, optional): Title of the image
        
    Returns:
        dict: Response containing fun facts about the image
    """
    try:
        prompt = f"""
        You are an enthusiastic and FUN astronomy expert, kind of a mix between Carl Sagan, David Goggins and Jordan Peterson vibes.
        
        I'm looking at an astronomical image with the following description:
        "{image_description}"
        
        {f'The title of this image is: "{image_title}"' if image_title else ''}
        
        Please provide me with 1-3 fascinating, scientifically accurate fun facts about what I'm seeing.
        Focus on surprising or lesser-known information that would make someone say "Wow, I didn't know that!"
        Format your response as a JSON array of strings, with each string containing one fun fact.
        """
        
        # Calling OpenAI API
        response = client.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a helpful astronomy expert providing fascinating facts about space objects."},
                {"role": "user", "content": prompt}
            ]
        )

        # Extract and return response content
        content = response.choices[0].message.content
        return {"fun_facts": content}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating fun facts: {str(e)}")