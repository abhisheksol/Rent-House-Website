"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
const Login_1 = __importDefault(require("./component/Login"));
const react_router_dom_1 = require("react-router-dom");
const Nav_1 = __importDefault(require("./component/Nav"));
const Register_1 = __importDefault(require("./component/Register"));
const Home_1 = __importDefault(require("./Home"));
function App() {
    return (<react_router_dom_1.BrowserRouter>
    <header>
      <Nav_1.default />
    </header>
    <react_router_dom_1.Routes>
      <react_router_dom_1.Route path="/" element={<Home_1.default />}/>
      <react_router_dom_1.Route path="/Login" element={<Login_1.default />}/>
      <react_router_dom_1.Route path="/SignUp" element={<Register_1.default />}/>
    </react_router_dom_1.Routes>
  </react_router_dom_1.BrowserRouter>);
}
exports.default = App;
//# sourceMappingURL=App.js.map