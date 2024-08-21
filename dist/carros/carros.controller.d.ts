import { CarrosService } from './carros.service';
import { CreateCarroDto } from './dto/create-carro.dto';
import { UpdateCarroDto } from './dto/update-carro.dto';
export declare class CarrosController {
    private readonly carrosService;
    constructor(carrosService: CarrosService);
    create(createCarroDto: CreateCarroDto): {
        id: number;
        marca: string;
        modelo: string;
        matricula: string;
        cor: string;
        ano: number;
    };
    findAll(): import("./entities/carro.entity").Carro[];
    findOne(id: string): import("./entities/carro.entity").Carro;
    update(id: string, updateCarroDto: UpdateCarroDto): void;
    remove(id: string): void;
}
