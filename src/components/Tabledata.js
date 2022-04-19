import React from 'react'

function Tabledata() {
  return (
    <div className='table_item'>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>fdsf</td>
                    <td>dsfdsf</td>
                    <td>323</td>
                    <td>
                        <button className='link_btn'>X</button>
                    </td>
                </tr>
                <tr>
                    <td>fdsf</td>
                    <td>dsfdsf</td>
                    <td>323</td>
                    <td>
                        <button className='link_btn'>X</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Tabledata