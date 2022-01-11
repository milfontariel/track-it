import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function Content({ status }) {
    if (status === true) {
        return (
            <Loader
                type='Bars'
                width="20"
                heigth="20"
                color="#fff"
                arialLabel="loading-indicator"
            />
        )
    } else {


        return (
            <>
                Entrar
            </>
        )
    }
}