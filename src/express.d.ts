import * as express from "express";

declare global {
    namespace Express {
        interface Request {
            user?: unknown; // Replace `any` with a more specific type if possible
        }
    }
}
