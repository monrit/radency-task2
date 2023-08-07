import React, { FC } from "react";
import Router from "./components/Router/Router";
import ModalForm from "./components/ModalForm/ModalForm";

const App: FC = () => {
    return (
        <>
            <Router />
            <ModalForm />
        </>
    );
};

export default App;
