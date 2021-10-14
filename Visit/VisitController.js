import VisitService from './VisitService.js'

class VisitController {
	async create(req, res) {
		try {
			const visit = await VisitService.create(req.body)
			res.json(visit)
		} catch (e) {
			res.status(500).json(e)
		}
	}

	async getAll(req, res) {
		try {
			const visits = await VisitService.getAll()
			res.json(visits)
		} catch (e) {
			res.status(500).json(e)
		}
	}

	async get(req, res) {
		try {
			const visit = await VisitService.get(req.params.id)
			res.json(visit)
		} catch (e) {
			res.status(500).json(e)
		}
	}

	async update(req, res) {
		try {
			const visit = await VisitService.update(req.body)
			res.json(visit)
		} catch (e) {
			res.status(500).json(e)
		}
	}

	async delete(req, res) {
		try {
			const visit = await VisitService.delete(req.params.id)
			res.json(visit)
		} catch (e) {
			res.status(500).json(e)
		}
	}
}

export default new VisitController()
