import { CreateCarroDto } from './dto/create-carro.dto';
import { UpdateCarroDto } from './dto/update-carro.dto';
import { Carro } from './entities/carro.entity';
export declare class CarrosService {
    private readonly carros;
    private id;
    create(createCarroDto: CreateCarroDto): {
        id: number;
        marca: string;
        modelo: string;
        matricula: string;
        cor: string;
        ano: number;
    };
    findAll(): Carro[];
    findOne(id: number): Carro;
    update(id: number, updateCarroDto: UpdateCarroDto): void;
    remove(id: number): void;
}
