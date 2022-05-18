import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function Show() {

    const [show, setShow] = useState(null)


    const setUp = async () => {

        const data = await axios.get("http://localhost:3000")
        const setData = await data.data
        setShow(setData)
    }


    useEffect(() => {

        if (!show) {
            setUp()
        }


    }, [])


    return (
        <div>
            <table>
                <tbody>
                    {
                        show && show.map((x) => (
                            <tr>
                                <td>{x.id}</td>
                                <td>{x.first_name}</td>
                                <td>{x.last_name}</td>
                                <td>{x.address}</td>
                                <td>{x.Ident_id}</td>
                                
                            </tr>

                        ))
                    }

                </tbody>
            </table></div>
    )
}
