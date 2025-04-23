import { Document } from 'mongoose';
export type ConfiguracoesDocument = Configuracoes & Document;
export declare class Configuracoes {
    nome_loja: string;
    horario_funcionamento: string;
    metodos_pagamento: string[];
}
export declare const ConfiguracoesSchema: import("mongoose").Schema<Configuracoes, import("mongoose").Model<Configuracoes, any, any, any, Document<unknown, any, Configuracoes> & Configuracoes & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Configuracoes, Document<unknown, {}, import("mongoose").FlatRecord<Configuracoes>> & import("mongoose").FlatRecord<Configuracoes> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
