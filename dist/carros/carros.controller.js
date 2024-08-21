"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrosController = void 0;
const common_1 = require("@nestjs/common");
const carros_service_1 = require("./carros.service");
const create_carro_dto_1 = require("./dto/create-carro.dto");
const update_carro_dto_1 = require("./dto/update-carro.dto");
let CarrosController = class CarrosController {
    constructor(carrosService) {
        this.carrosService = carrosService;
    }
    create(createCarroDto) {
        return this.carrosService.create(createCarroDto);
    }
    findAll() {
        return this.carrosService.findAll();
    }
    findOne(id) {
        return this.carrosService.findOne(+id);
    }
    update(id, updateCarroDto) {
        return this.carrosService.update(+id, updateCarroDto);
    }
    remove(id) {
        return this.carrosService.remove(+id);
    }
};
exports.CarrosController = CarrosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_carro_dto_1.CreateCarroDto]),
    __metadata("design:returntype", void 0)
], CarrosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CarrosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarrosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_carro_dto_1.UpdateCarroDto]),
    __metadata("design:returntype", void 0)
], CarrosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarrosController.prototype, "remove", null);
exports.CarrosController = CarrosController = __decorate([
    (0, common_1.Controller)('carros'),
    __metadata("design:paramtypes", [carros_service_1.CarrosService])
], CarrosController);
//# sourceMappingURL=carros.controller.js.map