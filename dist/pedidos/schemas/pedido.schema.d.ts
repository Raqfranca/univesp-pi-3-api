import { Document } from 'mongoose';
export type PedidoDocument = Pedido & Document;
export declare class Pedido {
    id_usuario: string;
    data_pedido: Date;
    total: number;
    tipo: string;
    pagamento_metodo: string;
    tipo_entrega: string;
}
export declare const PedidoSchema: import("mongoose").Schema<Pedido, import("mongoose").Model<Pedido, any, any, any, Document<unknown, any, Pedido> & Pedido & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Pedido, Document<unknown, {}, import("mongoose").FlatRecord<Pedido>> & import("mongoose").FlatRecord<Pedido> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
