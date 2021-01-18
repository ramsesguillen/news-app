import React, { useState } from 'react'

export const useSelect = ( initialState, opciones ) => {

    const [state, setState] = useState( initialState );

    const SelectNoticias = () => (
        <select
            className="browser-default"
            value={state }
            onChange={ e => setState( e.target.value ) }
        >
            {/* <option value="">-- Seleccionar --</option> */}
            {
                opciones.map( option => (
                    <option key={ option.value } value={ option.value }>{ option.label}</option>
                ))
            }
        </select>
    );

    return [ state, SelectNoticias ];
}
