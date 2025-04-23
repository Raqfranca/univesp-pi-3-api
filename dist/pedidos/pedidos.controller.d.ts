import { PedidosService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
export declare class PedidosController {
    private readonly pedidosService;
    constructor(pedidosService: PedidosService);
    create(createPedidoDto: CreatePedidoDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/pedido.schema").PedidoDocument> & import("./schemas/pedido.schema").Pedido & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/pedido.schema").PedidoDocument> & import("./schemas/pedido.schema").Pedido & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/pedido.schema").PedidoDocument> & import("./schemas/pedido.schema").Pedido & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    update(id: string, updatePedidoDto: UpdatePedidoDto): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/pedido.schema").PedidoDocument> & import("./schemas/pedido.schema").Pedido & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/pedido.schema").PedidoDocument> & import("./schemas/pedido.schema").Pedido & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
