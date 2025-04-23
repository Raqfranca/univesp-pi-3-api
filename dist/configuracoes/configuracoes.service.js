"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfiguracoesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const configuracoes_schema_1 = require("./configuracoes.schema");
let ConfiguracoesService = class ConfiguracoesService {
    model;
    constructor(model) {
        this.model = model;
    }
    async create(data) {
        return this.model.create(data);
    }
    async findAll() {
        return this.model.find().exec();
    }
    async findById(id) {
        const config = await this.model.findById(id).exec();
        if (!config) {
            throw new common_1.NotFoundException(`Configuração com id '${id}' não encontrada`);
        }
        return config;
    }
    async update(id, data) {
        const updated = await this.model.findByIdAndUpdate(id, data, { new: true }).exec();
        if (!updated) {
            throw new common_1.NotFoundException(`Configuração com id '${id}' não encontrada para atualização`);
        }
        return updated;
    }
    async delete(id) {
        const deleted = await this.model.findByIdAndDelete(id).exec();
        if (!deleted) {
            throw new common_1.NotFoundException(`Configuração com id '${id}' não encontrada para exclusão`);
        }
        return deleted;
    }
};
exports.ConfiguracoesService = ConfiguracoesService;
exports.ConfiguracoesService = ConfiguracoesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(configuracoes_schema_1.Configuracoes.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ConfiguracoesService);
//# sourceMappingURL=configuracoes.service.js.map