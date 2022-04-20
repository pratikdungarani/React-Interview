import React, { useState, useEffect } from 'react'
// import Cookies from 'universal-cookie';
import TextField from 'components/TextField';
import Tabledata from 'components/Tabledata';
import { useDispatch } from 'react-redux';
import {addItemAction, searchItemAction} from 'store/actions/index'


const Dashboard = () => {
    // const cookies = new Cookies();
    const dispatch = new useDispatch()
    const [search, setsearch] = useState('')
    const [itemmodal, setitemmodal] = useState(false)
    const [itemdata, setitemdata] = useState({ name:'', price:''})
  

    const handleChange = (e) => {
        const {name, value} = e?.target
        setitemdata({...itemdata,[name]:value})
    }
    const handleSearch = (e) => {
        setsearch(e?.target?.value)
        dispatch(searchItemAction(e?.target?.value))

        // let aaa = addarr.filter(item =>  item?.adress.toLowerCase().includes(e?.target?.value.toLowerCase()) )
        // console.log("aaaa", aaa);
        // setcopyaddarr(aaa)
        // if(!e?.target?.value){
        //     setcopyaddarr(addarr)
        // }
    }

    useEffect(() => {

    }, [])
    

    const AddItemModal = () => {
        setitemmodal(true)
    }

    const CancleItem = () => {
        setitemmodal(false)
    }
    const ItemSubmit = (e) => {
        e.preventDefault()
        dispatch(addItemAction(itemdata))
        setitemmodal(false)
        setitemdata({name:'', price:''})
    }
  return (
     <>
        <div className='container'>
            <h1 className='text_center address_title'>List Book</h1>
            <div className='text_center search_row'>
                <div className='field_row '>
                    <input type="text" className='bglight' value={search} name='search' placeholder='Search here...' onChange={handleSearch} />
                </div>
            </div>
                {
                    <Tabledata  />
                }
                <div className='text_center button_wrapper'>
                    <button className='link_btn' onClick={() => AddItemModal()}>Add New Item</button>
                </div>
        </div>
        {
            itemmodal && <div className='popup_overlay d_flex jus_center align_center'>
                    <div className='popup'>
                        <h4>ADD ITEM</h4>
                        <form onSubmit={(e) => ItemSubmit(e)}>
                            <TextField name="name" label="Name" value={itemdata?.name} handleChange={handleChange}   />
                            <TextField name="price" label="Price" value={itemdata?.price} handleChange={handleChange}   />
                            <div className='btn_wrp'>
                                <button onClick={CancleItem}>Cancle</button>
                                <button  type='submit'>Yes</button>
                            </div>
                        </form>
                    </div>
                </div>
        }
       

        


     </> 
  )
}

export default Dashboard