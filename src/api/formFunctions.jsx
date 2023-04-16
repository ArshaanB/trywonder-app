const formId = '5054317'

export async function handleSubmitEmail(email, setMessage) {
  try {
    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: process.env.NEXT_PUBLIC_CONVERT_KIT_API_KEY,
          email: email,
        }),
      }
    )

    if (response.status === 200) {
      setMessage('Successfully subscribed to the mailing list!')
    } else {
      setMessage('An error occurred. Please try again later.')
    }
  } catch (error) {
    setMessage('An error occurred. Please try again later.')
  }
}
