function formatResponse([response, body]) {

	return {
		status: response.status,
		statusText: response.statusText,
		ok: response.ok,
		redirected: response.redirected,
		type: response.type,
		url: response.url,
		body: body,
	}

}

export function sendEmail(body) {

	return new Promise((resolve, reject) => {

		let path = "/api/send_email/"

		fetch(path, {

			method: 'POST',

			headers: {
				'Content-Type': 'application/json'
			},

			body: JSON.stringify(body),

		})
		.then((response) => { 
			return Promise.all([ response, response.json() ])
		})
		.then((response) => {
			resolve(formatResponse(response))
		})
		.catch((error) => {
			reject(error);
		});

	});
	
}