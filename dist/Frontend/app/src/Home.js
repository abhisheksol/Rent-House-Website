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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const react_1 = __importStar(require("react"));
function Home({}) {
    const [users, setUsers] = (0, react_1.useState)([]); // State to store user data
    const [error, setError] = (0, react_1.useState)(''); // State to store error message if any
    const getUsers = () => __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield axios_1.default.get('http://localhost:3000/user/');
            setUsers(res.data); // Store the fetched data in state
        }
        catch (err) {
            setError('Failed to fetch users. Please try again.'); // Handle error
            console.error(err);
        }
    });
    (0, react_1.useEffect)(() => {
        getUsers(); // Fetch users on component mount
    }, []);
    return (<div className="flex flex-col justify-center items-center h-screen bg-slate-400 p-4">
            <h1 className="text-2xl font-bold text-white mb-4">Home</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>} {/* Display error message */}
            <div className="bg-white p-4 rounded shadow-md w-full max-w-2xl">
                <h2 className="text-xl font-bold mb-2">User List</h2>
                {users.length > 0 ? (<ul className="space-y-2">
                        {users.map((user) => (<li key={user.id} className="border p-2 rounded shadow-sm">
                                <p className="font-semibold">Name: {user.name}</p>
                                <p>Email: {user.email}</p>
                                <p>Role: {user.role}</p>
                                <p>Created At: {new Date(user.created_at).toLocaleDateString()}</p>
                                <p>Properties: {user.properties.length}</p>
                                <p>Bookings: {user.bookings.length}</p>
                            </li>))}
                    </ul>) : (<p>No users found.</p>)}
            </div>
        </div>);
}
exports.default = Home;
//# sourceMappingURL=Home.js.map