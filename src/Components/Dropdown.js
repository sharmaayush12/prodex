import React from 'react'
import { useState } from 'react'


export default function Dropdown({ name, list }) {

    const [show, setShow] = useState(false);
    const [Name, setName] = useState(name);

    return (
        <div>
            <button className='d-flex align-items-center dropdown_btn' onClick={() => { setShow(!show) }}>
                {Name}
                {
                    show
                        ?
                        <i class="fa fa-caret-up"></i>
                        :
                        <i class="fa fa-caret-down"></i>
                }
            </button>
            
            <div id={show?'overlay':null} onClick={()=>setShow(false)}>
            </div>

            <div className={show ? 'show_options' : null}>
                {
                    show
                        ?
                        <ul>
                            {
                                list.map((elem) => {
                                    return (
                                        <li onClick={() => { setName(elem); setShow(false) }} click>
                                            {elem}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        :
                        null
                }
            </div>

        </div>
    )
}
