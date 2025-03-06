import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");



  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    //chech for numbers and characters
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "`~!@#$%^&*[]{}";

    

    //now to generate password we have to loop over the provided length
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  },
 [length, numAllowed, charAllowed])

//useRef hook
const passwordRef = useRef(null)

 //copy to clipboard
 const copyToClipboard = useCallback(() =>{
  passwordRef.current?.select();
  //if we want to select a range
  passwordRef.current?.setSelectionRange(0, 10);
  window.navigator.clipboard.writeText(password)
 }, [password])

 useEffect(() => {
  passwordGenerator();
 }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            placeholder='Password'
            className='outline-none w-full py-1 px-3'
            readOnly 
            ref={passwordRef}/>

          <button 
          onClick={copyToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>

            <input type='range'
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              // for adding onchange event to the length variable
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numAllowed}
              id='numberInput'
              onChange={() => {
                setnumAllowed((prev) => !prev);
              }}
            />
            <label>Number</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
            />
            <label>Character</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
