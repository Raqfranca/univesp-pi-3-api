import { Model } from 'mongoose';
import { Produto, ProdutoDocument } from './schemas/products.schema';
import { CreateProdutoDto } from './dto/create-products.dto';
import { UpdateProdutoDto } from './dto/update-products.dto';
export declare class ProdutosService {
    private produtoModel;
    constructor(produtoModel: Model<ProdutoDocument>);
    create(createProdutoDto: CreateProdutoDto): Promise<import("mongoose").Document<unknown, {}, ProdutoDocument> & Produto & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, ProdutoDocument> & Produto & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, ProdutoDocument> & Produto & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    update(id: string, updateProdutoDto: UpdateProdutoDto): Promise<(import("mongoose").Document<unknown, {}, ProdutoDocument> & Produto & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, ProdutoDocument> & Produto & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
