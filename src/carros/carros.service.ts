import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarroDto } from './dto/create-carro.dto';
import { UpdateCarroDto } from './dto/update-carro.dto';
import { Carro } from './entities/carro.entity';

@Injectable()
export class CarrosService {

  private readonly carros: Carro[] = []
  private id = 1

  create(createCarroDto: CreateCarroDto) {
    const novoCarro = {
      id: this.id,
      marca: createCarroDto.marca,
      modelo: createCarroDto.modelo,
      matricula: createCarroDto.matricula,
      cor: createCarroDto.cor,
      ano: createCarroDto.ano,
    };

    this.id = this.id + 1;


    this.carros.push(novoCarro)

    return novoCarro
  }

  findAll() {
    return this.carros;
  }

  findOne(id: number) {
    const car = this.carros.find(car => car.id == id);
    if (!car) {
      throw new NotFoundException(`Nenhum carro encontrado com o código: ${id}`)
    }
    return car
  }

  update(id: number, updateCarroDto: UpdateCarroDto) {
    const car = this.findOne(id)

    car.modelo = updateCarroDto.modelo
    car.marca = updateCarroDto.marca
    car.matricula = updateCarroDto.matricula
    car.cor = updateCarroDto.cor
    car.ano = updateCarroDto.ano

    return ;
  }

  remove(id: number) {
    this.findOne(id)

    const carIndex = this.carros.findIndex((car) => car.id == id)

    this.carros.splice(carIndex, 1)
    
    return;
  }
}
