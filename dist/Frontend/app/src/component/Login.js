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
class Login extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {};
    }
    render() {
        return (<div className='flex justify-center items-center h-screen bg-slate-400 '>
                {/* simple login form */}
                <div className='flex bg-gray-50 p-10 w-96 rounded-lg shadow-lg'>
                    <form onSubmit={(e) => alert('submitted')}>
                        <label className='text-lg font-bold'>Login</label>
                        <br />
                        <br />
                        <input className='w-full p-2 mb-2 border border-gray-300 rounded' type="text" placeholder="Username"/>

                        <input className='w-full p-2 mb-2 border border-gray-300 rounded' type="password" placeholder="Password"/>
                        <button className='w-full p-2 mb-2 border border-gray-300 rounded bg-black text-white' type="submit">Login</button>
                    </form>
                </div>
            </div>
        // <section className="bg-gray-50 dark:bg-gray-900">
        //   <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        //     <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        //       <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        //         <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        //           Login in to your account
        //         </h1>
        //         <form className="space-y-4 md:space-y-6" action="#">
        //           <div>
        //             <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
        //             <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
        //           </div>
        //           <div>
        //             <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        //             <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        //           </div>
        //           <div className="flex items-center justify-between">
        //             <div className="flex items-start">
        //               <div className="flex items-center h-5">
        //                 <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
        //               </div>
        //               <div className="ml-3 text-sm">
        //                 <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
        //               </div>
        //             </div>
        //             <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
        //           </div>
        //           <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
        //           <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        //             Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
        //           </p>
        //         </form>
        //       </div>
        //     </div>
        //   </div>
        // </section>
        );
    }
}
exports.default = Login;
//# sourceMappingURL=Login.js.map