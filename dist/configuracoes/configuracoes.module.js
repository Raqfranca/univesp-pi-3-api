"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfiguracoesModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const configuracoes_schema_1 = require("./configuracoes.schema");
const configuracoes_service_1 = require("./configuracoes.service");
const configuracoes_controller_1 = require("./configuracoes.controller");
let ConfiguracoesModule = class ConfiguracoesModule {
};
exports.ConfiguracoesModule = ConfiguracoesModule;
exports.ConfiguracoesModule = ConfiguracoesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: configuracoes_schema_1.Configuracoes.name, schema: configuracoes_schema_1.ConfiguracoesSchema }]),
        ],
        controllers: [configuracoes_controller_1.ConfiguracoesController],
        providers: [configuracoes_service_1.ConfiguracoesService],
    })
], ConfiguracoesModule);
//# sourceMappingURL=configuracoes.module.js.map