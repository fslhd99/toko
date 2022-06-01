import React from 'react'
import { Button,Input} from '../../component';
import './user.css' ;
import { MDBDataTableV5 } from 'mdbreact';
const User = () => {
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
        label: 'Fullname',
        field: 'Fullname',
      },
      {
        label: 'Username',
        field: 'Username',
      },
      {
        label: 'Password',
        field: 'Password',
      },
      {
        label: 'Email',
        field: 'Email',
      },
      {
        label: 'Nama Merchant',
        field: 'NamaMerchant',
      },
      {
        label: 'Balance',
        field: 'Balance',
      },
      {
          label: 'Aksi',
          field: 'Aksi',
        },
      
    ],
    rows: [
        {
            No:'1',
            Fullname: 'Faisal Hidayatullah',
            Username: 'Faisalhd99',
            Password: 'Indonesia123456',
            Email: 'faisallegendaris@gmail.com',
            NamaMerchant: 'Semen',
            Balance: 'Rp. 400.000',
            Aksi : '',
          },
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
    /> </div>
        <div className='right'>
          <p className='title'>TAMBAH USER</p>
        <Input label="Fullname" placeholder="Fullname" ></Input>
        <Input label="Username" placeholder="Username" ></Input>
        <Input label="Password" placeholder="Password" ></Input>
        <Input label="Email" placeholder="Email" ></Input>
        <Input label="Merchant" placeholder="Merchant" ></Input>
        <Button title="TAMBAH"></Button>
      
        </div>   
    </div>
  )
}

export default User ;