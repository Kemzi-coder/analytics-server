import User from './User.js'

class UserService {
	async create(user) {
		const candidate = await User.findOne({uuid: user.uuid})
		if (candidate) {
			if (user.ip !== candidate.ip) {
				await User.updateOne({uuid: user.uuid}, {ip: user.ip})
			}
			return
		}
		const createdUser = await User.create(user)
		return createdUser
	}

	async getAll() {
		const users = await User.find()
		return users
	}

	async getOne(id) {
		if (!id) {
			throw new Error('Id is undefined')
		}

		const user = await User.findById(id)
		return user
	}

	async update(user) {
		if (!user._id) {
			throw new Error('Id is undefined')
		}

		const updatedUser = await User.findByIdAndUpdate(user._id, user)
		return updatedUser
	}

	async delete(id) {
		if (!id) {
			throw new Error('Id is undefined')
		}

		const user = await User.findByIdAndDelete(id)
		return user
	}
}

export default new UserService()
