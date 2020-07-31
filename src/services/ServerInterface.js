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

export function sendEmail() {

	return new Promise((resolve, reject) => {

		let path = "http://localhost:3000/api/send_email/"

		fetch(path, {

			method: 'GET',

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