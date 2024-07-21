"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = (userId) => {
    return jsonwebtoken_1.default.sign({ id: userId }, process.env.JWT_KEY, { expiresIn: "1h" });
};
exports.generateToken = generateToken;
const authenticateToken = (req, res, next) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!token)
        return res.status(401).send("Access Denied");
    jsonwebtoken_1.default.verify(token, process.env.JWT_KEY, (err, user) => {
        if (err)
            return res.status(403).send("Invalid Token");
        req.user = user;
        next();
    });
};
exports.authenticateToken = authenticateToken;
