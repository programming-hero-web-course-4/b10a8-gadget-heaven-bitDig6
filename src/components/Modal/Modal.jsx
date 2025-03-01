import successImg from '../../assets/icons8-success-48.png'
import { useNavigate } from "react-router";
import PropTypes from 'prop-types';

const Modal = ({total}) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/');
    }


    return (
        <>
            <dialog id="dialog" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box text-center">
                    <img className="w-auto mx-auto" src={successImg} alt="" />
                    <h3 className="font-bold text-lg">Payment Successful</h3>
                    <p className="py-4">Thank you for purchasing.</p>
                    <p>Total: ${total}</p>
                    <button className="btn mt-4 bg-gray-300 hover:bg-gray-400 text-base font-bold hover:text-white w-full rounded-full" onClick={handleNavigate}>
                        Close
                    </button>
                </div>
            </dialog>
        </>
    );
};

Modal.propTypes = {
    total: PropTypes.number,
}

export default Modal;