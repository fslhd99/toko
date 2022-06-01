import React, { useMemo, useState, useEffect } from "react";
import { Button,Input} from '../../component';
import './Merchant.css'
import { MDBDataTableV5 } from 'mdbreact';
import axios from 'axios';


const Merchant = () =>  {
        const [data, setData] = useState({
          name : "",
          project_id : "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: data.name,
      project_id: data.project_id
    };
    axios.post("https://b7d2-158-140-163-210.ap.ngrok.io/merchants/save", userData).then((response) => {
      console.log(response.status);
      console.log(response.data.token);
    });
};
    
    const [datatablee, setDatatablee] = useState([]);

  useEffect(() => {
   getData();
  }, []);

  async function getData() {
    await axios
      .post("https://b7d2-158-140-163-210.ap.ngrok.io/merchants",{
          page : 1,
          per_page : 10,
          name : null
      })
      .then((response) => {
        // check if the data is populated
        console.log("cekdata" + response.data.response);
        setDatatablee(response.data.response);
        // you tell it that you had the result
      });
  }

  async function insertData() {
    await axios
      .post("https://b7d2-158-140-163-210.ap.ngrok.io/merchants/save",{
          name : "Merchant Empat",
          project_id : 0,
          
      })
      .then((response) => {
        // check if the data is populated
        console.log(response.data);
      });
  }
    const [datatable, setDatatable] = React.useState({
      columns: [
        {
          label: 'No',
          field: 'No',
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'No',
          },
        },
        {
          label: 'Nama Merchant',
          field: 'NamaMerchant',
        },
        {
          label: 'Jumlah Merchant',
          field: 'JumlahMerchant',
        },
        {
            label: 'Aksi',
            field: 'Aksi',
          },
        
      ],
      rows: [
        ...datatablee.map((data, i) => (
            {
                No: data.id,
               NamaMerchant: data.merchants_name,
               jumlahMerchant: data.id,
               Aksi: '1234567',
            }
        ))
      ],
    });
  



    return (
        <div className='main-page'>
            <div className='left'>
            <MDBDataTableV5
      hover
      entriesOptions={[5, 20, 25]}
      entries={5}
      pagesAmount={4}
      data={datatable}
      pagingTop
      searchTop
      searchBottom={false}
      barReverse
    />
            </div>
            <div className='right'>
              <p className='title'>TAMBAH MERCHANT</p>
              <form onSubmit={handleSubmit}>
            <Input type="name"
            name="name" value={data.name}
            onChange={handleChange}></Input>
            <Input type="project_id"
            name="project_id" value={data.project_id}
            onChange={handleChange}></Input>
            <Button type="submit" title="TAMBAH"></Button>
            </form>
            </div>   
        </div>
      )
}

export default Merchant