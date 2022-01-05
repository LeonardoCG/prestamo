import React, { Fragment } from "react";

const Resultado = (props) => {

    const { total, cantidad, plazo } = props;

    return ( 
        <Fragment>
            <div className="u-full-width resultado">
                <h2>Resumen</h2>
                <p>Cantidad a solicitada: $ { cantidad }.00</p>
                <p>A pagar en: { plazo } Meses</p>
                <p>Su pago mensual es: $ {(total/plazo).toFixed(2)}</p>
                <p>Total a pagar: $ { (total.toFixed(2)) }</p>
            </div>
            
        </Fragment>
        );
}
 
export default Resultado;