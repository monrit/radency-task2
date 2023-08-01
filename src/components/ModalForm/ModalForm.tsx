import { Dialog } from "@mui/material";
import { FC } from "react";
import { useAppSelector } from "../../hooks/redux";

const ModalForm: FC = () => {
    const open = useAppSelector(store => store.modalReducer.open);

    return (
        <Dialog>
            
        </Dialog>
    );
};

export default ModalForm;