import { FC, useCallback, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { modalSliceActions } from "../../redux/reducers/modalSlice";
import Form from "./Form/Form";

const ModalForm: FC = () => {
    const open = useAppSelector(store => store.modalReducer.open);
    const dispatch = useAppDispatch();
    const { closeModal } = modalSliceActions;

    const modalRef = useRef<HTMLDivElement | null>(null);

    const onClose = useCallback(() => {
        dispatch(closeModal());
    }, [dispatch, closeModal]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
            const targetElement = event.target as Node;
            if (modalRef.current && !modalRef.current.contains(targetElement)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [modalRef, onClose]);

    return (
        <div
            className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 ${
                open ? "block" : "hidden"
            }`}
        >
            <div
                ref={modalRef}
                className="bg-gray-100 p-6 w-96 rounded-lg border-2 border-black"
            >
                <h4 className="text-center font-bold">
                    Write your pretty, little <span className="text-indigo-500">note</span> &#10084;
                </h4>
                <Form open={open} onClose={onClose} />
            </div>
        </div>
    );
};

export default ModalForm;
