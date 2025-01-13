"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import prisma client in typescript
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({
    log: ["query"],
});
exports.default = prisma;
//# sourceMappingURL=dbconfig.js.map