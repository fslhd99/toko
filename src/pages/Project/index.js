import React,{ useState, useEffect } from  'react'
import { Button,Input} from '../../component';
import './Project.css'
import { MDBDataTableV5 } from 'mdbreact';
import axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';

const API = process.env.REACT_APP_ACCESS_KEY

const Project = () => {

 // variable dari API, Onchange isi 0 
 const [name, setName] = useState('')

   useEffect(() => {
     
    getDataProject()
  }, []);
  const btnHapus = () => {}
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
            let aksi = ( 
              <div>
                <button >Edit</button>
                <button onClick={() => btnHapus(key.id)}>Hapus</button>
              </div>
            )
            let x = {
              No: key.id,
              NamaProject: key.project_name,
              JumlahMerchant: key.merchantList.length,
              JumlahUser: key.merchantsWithUsersList == null ? 0 : key.merchantsWithUsersList.length,
              Aksi: aksi
            }
            array_kosong.push(x)
          })
          setRows(array_kosong)
        }
      }
    })

  }
  
  //fungsi button
 const btnProject = () => {

  if(name === ''){
    alert("Nama Project tidak boleh kosong")
  }else
  {

    // data body / api
    const datas = {
      name
      
    }

    // axios send post
    axios({
      method: 'POST',
      url: API + '/project/save',
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
        console.log("Project di tambahkan")
        setName ('')
        getDataProject()
      }else{

        // error dari api
        alert(res.error.name)
      } 

    })
    .catch(error => {

      // error ini dari axios
      console.log(error)
    })
  }
}
    
    const [rows, setRows] = useState([])
    const columns = [
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
        field: 'NamaProject',
      },
      {
        label: 'Jumlah Merchant',
        field: 'JumlahMerchant',
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
  
    const [page, setPage] = useState(0)
  
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
              <p className='title'>TAMBAH PROJECT </p>
              <Input label="NameProject" value={name} placeholder="Name Project" onChange={(e) => setName(e.target.value)} ></Input>
              <Button onClick={ () => btnProject() } title="MASUK"></Button>
            </div>   
        </div>
      )
}

export default Project