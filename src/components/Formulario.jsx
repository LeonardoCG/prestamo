import React, { Fragment, useState } from "react";
import { calcularTotal } from "../helpers";

const Formulario = (props) => {

    const {cantidad, guardarCantidad, plazo, guardarPlazo, guardarTotal, guardarCargando } = props;

    const [error, guardarError] = useState(false);
   
    const leerCantidad = (e) => {
        guardarCantidad( parseInt(e.target.value));
    }

    const leerPlazo = (e) => {
        guardarPlazo( parseInt(e.target.value));
    }

    const calcularPrestamo = (e) => {
        e.preventDefault();

        // validar 
        if( cantidad === 0 || plazo === '' ) {
            guardarError(true);
            return;
        } 
        // elimar el error previo 
        guardarError(false);

        // habilitar spinner 
        guardarCargando(true);

        setTimeout(() => {
            // realiza la cotizacion 
            const total = calcularTotal( cantidad, plazo );
        
            // una vez calculado, guardar total 
            guardarTotal(total);

            // desabihilitar spinner 
            guardarCargando(false);
        }, 3000);

        
    }

    return ( 
        <Fragment>
        <form onSubmit={ calcularPrestamo }>
          <div className="row">
              <div>
                  <label>Cantidad Prestamo</label>
                  <input 
                      className="u-full-width" 
                      type="number" 
                      placeholder="Ejemplo: 3000" 
                      onChange={ leerCantidad }
                  />
              </div>
              <div>
                  <label>Plazo para Pagar</label>
                     <select 
                      className="u-full-width"
                      onChange={ leerPlazo }
                  >
                      <option value="">Seleccionar</option>
                      <option value="3">3 meses</option>
                      <option value="6">6 meses</option>
                      <option value="12">12 meses</option>
                      <option value="24">24 meses</option>
                  </select>
              </div>
              <div>
                  <input 
                      type="submit" 
                      value="Calcular" 
                      className="button-primary u-full-width" 
                  />
              </div>
          </div>
        </form>

        { (error) ? <p className="error">Todos los campos son obligatorios</p> : null }
    </Fragment>
     );
}
 
export default Formulario;