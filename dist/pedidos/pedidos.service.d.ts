import { Model } from 'mongoose';
import { Pedido, PedidoDocument } from './schemas/pedido.schema';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
export declare class PedidosService {
    private pedidoModel;
    constructor(pedidoModel: Model<PedidoDocument>);
    create(dto: CreatePedidoDto): Promise<import("mongoose").Document<unknown, {}, PedidoDocument> & Pedido & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, PedidoDocument> & Pedido & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, PedidoDocument> & Pedido & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    update(id: string, dto: UpdatePedidoDto): Promise<(import("mongoose").Document<unknown, {}, PedidoDocument> & Pedido & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, PedidoDocument> & Pedido & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
