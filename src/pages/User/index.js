import React,{useEffect,useState} from 'react'
import { Button,Input} from '../../component';
import './user.css' ;
import { MDBDataTableV5 } from 'mdbreact';
import axios from 'axios';
import '../../component/Atoms/Select/Select.css'
import { reactLocalStorage } from 'reactjs-localstorage';

const User = () => {
  

  //untuk mengambil data
  useEffect(() => {
     
    getDataUser()
    getDataMerchant()
  }, []);
 // Proses pengambilan URL API

  const API = process.env.REACT_APP_ACCESS_KEY
//
//button Hapus
  const btnHapus = hapus => {
    
    // axios request delete by user_id

  }

  //menampilkan datatabel user pagination
  const getDataUser = () => {

    const data = {
      page: 1,
      per_page: 100,
      name: null
    }
    // get data from api
    axios({
      method: 'POST',
      url: API + '/users',
      data,
      headers:{
        //token di saat login
        Authorization: reactLocalStorage.get('token')
      }
    })
    .then(obj => {

      const res = obj.data
      if(res.message === "Success"){
        //Fungsi dari Mengambil/Menampilkan data dari API

      const User = res.response // (RESPON) adalah data dari api 
        if(User.length > 0){
          let tampil_tabel = []
          User.map((key) => {
            let aksi = ( 
              <div>
                <button >Edit</button>
                <button onClick={() => btnHapus(key.id)}>Hapus</button>
              </div>
            )
            
            let x = {
              //field tabel : key.namaPagination api
              No: key.id,
              Fullname: key.full_name,
              Username: key.username,
              Password: key.password,
              Email: key.email,
              NamaMerchant: key.merchant_id === null ? '-' :key.merchant_id,
              Balance: formatRupiah(String(Math.round(key.balance)), 'Rp. '),
              // JumlahUser: key.usersList === null ? 0 : key.usersList.length,
              Aksi: aksi
            }
            tampil_tabel.push(x)
          })
          setRows(tampil_tabel)
        }
      }
    })
}
// format idr
const formatRupiah = (angka, prefix) => {
  var number_string = angka.replace(/[^,\d]/g, '').toString(),
  split   		= number_string.split(','),
  sisa     		= split[0].length % 3,
  rupiah     		= split[0].substr(0, sisa),
  ribuan     		= split[0].substr(sisa).match(/\d{3}/gi),
  separator

  // tambahkan titik jika yang di input sudah menjadi angka ribuan
  if(ribuan){
    separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }

  rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah;
  return prefix === undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
}

//mengambil data merchent 
const getDataMerchant= () => {

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

      const merchants = res.response // {RESPON} adalah data dari api 
      if(merchants.length > 0){
          let ambil_merchant = []
          merchants.map((key, i) => {
          let x = {
              id: key.id,
              isi: key.merchants_name
          }
          ambil_merchant.push(x)
          })
          setDataMerchants(ambil_merchant)
      }
      }
  })
}
const [data_merchants, setDataMerchants] = useState([])
const [data_merchants_value, setDataMerchantsValue] = useState([])
const [username, setUsername] = useState('')
const [full_name, setNama] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [balance, setBalance] = useState('')

//tombol tambah user
const btnUser = () => {

  if(full_name === ''){
    alert("Nama tidak boleh kosong")
  }else if(username === ''){
    alert("Username tidak boleh kosong")
  }else if(password === ''){
    alert("Password tidak boleh kosong")
  }else if(email === ''){
    alert("Email tidak boleh kosong")
  }else if(data_merchants === ''){
    alert("merchants tidak boleh kosong")
  }else if(balance === ''){
    alert("Balance tidak boleh kosong")
  }else{

    // data body / api
    const datas = {
      full_name,
      username,
      merchant_id : data_merchants_value,
      email,
      password,
      balance
    }
    // axios send post
    axios({
      method: 'POST',
      url: 'https://b7d2-158-140-163-210.ap.ngrok.io/users/register',
      data: datas,
      headers:{
        Authorization: reactLocalStorage.get('token')
      }
    })
    .then(obj => {

      const res = obj.data
      console.log(res);
      if(res.message === 'Data Saved Successfully'){
        // alert if success[
        // alert('Berhasil mendaftar')
        console.log("User di tambahkan")
        getDataUser()
      }else{

        // error dari api
        alert(res.error.full_name)
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
        label: 'Fullname',
        field: 'Fullname',
      },
      {
        label: 'Username',
        field: 'Username',
      },
      // {
      //   label: 'Password',
      //   field: 'Password',
      // },
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
      
    ]




  return (
      <div className='main-page'>
          <div className='left'>
          <MDBDataTableV5
            hover
            entriesOptions={[5, 20, 25]}
            entries={5}
            pagesAmount={4}
            data={
              {
                columns,
                rows
              }
            }
            pagingTop
            searchTop
            searchBottom={false}
            barReverse
            /> 
      </div>
        <div className='right'>
          <p className='title'>TAMBAH USER</p>
        <Input label="Fullname" placeholder="Fullname" onChange={(e) => setNama(e.target.value)}></Input>
        <Input label="Username" placeholder="Username" onChange={(e) => setUsername(e.target.value)}></Input>
        <Input label="Password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></Input>
        <Input label="Email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></Input>
        <div className='input-wrapper'>
          <select className='input' onChange={ (e) => setDataMerchantsValue(e.target.value) }>
          { 
              data_merchants.map((key, i) => {
              return <option key={i} value={key.id}>{key.isi}</option>
              })
          }
          </select>
        </div>
        <Input label="Balance" placeholder="Balance" onChange={(e) => setBalance(e.target.value)}></Input>
        <Button onClick={ () => btnUser() } title="MASUK"></Button>
      
        </div>   
    </div>
  )
}

export default User 