import { Model } from 'mongoose';
import { Configuracoes, ConfiguracoesDocument } from './configuracoes.schema';
export declare class ConfiguracoesService {
    private readonly model;
    constructor(model: Model<ConfiguracoesDocument>);
    create(data: Partial<Configuracoes>): Promise<Configuracoes>;
    findAll(): Promise<Configuracoes[]>;
    findById(id: string): Promise<Configuracoes>;
    update(id: string, data: Partial<Configuracoes>): Promise<Configuracoes>;
    delete(id: string): Promise<Configuracoes>;
}
