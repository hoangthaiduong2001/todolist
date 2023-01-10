import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [word, seTword] = useState('')
  const [todos, setTodos] = useState([])
  const handleClick = () => {
    if(todos?.some(item => item.id === word?.replace(/\s/g,''))){
      toast.warn('Cong viec da ton tai!')
    }else{
      setTodos(prev => [...prev, {id: word?.replace(/\s/g,''), job: word }])
      seTword('')
    }
   
  }
  const handleDeleteWord = (id) => {
    setTodos(prev => prev.filter(item => item.id !== id))
  }
  return (
    <>
    <div className="flex flex-col gap-8 h-screen border border-red-600 justify-center items-center">
      <div className="flex gap-8">
        <input
        type="text"
        className="outline-none border border-blue-500 px-4 py-2 w-[400px]"
        value={word}
        onChange={e => seTword(e.target.value)}
        />
        <button
        className="outline-none px-4 py-2 bg-blue-600 rounded-md text-white"
        onClick={handleClick}
        >
          Add
        </button>
      </div>
      <div>
        <h3 className="font-bold text-xl">Content:</h3>
        <ul>
          {todos?.map((item) => {
            return(
              <li key={item.id} className="flex gap-8 items-center">
                <span className="my-4">{item.job}</span>
                <span onClick={() => handleDeleteWord(item.id)} className="my-4 cursor-pointer">X</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
    <ToastContainer />
    </>
  );
}

export default App;
