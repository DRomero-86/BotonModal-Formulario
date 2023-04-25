import { Fragment, useState } from "react";
import Btn from "./Btn"
import Label from "./Label";
import Input from "./Input";


const Modal = () => {
    const [show, setShow] = useState(false);

    const toggle = () => {
        setShow(!show);
    };

    return (
        <Fragment>
            <div onClick={toggle} >
                <Btn clase="btn btn-primary" name="Abrir modal" /> 
            </div>

            <div className={`modal ${show && "show"}`} onClick={toggle}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>

                    <div className="modal-header">
                        <h2 className="title"> Complete el formulario</h2>
                        <h2 className="modal-close" onClick={toggle}> X </h2>
                    </div>

                    <div className="modal-body">
                        <div className="form-control">
                            <Label para="name" description="Nombre"/>
                            <Input type="text" id="name"/>
                            <Label para="name" description="Apellido"/>
                            <Input type="text" id="name"/>
                            <Label para="email" description="Email"/>
                            <Input type="email" id="email"/>
                            <Label para="date" description="FechaNac"/>
                            <Input type="date" id="date"/>                          
                        </div>
                    </div>

                    <div className="modal-footer">
                        <Btn clase="btn-cancel" name="Cancelar"/>
                        <Btn clase="btn-primary" name="Enviar"/>
                    </div>

                </div>
            </div>
        </Fragment>
    );
};

export default Modal

