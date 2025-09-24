import "./style.css";

export default function HelloWorld({ msg }: { msg: string}) {
    return <div className={"greetings"}>
        <h1 className={"green"}>
            {msg}
        </h1>
        <h3>
            You've successfully created a Vite + React app!
        </h3>
    </div>
}