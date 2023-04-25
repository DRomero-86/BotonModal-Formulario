import { Fragment, useState } from "react";


const Modal = () => {
    const [show, setShow] = useState(false);

    const toggle = () => {
        setShow(!show);
    };

    return (
        <Fragment>
            <button className="btn btn-primary" onClick={toggle}>
                Abrir modal
            </button>

            <div className={`modal ${show && "show"}`} onClick={toggle}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>

                    <div className="modal-header">
                        <h2 className="title"> Complete el formulario</h2>
                        <h2 className="modal-close" onClick={toggle}> X </h2>
                    </div>

                    <div className="modal-body">
                        <div className="form-control">
                            <label>Nombre</label>
                            <input type="text" placeholder="Escriba su nombre"/>
                            <label>Dirección</label>
                            <input type="text" />
                            <label>Fecha de Nac</label>
                            <input type="date"/>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button className="btn btn-cancel">Cancelar</button>
                        <button className="btn btn-primary">Guardar</button>
                    </div>

                </div>
            </div>
        </Fragment>
    );
};

export default Modal

