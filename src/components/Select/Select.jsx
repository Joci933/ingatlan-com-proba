import React from 'react';
import Form from 'react-bootstrap/Form';
import { useRecoilState } from 'recoil';
import { orderBy } from '../../recoil/state';

function Select({label, options}) {
  const [order, setOrder] = useRecoilState(orderBy);


    const handleChange = (e) =>{
        setOrder(e.target.value);
    }

  return (
    <div className="select-box">
        <p>{label}</p>
        <Form.Select aria-label="Rendezés:" onChange={handleChange}>
            {options.map(element => <option key={element.value} value={element.value}>{element.label}</option>)}
        </Form.Select>
    </div>
  );
}

export default Select;