"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrosService = void 0;
const common_1 = require("@nestjs/common");
let CarrosService = class CarrosService {
    constructor() {
        this.carros = [];
        this.id = 1;
    }
    create(createCarroDto) {
        const novoCarro = {
            id: this.id,
            marca: createCarroDto.marca,
            modelo: createCarroDto.modelo,
            matricula: createCarroDto.matricula,
            cor: createCarroDto.cor,
            ano: createCarroDto.ano,
        };
        this.id = this.id + 1;
        this.carros.push(novoCarro);
        return novoCarro;
    }
    findAll() {
        return this.carros;
    }
    findOne(id) {
        const car = this.carros.find(car => car.id == id);
        if (!car) {
            throw new common_1.NotFoundException(`Nenhum carro encontrado com o código: ${id}`);
        }
        return car;
    }
    update(id, updateCarroDto) {
        const car = this.findOne(id);
        car.modelo = updateCarroDto.modelo;
        car.marca = updateCarroDto.marca;
        car.matricula = updateCarroDto.matricula;
        car.cor = updateCarroDto.cor;
        car.ano = updateCarroDto.ano;
        return;
    }
    remove(id) {
        this.findOne(id);
        const carIndex = this.carros.findIndex((car) => car.id == id);
        this.carros.splice(carIndex, 1);
        return;
    }
};
exports.CarrosService = CarrosService;
exports.CarrosService = CarrosService = __decorate([
    (0, common_1.Injectable)()
], CarrosService);
//# sourceMappingURL=carros.service.js.map