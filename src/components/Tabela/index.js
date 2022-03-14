import React from 'react';
import { Table } from 'reactstrap';

export const Tabela = ({faixa, array}) => {
    
  const itensTable = array.filter(item => item.faixa === faixa);

    return <Table bordered style={{magin: "12px"}}>
   
    <thead>
      <tr>
        <th>IRPJ</th>
        <th>CSLL</th>
        <th>COFINS</th>
        <th>PIS/PASEP</th>
        <th>CPP</th>
        <th>IPI</th>
        <th>ISS</th>
        <th>ICMS</th>
       
      </tr>
    </thead>

    <tbody>
      <tr>
      <td>{itensTable[0].irpj ? `${itensTable[0].irpj}%` : "0%"}</td>
      <td>{itensTable[0].csll ? `${itensTable[0].csll}%` : "0%"}</td>
      <td>{itensTable[0].COFINS ? `${itensTable[0].COFINS}%` : "0%"}</td>
      <td>{itensTable[0].pisPasep ? `${itensTable[0].pisPasep}%` : "0%"}</td>
      <td>{itensTable[0].ccp ? `${itensTable[0].ccp}%` : "0%"}</td>
      <td>{itensTable[0].ipi ? `${itensTable[0].ipi}%` : "0%"}</td>
      <td>{itensTable[0].iss ? `${itensTable[0].iss}%` : "0%"}</td>
      <td>{itensTable[0].icms ? `${itensTable[0].icms}%` : "0%"}</td>
   
      </tr>
    </tbody>
  </Table>
}