import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {removeItemAction} from 'store/actions/index'
import { useSelector } from 'react-redux'
import Modal from 'components/Modal';
import { CSVLink } from "react-csv";
import Pagination from 'components/Pagination';

function Tabledata() {
    const [modal, Setdmodal] = useState()
    const [deleteId, SetdeleteId] = useState()
    const [sort, Setsort] = useState("name")
    let itemArr = useSelector((state) => state?.rootReducer?.itemArray);
    console.log("itemArr", itemArr);
    const dispatch = new useDispatch()
    const [itemsPerPage, setitemsPerPage] = useState(1);
    const headers = [
        { label: "Name", key: "name" },
        { label: "Price", key: "price" },
      ];
    const RemoveItem = (id) => {
        Setdmodal(true)
        SetdeleteId(id)
    } 
    const DeleteYesClick = () => {
        dispatch(removeItemAction(deleteId))
        SetdeleteId('')
        Setdmodal(false)
    }
    const Cancleclick = () => {
        Setdmodal(false)
    }
    const SortItem = (e) => {
        Setsort(e?.target?.value)
    }
   
  return (
      <>
        <div className='d_flex jus_spbtw mb_20'>
            <div>
                <CSVLink data={itemArr} headers={headers}>
                Download CSV
                </CSVLink>
            </div>
            <div>
                <p>Sort By</p>
                <select onChange={SortItem}>
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                </select>
            </div>
        </div>
      
        <div className='table_item'>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        itemArr?.map((item, i) => {
                            return  <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{item?.name}</td>
                                        <td>{item?.price}</td>
                                        <td>
                                            <button className='link_btn' onClick={() => RemoveItem(item?.id)}>X</button>
                                        </td>
                                    </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
        <div className='pagination'>
            {
                itemArr.length > itemsPerPage && <Pagination itemsPerPage={itemsPerPage} items={itemArr} />
            }
        </div>
        {
            modal && <Modal message="Are you want to sure Delete" Cancleclick={Cancleclick} DeleteYes={DeleteYesClick} />
        }
      </>
  )
}

export default Tabledata