"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Navbar = () => {
    return (<>
            
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                {/* removing a tag adding link here */}
                                <react_router_dom_1.Link to="/" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</react_router_dom_1.Link>
                            </li>
                            <li>
                            <react_router_dom_1.Link to="/Login" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Login</react_router_dom_1.Link>

                            </li>
                            <li>
                            <react_router_dom_1.Link to="/SignUp" className="text-gray-900 dark:text-white hover:underline" aria-current="page">SignUp</react_router_dom_1.Link>

                            </li>
                            <li>
                            <react_router_dom_1.Link to="/" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Features</react_router_dom_1.Link>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>);
};
exports.default = Navbar;
//# sourceMappingURL=Nav.js.map