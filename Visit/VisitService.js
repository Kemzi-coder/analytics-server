import Visit from './Visit.js';

class VisitService {
    async create(visit) {
        const createdVisit = await Visit.create(visit);
        return createdVisit;
    }

    async getAll() {
        const sortedVisits = await Visit.find().sort({mdate: -1});
        return sortedVisits;
    }

    async get(id) {
        if (!id) {
            throw new Error('Id is undefined');
        }

        const sortedVisits = await Visit.find({uuid: id}).sort({mdate: -1});

        return sortedVisits;
    }

    async update(visit) {
        if (!visit.uuid) {
            throw new Error('Id is undefined');
        }

        const sortedVisit = await Visit.find({uuid: visit.uuid}).sort({mdate: -1}).limit(1);
        const updatedVisit = await Visit.findOneAndUpdate({uuid: sortedVisit[0].uuid, mdate: sortedVisit[0].mdate}, visit);

        return updatedVisit;
    }

    async delete(id) {
        if (!id) {
            throw new Error('Id is undefined');
        }

        const sortedVisit = await Visit.find({uuid: id}).sort({mdate: -1}).limit(1);
        await Visit.deleteOne(
            {uuid: sortedVisit[0].uuid, mdate: sortedVisit[0].mdate}
        );

        return sortedVisit[0];
    }
}

export default new VisitService();