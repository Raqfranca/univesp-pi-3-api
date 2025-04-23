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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoSchema = exports.Pedido = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Pedido = class Pedido {
    id_usuario;
    data_pedido;
    total;
    tipo;
    pagamento_metodo;
    tipo_entrega;
};
exports.Pedido = Pedido;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Pedido.prototype, "id_usuario", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], Pedido.prototype, "data_pedido", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Pedido.prototype, "total", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: ['pronta_entrega', 'encomenda'], required: true }),
    __metadata("design:type", String)
], Pedido.prototype, "tipo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Pedido.prototype, "pagamento_metodo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Pedido.prototype, "tipo_entrega", void 0);
exports.Pedido = Pedido = __decorate([
    (0, mongoose_1.Schema)()
], Pedido);
exports.PedidoSchema = mongoose_1.SchemaFactory.createForClass(Pedido);
//# sourceMappingURL=pedido.schema.js.map