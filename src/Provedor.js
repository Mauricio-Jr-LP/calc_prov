import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { AnexoIII } from './mock/anexos';

export default function Provedor({ Rbt12, Rbap }){

    const [faixa, setFaixa] = useState('');

    AnexoIII.map((faixa) => {
        if (Rbt12 >= faixa.receitaBrutaInicial && Rbt12 <= faixa.receitaBrutaFinal) {
            setFaixa(faixa);
            const aliquotaEfetivaCalculo =
            (((Rbt12 * faixa.aliquota)) / 100 - faixa.deducao) / Rbt12 * 100;
            
            setAliquotaEfetiva(
            faixa.faixa > 1
                ? Math.round(aliquotaEfetivaCalculo * 100) / 100
                : faixa.aliquota,
            );
        }        
    });

    return(
        <>
            <Label for="aliquotaNominal">
                <Input type="text" value={faixa.aliquota}/>
            </Label>
            <Label for="aliquotaEfetiva">
                <Input type="text" value={faixa.aliquota}/>
            </Label>
        </>
    )
}