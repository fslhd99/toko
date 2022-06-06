import React, { useState, useEffect } from "react";
import { Button,Input} from '../../component';
import './Merchant.css'
import '../../component/Atoms/Select/Select.css'
import { MDBDataTableV5 } from 'mdbreact';
import axios from 'axios';
import { reactLocalStorage } from "reactjs-localstorage";


const Merchant = () =>  {
    //fungsi .env
    const API = process.env.REACT_APP_ACCESS_KEY


    //untuk mengambil data
    useEffect(() => {
     
        getDataMerchant()
        getDataProject()

      }, []);
    
    //menampuilkan datamerchant     
      const getDataMerchant = () => {
    
        const data = {
          page: 1,
          per_page: 100,
          name: null
        }
        // get data from api
        axios({
          method: 'POST',
          url: API + '/merchants',
          data,
          headers:{
            Authorization: reactLocalStorage.get('token')
          }
        })
        .then(obj => {
    
          const res = obj.data
          if(res.message === "Success"){
            //Fungsi dari Mengambil/Menampilkan data dari API
    
          const projects = res.response // {RESPON} adalah data dari api 
            if(projects.length > 0){
              let array_kosong = []
              projects.map((key, i) => {
                let aksi = ( 
                    <div>
                        <button >Edit</button>
                        <button onClick={() => btnHapus(key.id)}>Hapus</button>
                    </div>
                    )
                let x = {
                  No: key.id,
                  NamaMerchant: key.merchants_name,
                  Project_id: key.project_id === null ? '-' : key.project_id,
                  JumlahUser: key.usersList === null ? 0 : key.usersList.length,
                  Aksi: aksi
                }
                array_kosong.push(x)
              })
              setRows(array_kosong)
            }
          }
        })
    }
    const btnHapus = () => {}
    const [rows, setRows] = useState([])
    const columns = 
         [
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
            label: 'Project',
            field: 'Project_id',
          },
          {
            label: 'Jumlah User',
            field: 'JumlahUser',
          },
          
          {
              label: 'Aksi',
              field: 'Aksi',
            },
          
        ]
// Ambil Data untuk Selecet
    const getDataProject = () => {

        const data = {
            page: 1,
            per_page: 100,
            name: null
        }
        // get data from api
        axios({
            method: 'POST',
            url: API + '/project',
            data,
            headers:{
            Authorization: reactLocalStorage.get('token')
            }
        })
        .then(obj => {
    
            const res = obj.data
            if(res.message === "Success"){
            //Fungsi dari Mengambil/Menampilkan data dari API
    
            const projects = res.response // {RESPON} adalah data dari api 
            if(projects.length > 0){
                let array_kosong = []
                projects.map((key, i) => {
                let x = {
                    id: key.id,
                    isi: key.project_name
                }
                array_kosong.push(x)
                })
                setDataProject(array_kosong)
            }
            }
        })
    
    }

    //Tambah Data
    const [data_project, setDataProject] = useState([])
    const [data_project_value, setDataProjectValue] = useState([])
    const [name, setName] = useState('')
    //botteninput
    const btnMerchant = () => {

        if(name === ''){
          alert("Nama Merchants tidak boleh kosong")
        }else if (data_project=== '') {
            alert("Data Project tidak boleh kosong")
        }else
        {
      
          // data body / api
          const datas = {
            name,
            project_id : data_project_value ,
            
          }
          // axios send post
          axios({
            method: 'POST',
            url: API + '/merchants/save',
            data: datas,
            headers:{
              Authorization: reactLocalStorage.get('token')
            }
          })
          .then(obj => {
      
            const res = obj.data
            console.log(res);
            if(res.status === 200){
              // alert if success[
              // alert('Berhasil mendaftar')
              console.log("Merchants di tambahkan")
              setName ('')
              getDataMerchant()
            }else{
      
              // error dari api
              alert(res.error.merchants_name)
            } 
      
          })
          .catch(error => {
      
            // error ini dari axios
            console.log(error)
          })
        }
      }

    return (
        <div className='main-page'>
            <div className='left'>
                <MDBDataTableV5
                    hover
                    entriesOptions={[5, 20, 25]}
                    entries={5}
                    pagesAmount={4}
                    data={{
                        columns,
                        rows
                      }}
                    pagingTop
                    searchTop
                    searchBottom={false}
                    barReverse
                />
            </div>
            <div className='right'>
              <p className='title'>TAMBAH MERCHANT</p>
                    <Input type="name" name="name" placeholder="Nama Merchant" onChange={(e) => setName(e.target.value)}  />
                    
                    <div className='input-wrapper'>
                        <select className='input' onChange={ (e) => setDataProjectValue(e.target.value) }>
                        { 
                            data_project.map((key, i) => {
                            return <option key={i} value={key.id}>{key.isi}</option>
                            })
                        }
                        </select>
                    </div>

                    <Button onClick={ () => btnMerchant() } title="MASUK"></Button>
            </div>   
        </div>
      )
}

export default Merchant