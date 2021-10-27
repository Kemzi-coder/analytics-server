export const parseIp = req => req.headers['x-forwarded-for']?.split(',')
	.shift() || req.socket?.remoteAddress

export const generateLocation = res =>
	`${res.continent_code}|${res.country_code} ${res.region === res.city ?
		res.city : res.region + '/' + res.city}` || ''
