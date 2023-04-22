import { OPEN_API_URL, OPEN_API_KEY } from '@env';

export const createOpenApiRequest = async(prompt) => {
  console.log("hi")
  const response = await fetch(`${OPEN_API_URL}chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPEN_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ 'role': 'user', 'content': `${prompt}` }]
    })
  })
  const result = await response.json()
  console.log("result: " + JSON.stringify(result))
  console.log("Result: " + JSON.stringify(result.choices[0].message.content))
  return result;
}


export const getConversation = async (content) => {
  const response = await fetch(`${OPEN_API_URL}chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPEN_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ 'role': 'user', 'content': `Please be ready to create a formatted event data model that can be imported into ical?` }]
    })
  })
  const result = await response.json()
  // createEvent(result.choices.content)
  console.log("Response: ", JSON.stringify(result.choices[0].message.content))
}