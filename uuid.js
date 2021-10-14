import {nanoid} from 'nanoid'

export async function generateUUID(req, res) {
    try {
        const uuid = nanoid()
        res.json(uuid)
    } catch (e) {
        res.status(500).json(e)
    }
}