"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const products_schema_1 = require("./schemas/products.schema");
const products_controller_1 = require("./products.controller");
const products_service_1 = require("./products.service");
let ProdutosModule = class ProdutosModule {
};
exports.ProdutosModule = ProdutosModule;
exports.ProdutosModule = ProdutosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: products_schema_1.Produto.name, schema: products_schema_1.ProdutoSchema }]),
        ],
        controllers: [products_controller_1.ProdutosController],
        providers: [products_service_1.ProdutosService],
    })
], ProdutosModule);
//# sourceMappingURL=products.module.js.map