import * as React from "react";
import { Icons } from "./style";

export interface ButtonProps {
        label: string;
        callback: Function;
        icon: keyof typeof Icons;
}

const Button: React.FunctionComponent<ButtonProps> = ({ label, callback, icon }) => {
        return (
                <button
                        onClick={() => callback()}
                        type="button"
                        className="bg-white px-4 py-2 text-black  font-semibold flex justify-center items-center rounded-sm text-lg duration-300 hover:bg-blue-300 focus:outline-none"
                >
                        {label}
                        <div className="ml-2">{Icons[icon]}</div>
                </button>
        );
};

export default Button;
