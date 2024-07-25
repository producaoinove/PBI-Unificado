

export default async function getTokenById(values: string) {
	const api_url = process.env.NEXT_PUBLIC_API_URL;
	const response = await fetch(`${api_url}/api/token`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: values
	})
	const data = await response.json()
	const token = data['token']
	return token
}