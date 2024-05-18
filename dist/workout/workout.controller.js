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
exports.WorkoutController = void 0;
const common_1 = require("@nestjs/common");
const workout_service_1 = require("./workout.service");
const new_workout_dto_1 = require("./dtos/new-workout.dto");
let WorkoutController = class WorkoutController {
    constructor(workoutService) {
        this.workoutService = workoutService;
    }
    createWorkout(workout) {
        return this.workoutService.createWorkout(workout);
    }
    getWorkouts(userId) {
        return this.workoutService.getWorkouts(userId);
    }
};
exports.WorkoutController = WorkoutController;
__decorate([
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [new_workout_dto_1.NewWorkoutDTO]),
    __metadata("design:returntype", Promise)
], WorkoutController.prototype, "createWorkout", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WorkoutController.prototype, "getWorkouts", null);
exports.WorkoutController = WorkoutController = __decorate([
    (0, common_1.Controller)("workouts"),
    __metadata("design:paramtypes", [workout_service_1.WorkoutService])
], WorkoutController);
//# sourceMappingURL=workout.controller.js.map