import { NavLink, useRouteError } from "react-router";
import errorImg from '../../assets/error-not-found.jpg';

const ErrorPage = () => {
    const error = useRouteError();
    // console.log(error);

    const errorMsg = 'Page Not Found';
    const errorStatus = error.status;
    const errorStatusText = error.statusText;


    // console.log(errorMsg, errorStatus, errorStatusText);

    return (
        <div style={{ width: '70%' }}
            className="mx-auto mt-2 mb-5 flex flex-col gap-5 justify-center text-center">
            <img className="w-7/12 mx-auto" src={errorImg} alt="error" />
            <h3 className="text-3xl font-bold">{errorStatus}</h3>
            <h3 className="text-3xl font-bold">{errorStatusText}</h3>
            <p className="text-xl font-bold text-gray-500">{errorMsg}</p>
            <NavLink className="hover:text-blue-700 font-bold underline" to="/">Home</NavLink>
        </div>
    );
};

export default ErrorPage;