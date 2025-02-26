import PropTypes from "prop-types";
import successImg from '../../assets/icons8-success-48.png'
import { useNavigate } from "react-router";

const Modal = ({totalPrice}) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/');
    }

    return (
        <>
          <dialog id="dialog" className=" backdrop-blur-2xl">
                <div className="text-center">
                    <img src={successImg} alt="" />
                    <h1>Payment Successful!</h1>
                    <hr />
                    <p>Thanks for purchasing.</p>
                    <p>Total: ${totalPrice}</p>
                    <button className="btn" autoFocus onClick={handleNavigate}>
                        Go Towards Success
                    </button>
                </div>
            </dialog>
        </>
    );
};
Modal.propTypes = {
    totalPrice: PropTypes.number
}

export default Modal;