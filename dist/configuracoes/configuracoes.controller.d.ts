import { ConfiguracoesService } from './configuracoes.service';
import { Configuracoes } from './configuracoes.schema';
export declare class ConfiguracoesController {
    private readonly service;
    constructor(service: ConfiguracoesService);
    create(data: Partial<Configuracoes>): Promise<Configuracoes>;
    findAll(): Promise<Configuracoes[]>;
    findById(id: string): Promise<Configuracoes>;
    update(id: string, data: Partial<Configuracoes>): Promise<Configuracoes>;
    delete(id: string): Promise<Configuracoes>;
}
