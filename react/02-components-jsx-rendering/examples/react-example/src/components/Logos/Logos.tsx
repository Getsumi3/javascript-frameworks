import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import Logo from "./components/Logo";

export default function Logos() {
    return <div>
        <Logo href={"https://vite.dev"}>
            <img src={viteLogo} alt="Vite logo"/>
        </Logo>
        <Logo href={"https://react.dev"} className={"react"}>
            <img src={reactLogo} alt="React logo"/>
        </Logo>
    </div>
}