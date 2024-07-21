"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const todoRoute_1 = __importDefault(require("./routes/todoRoute"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const database_1 = __importDefault(require("./config/database"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use('/api', todoRoute_1.default);
app.use('/api', userRoute_1.default);
(0, database_1.default)();
exports.default = app;
