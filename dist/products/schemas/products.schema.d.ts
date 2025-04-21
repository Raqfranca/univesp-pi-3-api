import { Document } from 'mongoose';
export type ProdutoDocument = Produto & Document;
export declare class Produto {
    nome: string;
    descricao: string;
    preco: number;
    imagem: string;
    categoria: string;
    quantidade: number;
    disponivel: boolean;
    tipo: string;
}
export declare const ProdutoSchema: import("mongoose").Schema<Produto, import("mongoose").Model<Produto, any, any, any, Document<unknown, any, Produto> & Produto & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Produto, Document<unknown, {}, import("mongoose").FlatRecord<Produto>> & import("mongoose").FlatRecord<Produto> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
