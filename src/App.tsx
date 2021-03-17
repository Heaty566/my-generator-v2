import { useEffect, useState } from "react";
import Btn from "./component/btn";
import faker from "faker";
import "./App.css";

function App() {
        const [text, setText] = useState("");
        const [timer, setTimer] = useState(30);

        useEffect(() => {
                const interId = setInterval(() => {
                        setTimer(timer - 1);
                }, 1000);

                if (timer <= 0) newText();

                return () => {
                        clearInterval(interId);
                };
        }, [timer]);

        const newText = () => {
                let str: string = "";
                for (let index = 0; index < 200; index++) {
                        str = str + " " + faker.random.words(1).toLowerCase();
                }
                setTimer(30);
                setText(str);
        };

        useEffect(() => {
                newText();
        }, []);

        return (
                <div className="bg-indigo-300 text-white min-h-screen flex flex-col">
                        <header className="bg-gray-800 h-16 flex items-center px-16 shadow-sm">
                                <h1 className="text-2xl font-semibold">
                                        <a href="/">My Generator</a>
                                </h1>
                        </header>
                        <main className="flex-1 flex justify-center items-center">
                                <div className="p-4 bg-gray-900 max-w-4xl rounded-sm space-y-8">
                                        <div className="flex  space-x-4">
                                                <Btn label="New" callback={() => newText()} icon="new" />
                                                <Btn
                                                        label="Copy"
                                                        callback={() => {
                                                                navigator.clipboard.writeText(text);
                                                                newText();
                                                        }}
                                                        icon="copy"
                                                />
                                        </div>
                                        <div className="p-2 border-gray-100 border-2 capitalize">{text}</div>
                                        <div className="text-right font-semibold">
                                                <p>Auto renew in {timer}s</p>
                                        </div>
                                </div>
                        </main>
                </div>
        );
}

export default App;
