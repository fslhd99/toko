import React from 'react'
import { Button,Input} from '../../component';
import './Project.css'
import { MDBDataTableV5 } from 'mdbreact';

const Project = () => {
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
            label: 'Nama Project',
            field: 'Nama Project',
          },
          {
            label: 'Jumlah Merchant',
            field: 'Jumlah Merchant',
          },
          {
            label: 'Jumlah User',
            field: 'Jumlah User',
          },
          {
              label: 'Aksi',
              field: 'Aksi',
            },
          
        ],
        rows: [
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
              <p className='title'>TAMBAH PROJECT</p>
            <Input label="NameProject" placeholder="Name Project" ></Input>
            <Button title="TAMBAH"></Button>
          
            </div>   
        </div>
      )
}

export default Project