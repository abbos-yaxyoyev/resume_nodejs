"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonServices = void 0;
const exceptions_1 = require("./../constants/exceptions");
class CommonServices {
    constructor(model, errorConstructor = exceptions_1.CommonException) {
        this.model = model;
        this.errorConstructor = errorConstructor;
    }
    async count(query) {
        try {
            return await this.model.countDocuments(query);
        }
        catch (error) {
            throw error;
        }
    }
    async find(query, options, projection = { __v: 0 }) {
        try {
            return await this.model.find(query, projection, options);
        }
        catch (error) {
            throw error;
        }
    }
    async findOne(query, options, projection = { __v: 0 }) {
        try {
            return await this.model.findOne(query, projection, options);
        }
        catch (error) {
            throw error;
        }
    }
    async findById(id, options, projection = { __v: 0 }) {
        try {
            console.log('this.model: ', this.model);
            return await this.model.findOne({ _id: id, isDeleted: false }, projection, options);
        }
        catch (error) {
            throw error;
        }
    }
    async create(data, options) {
        try {
            const saved = await this.model.create([data], options);
            return await this.model.findById(saved[0]._id, {}, options);
        }
        catch (error) {
            if (error.code == 11000, error.name == "MongoError") {
                throw this.errorConstructor.AllreadyExist({ keyPattern: error.keyPattern, keyValue: error.keyValue }, this.model.collection.collectionName, error.message);
            }
            throw this.errorConstructor.UnknownError(error);
        }
    }
    async insertMany(data, options) {
        try {
            return await this.model.insertMany(data, options);
        }
        catch (error) {
            throw error;
        }
    }
    async deleteOne(query, options) {
        try {
            return await this.model.deleteOne(query, options);
        }
        catch (error) {
            throw this.errorConstructor.UnknownError(error);
        }
    }
    async markAsDeleted(id) {
        try {
            return await this.model.findByIdAndUpdate(id, { isDeleted: true });
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    }
    async updateOne(id, data, options) {
        try {
            await this.model.findOneAndUpdate({ _id: id, isDeleted: false }, data, options);
            return await this.model.findById(id);
        }
        catch (error) {
            throw this.errorConstructor.UnknownError(error);
        }
    }
    async updateOneByQuery(query, data, options) {
        try {
            return await this.model.findOneAndUpdate(query, data, options);
        }
        catch (error) {
            throw this.errorConstructor.UnknownError(error);
        }
    }
    async updateMany(query, data, options) {
        try {
            return await this.model.updateMany(query, data, options).exec();
        }
        catch (error) {
            throw error;
        }
    }
    async aggregate(pipeline, options) {
        try {
            return await this.model.aggregate(pipeline, options).allowDiskUse(true).exec();
        }
        catch (error) {
            throw error;
        }
    }
    async findPaging(query, dto, additional_pipeline = [
        {
            $project: {
                __v: 0,
            },
        },
    ], sort = null) {
        try {
            const { limit, page, sortBy, asc } = dto;
            const total = await this.model.countDocuments(query);
            const $match = {
                $match: query,
            };
            const $sort = {
                $sort: {
                    createdAt: -1,
                },
            };
            if (sortBy) {
                $sort.$sort = {};
                $sort.$sort[`${sortBy}`] = asc > 0 ? 1 : -1;
            }
            else if (sort) {
                $sort.$sort = sort;
            }
            const $skip = {
                $skip: limit * (page - 1),
            };
            const $limit = {
                $limit: limit,
            };
            let pipeline = [$match, $sort, $skip, $limit];
            if (additional_pipeline.length > 0) {
                pipeline = [...pipeline, ...additional_pipeline];
            }
            const data = await this.model.aggregate(pipeline).allowDiskUse(true).exec();
            return {
                total,
                data,
            };
        }
        catch (error) {
            throw error;
        }
    }
}
exports.CommonServices = CommonServices;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbW9uL3NlcnZpY2UvY29tbW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EsMERBQTREO0FBRTVELE1BQWEsY0FBYztJQUN6QixZQUFtQixLQUFtQixFQUFTLG1CQUFtQiw0QkFBZTtRQUE5RCxVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQVMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFJLENBQUM7SUFFL0UsS0FBSyxDQUFDLEtBQUssQ0FBSSxLQUFLO1FBQ3pCLElBQUk7WUFDRixPQUFPLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0M7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE1BQU0sS0FBSyxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUksQ0FBSSxLQUFLLEVBQUUsT0FBc0IsRUFBRSxhQUFxQixFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7UUFDakYsSUFBSTtZQUNGLE9BQU8sTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzFEO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxNQUFNLEtBQUssQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVNLEtBQUssQ0FBQyxPQUFPLENBQUksS0FBSyxFQUFFLE9BQXNCLEVBQUUsYUFBcUIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFO1FBQ3BGLElBQUk7WUFDRixPQUFPLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3RDtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsTUFBTSxLQUFLLENBQUM7U0FDYjtJQUNILENBQUM7SUFFTSxL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LENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBRTVFLE9BQU87Z0JBQ0wsS0FBSztnQkFDTCxJQUFJO2FBQ0wsQ0FBQztTQUNIO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxNQUFNLEtBQUssQ0FBQztTQUNiO0lBQ0gsQ0FBQztDQUNGO0FBcEtELHdDQW9LQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGVsVHlwZSB9IGZyb20gJ0B0eXBlZ29vc2UvdHlwZWdvb3NlL2xpYi90eXBlcyc7XHJcbmltcG9ydCB7IFF1ZXJ5T3B0aW9ucyB9IGZyb20gJ21vbmdvb3NlJztcclxuaW1wb3J0IHsgUGFnaW5nRHRvIH0gZnJvbSAnLi4vdmFsaWRhdGlvbi9kdG8vcGFnaW5nLmR0byc7XHJcbmltcG9ydCB7IENvbW1vbkV4Y2VwdGlvbiB9IGZyb20gJy4vLi4vY29uc3RhbnRzL2V4Y2VwdGlvbnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbW1vblNlcnZpY2VzPFQ+IHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbW9kZWw6IE1vZGVsVHlwZTxUPiwgcHVibGljIGVycm9yQ29uc3RydWN0b3IgPSBDb21tb25FeGNlcHRpb24pIHsgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgY291bnQ8VD4ocXVlcnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLm1vZGVsLmNvdW50RG9jdW1lbnRzKHF1ZXJ5KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGZpbmQ8VD4ocXVlcnksIG9wdGlvbnM/OiBRdWVyeU9wdGlvbnMsIHByb2plY3Rpb246IG9iamVjdCA9IHsgX192OiAwIH0pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLm1vZGVsLmZpbmQocXVlcnksIHByb2plY3Rpb24sIG9wdGlvbnMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZmluZE9uZTxUPihxdWVyeSwgb3B0aW9ucz86IFF1ZXJ5T3B0aW9ucywgcHJvamVjdGlvbjogb2JqZWN0ID0geyBfX3Y6IDAgfSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kZWwuZmluZE9uZShxdWVyeSwgcHJvamVjdGlvbiwgb3B0aW9ucyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0aHJvdyBlcnJvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBmaW5kQnlJZDxUPihpZDogc3RyaW5nLCBvcHRpb25zPzogUXVlcnlPcHRpb25zLCBwcm9qZWN0aW9uOiBvYmplY3QgPSB7IF9fdjogMCB9KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zb2xlLmxvZygndGhpcy5tb2RlbDogJywgdGhpcy5tb2RlbCk7XHJcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLm1vZGVsLmZpbmRPbmUoeyBfaWQ6IGlkLCBpc0RlbGV0ZWQ6IGZhbHNlIH0sIHByb2plY3Rpb24sIG9wdGlvbnMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgY3JlYXRlPFQ+KGRhdGEsIG9wdGlvbnM/KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBzYXZlZCA9IGF3YWl0IHRoaXMubW9kZWwuY3JlYXRlKFtkYXRhXSwgb3B0aW9ucyk7XHJcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLm1vZGVsLmZpbmRCeUlkKHNhdmVkWzBdLl9pZCwge30sIG9wdGlvbnMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaWYgKGVycm9yLmNvZGUgPT0gMTEwMDAsIGVycm9yLm5hbWUgPT0gXCJNb25nb0Vycm9yXCIpIHtcclxuICAgICAgICB0aHJvdyB0aGlzLmVycm9yQ29uc3RydWN0b3IuQWxscmVhZHlFeGlzdCh7IGtleVBhdHRlcm46IGVycm9yLmtleVBhdHRlcm4sIGtleVZhbHVlOiBlcnJvci5rZXlWYWx1ZSB9LCB0aGlzLm1vZGVsLmNvbGxlY3Rpb24uY29sbGVjdGlvbk5hbWUsIGVycm9yLm1lc3NhZ2UsKVxyXG4gICAgICB9XHJcbiAgICAgIHRocm93IHRoaXMuZXJyb3JDb25zdHJ1Y3Rvci5Vbmtub3duRXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGluc2VydE1hbnk8VD4oZGF0YSwgb3B0aW9ucz8pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLm1vZGVsLmluc2VydE1hbnkoZGF0YSwgb3B0aW9ucyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0aHJvdyBlcnJvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBkZWxldGVPbmU8VD4ocXVlcnksIG9wdGlvbnM/OiBRdWVyeU9wdGlvbnMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLm1vZGVsLmRlbGV0ZU9uZShxdWVyeSwgb3B0aW9ucyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0aHJvdyB0aGlzLmVycm9yQ29uc3RydWN0b3IuVW5rbm93bkVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBtYXJrQXNEZWxldGVkKGlkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5tb2RlbC5maW5kQnlJZEFuZFVwZGF0ZShpZCwge2lzRGVsZXRlZDp0cnVlfSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgdXBkYXRlT25lPFQ+KGlkLCBkYXRhLCBvcHRpb25zPzogUXVlcnlPcHRpb25zKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCB0aGlzLm1vZGVsLmZpbmRPbmVBbmRVcGRhdGUoeyBfaWQ6IGlkLCBpc0RlbGV0ZWQ6IGZhbHNlIH0sIGRhdGEsIG9wdGlvbnMpO1xyXG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5tb2RlbC5maW5kQnlJZChpZCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0aHJvdyB0aGlzLmVycm9yQ29uc3RydWN0b3IuVW5rbm93bkVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyB1cGRhdGVPbmVCeVF1ZXJ5PFQ+KHF1ZXJ5LCBkYXRhLCBvcHRpb25zPzogUXVlcnlPcHRpb25zKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5tb2RlbC5maW5kT25lQW5kVXBkYXRlKHF1ZXJ5LCBkYXRhLCBvcHRpb25zKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRocm93IHRoaXMuZXJyb3JDb25zdHJ1Y3Rvci5Vbmtub3duRXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHVwZGF0ZU1hbnk8VD4ocXVlcnksIGRhdGEsIG9wdGlvbnM/OiBRdWVyeU9wdGlvbnMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLm1vZGVsLnVwZGF0ZU1hbnkocXVlcnksIGRhdGEsIG9wdGlvbnMpLmV4ZWMoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGFnZ3JlZ2F0ZTxUPihwaXBlbGluZTogQXJyYXk8YW55Piwgb3B0aW9ucz8pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLm1vZGVsLmFnZ3JlZ2F0ZShwaXBlbGluZSwgb3B0aW9ucykuYWxsb3dEaXNrVXNlKHRydWUpLmV4ZWMoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGZpbmRQYWdpbmc8VD4oXHJcbiAgICBxdWVyeSxcclxuICAgIGR0bzogUGFnaW5nRHRvLFxyXG4gICAgYWRkaXRpb25hbF9waXBlbGluZTogYW55ID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgJHByb2plY3Q6IHtcclxuICAgICAgICAgIF9fdjogMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIHNvcnQgPSBudWxsLFxyXG4gICkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBsaW1pdCwgcGFnZSwgc29ydEJ5LCBhc2MgfSA9IGR0bztcclxuXHJcbiAgICAgIGNvbnN0IHRvdGFsID0gYXdhaXQgdGhpcy5tb2RlbC5jb3VudERvY3VtZW50cyhxdWVyeSk7XHJcblxyXG4gICAgICBjb25zdCAkbWF0Y2ggPSB7XHJcbiAgICAgICAgJG1hdGNoOiBxdWVyeSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0ICRzb3J0ID0ge1xyXG4gICAgICAgICRzb3J0OiB7XHJcbiAgICAgICAgICBjcmVhdGVkQXQ6IC0xLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAoc29ydEJ5KSB7XHJcbiAgICAgICAgJHNvcnQuJHNvcnQgPSB7fSBhcyBhbnk7XHJcbiAgICAgICAgJHNvcnQuJHNvcnRbYCR7c29ydEJ5fWBdID0gYXNjID4gMCA/IDEgOiAtMTtcclxuICAgICAgfSBlbHNlIGlmIChzb3J0KSB7XHJcbiAgICAgICAgJHNvcnQuJHNvcnQgPSBzb3J0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCAkc2tpcCA9IHtcclxuICAgICAgICAkc2tpcDogbGltaXQgKiAocGFnZSAtIDEpLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgJGxpbWl0ID0ge1xyXG4gICAgICAgICRsaW1pdDogbGltaXQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBsZXQgcGlwZWxpbmU6IEFycmF5PGFueT4gPSBbJG1hdGNoLCAkc29ydCwgJHNraXAsICRsaW1pdF07XHJcblxyXG4gICAgICBpZiAoYWRkaXRpb25hbF9waXBlbGluZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcGlwZWxpbmUgPSBbLi4ucGlwZWxpbmUsIC4uLmFkZGl0aW9uYWxfcGlwZWxpbmVdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5tb2RlbC5hZ2dyZWdhdGUocGlwZWxpbmUpLmFsbG93RGlza1VzZSh0cnVlKS5leGVjKCk7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRvdGFsLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0aHJvdyBlcnJvcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19