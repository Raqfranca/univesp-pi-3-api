import { ProdutosService } from './products.service';
import { CreateProdutoDto } from './dto/create-products.dto';
import { UpdateProdutoDto } from './dto/update-products.dto';
export declare class ProdutosController {
    private readonly produtosService;
    constructor(produtosService: ProdutosService);
    create(createProdutoDto: CreateProdutoDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/products.schema").ProdutoDocument> & import("./schemas/products.schema").Produto & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/products.schema").ProdutoDocument> & import("./schemas/products.schema").Produto & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/products.schema").ProdutoDocument> & import("./schemas/products.schema").Produto & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    update(id: string, updateProdutoDto: UpdateProdutoDto): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/products.schema").ProdutoDocument> & import("./schemas/products.schema").Produto & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/products.schema").ProdutoDocument> & import("./schemas/products.schema").Produto & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
