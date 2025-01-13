"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
class Register extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {};
    }
    render() {
        return (<div>
                <h1>Registeration </h1>
                <div className='flex justify-center items-center h-screen bg-slate-400 '>
                    {/* simple login form */}
                    <div className='flex bg-gray-50 p-10 w-96 rounded-lg shadow-lg'>
                        <form onSubmit={(e) => alert('submitted')}>
                            <label className='text-lg font-bold'>Register</label>
                            <br />
                            <br />
                            <input className='w-full p-2 mb-2 border border-gray-300 rounded' type="text" placeholder="Username"/>

                            <input className='w-full p-2 mb-2 border border-gray-300 rounded' type="password" placeholder="Password"/>
                            <button className='w-full p-2 mb-2 border border-gray-300 rounded bg-black text-white' type="submit">Register</button>
                        </form>
                    </div>
                </div>
                </div>);
    }
}
exports.default = Register;
//# sourceMappingURL=Register.js.map