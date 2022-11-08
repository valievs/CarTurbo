import { useState } from 'react';
import {useDispatch} from 'react-redux'
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './AddCar.css'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import  app  from '../../firebase.js';
import { addProduct } from '../../redux/apiCalls';

function AddCar() {
  const dispatch = useDispatch()
  // const [value, setValue] = useState('');

  const [file, setFile] = useState('');

 const [inputs,setInputs] = useState({})

//  const handlerMultipleFiles = (e) => {
//   setFile(e.target.files);
// }



  const handleChange = (e)=>{
    setInputs( prev=>{
      return {...prev, [e.target.name]: e.target.value}
    })

    console.log(inputs)
  }

  const handleClick =  (e) => {
    e.preventDefault()
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);


    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL };
          addProduct(product, dispatch);
        });
      }
    );
  }

  return (
    <div className='addCar'>

      <h2 className='addTitle'>Add a new car</h2>

      <div className="addCarContainer">
        <div className="addImage">
          <h4>Add Image</h4>
          <form action="" method="post">
                <label className="label">
                <input type="file"   onChange={(e) => setFile(e.target.files[0])} />
                <span>Select a file</span>
              </label>
          </form>
        </div>

      {/* <h4 className='carCharTitle'>Avtomobil teczihati</h4>
        <div className="addCharacteristic">
          
        <ul className="characterCar">
          <li className='carCharacterItem'>
           
            <label htmlFor="file"> <input type="checkbox" name="" id="file" />Yüngül lehimli disklər</label>
          </li>
          <li className='carCharacterItem'>
            <label htmlFor="file">
            <input type="checkbox" name="" id="file" />Mərkəzi qapanma</label>
          </li>
          <li className='carCharacterItem'>
            <label htmlFor="file">
            <input type="checkbox" name="" id="file" />Dəri salon</label>
          </li>
          <li className='carCharacterItem'>
            <label htmlFor="file">
            <input type="checkbox" name="" id="file" />Oturacaqların ventilyasiyası</label>
          </li>
        </ul>
        <ul className="characterCar">
          <li className='carCharacterItem'>
            <label htmlFor="file">
            <input type="checkbox" name="" id="file" />Kondisioner</label>
          </li>
          <li className='carCharacterItem'>
            <label htmlFor="file">
            <input type="checkbox" name="" id="file" />ABS</label>
          </li>
          <li className='carCharacterItem'>
            <label htmlFor="file">
            <input type="checkbox" name="" id="file" />Park radarı</label>
          </li>
          <li className='carCharacterItem'>
            <label htmlFor="file">
            <input type="checkbox" name="" id="file" />Lyuk</label>
          </li>
        </ul>
        <ul className="characterCar">
         
          <li className='carCharacterItem'>
            <label htmlFor="file">
            <input type="checkbox" name="" id="file" /> Arxa görüntü kamerasıa</label>
          </li>
          <li className='carCharacterItem'>
            <label htmlFor="file">
            <input type="checkbox" name="" id="file" />Yağış sensoru</label>
          </li>
          <li className='carCharacterItem'>
            <label htmlFor="file">
            <input type="checkbox" name="" id="file" />Oturacaqların isidilməsi</label>
          </li>
        </ul>
       
        </div> */}


        <div className="carInfoWrapper">

          <div className="carBoxLeft">
              <div className="marka">
                  <label htmlFor="cars">Marka:</label>
              <select name="marka" id="cars"    onChange={handleChange} >
              <option value="bmw">BMW</option>
                <option value="opel">Opel</option>
                <option value="kia">Kia</option>
                <option value="hyundai">Hyundai</option>
                <option value="honda">Honda</option>
                <option value="mercedes">Mercedes</option>
                <option value="toyota">Toyota</option>
                <option value="audi">Audi</option>
                <option value="ford">Ford</option>
                <option value="infiniti">Infiniti</option>
                <option value="lexus">Lexus</option>
                <option value="jeep">Jeep</option>
                <option value="land rover">Land Rover</option>
                <option value="mazda">Mazda</option>
                <option value="mitsubishi">Mitsubishi</option>
                <option value="nissan">Nissan</option>
                <option value="skoda">Skoda</option>
                <option value="ssang yong">Ssang Yong</option>
                <option value="subaru">Subaru</option>
                <option value="volvo">Volvo</option>
                <option value="wolkswagen">Wolkswagen</option>
              </select>
              </div>

      <div className="model">
        <label htmlFor="car">Model:</label>
        <input type="text" id='car' name="model" onChange={handleChange} />
      </div>

        <div className="ban">
        <label htmlFor="cars">Ban novu:</label>
      <select name="carType" id="ban"  onChange={handleChange} >
        <option value="hetchbek">Hetchbek</option>
        <option value="kupe">kupe</option>
        <option value="pikap">pikap</option>
        <option value="sedan">sedan</option>
        <option value="universal">universal</option>
        <option value="mikroavtobus">mikroavtobus</option>
        <option value="motosiklet">motosiklet</option>
        </select>
        </div>

        <div className="mile">
          <label htmlFor="mile">Yurush:</label>
          <input type="text" id='mile' name="mileage"  onChange={handleChange} />
        </div>

            <div className="color">
            <label htmlFor="color">Reng:</label>
              <select name="color" id="color"  onChange={handleChange} >
                <option value="qara">qara</option>
                <option value="ag">ag</option>
                <option value="qirmizi">qirmizi</option>
                <option value="boz">boz</option>
                <option value="mavi">mavi</option>
                <option value="yashil">yashil</option>
                <option value="gumushu">gumushu</option>
                <option value="goy">goy</option>
                <option value="yash asfalt">yash asfalt</option>
                </select>

                <div className="price">
                     <label htmlFor="price">Qiymet:</label>
                     <input type="number" id='price' name="price" onChange={handleChange} />
                </div>

            </div>

          </div>

          <div className="carBoxRight">


        <div className="petrol">
        <label htmlFor="petrol">Yanacaq novu:</label>
              <select name="petrol" id="petrol"  onChange={handleChange} >
                <option value="benzin">benzin</option>
                <option value="dizel">dizel</option>
                <option value="qaz">qaz</option>
                <option value="hibrid">hibrid</option>
                <option value="elektro">elektro</option>
                </select>
        </div>


        <div className="transmission">
        <label htmlFor="trans">Sürətlər qutusu:</label>
              <select name="transmission" id="trans"  onChange={handleChange} >
                <option value="avtomat">avtomat</option>
                <option value="mexanika">mexanika</option>
                </select>
        </div>

        
        <div className="gear">
        <label htmlFor="gear">Ötürücü:</label>
              <select name="gear" id="gear"  onChange={handleChange} >
                <option value="on">on</option>
                <option value="arxa">arxa</option>
                <option value="tam">tam</option>
                </select>
        </div>

        <div className="volume">
                     <label htmlFor="volume">Mühərrikin həcmi, L:</label>
                     <input type="number" id='volume' name="motor" onChange={handleChange} />
                </div>

                <div className="year">
        <label htmlFor="year">iL:</label>
              <select name="year" id="year"  onChange={handleChange} >
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2011">2011</option>
              <option value="2010">2010</option>
              <option value="2009">2009</option>
              <option value="2008">2008</option>
              <option value="2007">2007</option>
              <option value="2006">2006</option>
              <option value="2005">2005</option>
                </select>
        </div>
       </div>

        </div>

        <div className="descBox">
        {/* <ReactQuill theme="snow" value={value} onChange={setValue} name="desc" style={{width:650,height:200}} /> */}
        <textarea name="desc" id="" cols="30" rows="10"  onChange={handleChange}    style={{width:650,height:200}}></textarea>
        </div>

        <button className="btn"  onClick={handleClick} >ADD</button>
      </div>
    </div>
  )
}

export default AddCar