export const parseIp = req => req.headers['x-forwarded-for']?.split(',')
	.shift() || req.socket?.remoteAddress
