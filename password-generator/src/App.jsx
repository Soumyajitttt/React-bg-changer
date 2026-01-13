import { useEffect, useState, useCallback, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(7)
  const [includeUppercase, setIncludeUppercase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const generatePassword = () => {
    let str = "abcdefghijklmnopqrstuvwxyz"
    let pass = ""
    if (includeUppercase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (includeNumbers) str += "0123456789"
    if (includeSymbols) str += "!@#$%^&*()_+~`|}{[]:;?><,./-="

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length)
      pass += str[index]
    }
    setPassword(pass)
  }

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 35);
    window.navigator.clipboard.writeText(password)
  }, [password])

  
  useEffect(() => {
    generatePassword()
  }, [length, includeUppercase, includeNumbers, includeSymbols])

  return (
    <div className="bg-gray-950 min-h-screen flex items-center justify-center">
    <div className="w-full max-w-md mx-auto shadow-xl rounded-2xl px-8 py-8 my-8 bg-gray-900 text-orange-500 border border-gray-800">
  <h1 className='text-white text-3xl font-bold text-center mb-6'>Password Generator</h1>
  
  {/* Password Display Section */}
  <div className="flex shadow-lg rounded-xl overflow-hidden mb-6 ring-1 ring-gray-700 bg-gray-800 relative group">
    <input
      type="text"
      value={password}
      className="outline-none bg-transparent w-full py-4 px-5 text-xl font-mono text-orange-400 tracking-wider"
      placeholder="Password"
      readOnly
      ref={passwordRef}
    />
    <button
      onClick={copyPasswordToClipboard}
      className='outline-none bg-orange-600 text-white px-6 py-2 font-semibold hover:bg-orange-500 transition-all duration-200 active:scale-95'
    >
      Copy
    </button>
  </div>

  {/* Settings Section */}
  <div className='flex flex-col gap-y-4'>
    
    {/* Range Slider */}
    <div className='flex flex-col gap-y-2'>
      <div className="flex justify-between items-center text-gray-300 mb-1">
        <label className="font-medium">Password Length</label>
        <span className="text-orange-500 font-bold text-lg">{length}</span>
      </div>
      <input 
        type="range"
        min={6}
        max={30}
        value={length}
        className='cursor-pointer h-2 bg-gray-700 rounded-lg appearance-none accent-orange-500 hover:accent-orange-400 w-full'
        onChange={(e) => {setLength(Number(e.target.value))}}
      />
    </div>

    {/* Checkboxes - Arranged neatly */}
    <div className="flex items-center justify-between mt-4">
      
      <div className="flex items-center gap-x-3">
        <input
            type="checkbox"
            checked={includeUppercase}
            id="uppercaseInput"
            className="w-5 h-5 accent-orange-500 cursor-pointer"
            onChange={() => setIncludeUppercase((prev) => !prev )
            }
        />
        <label htmlFor="uppercaseInput" className="text-gray-300 cursor-pointer select-none">Uppercase</label>
      </div>

      <div className="flex items-center gap-x-3">
        <input
            type="checkbox"
            checked={includeNumbers}
            id="numberInput"
            className="w-5 h-5 accent-orange-500 cursor-pointer"
            onChange={() => {
                setIncludeNumbers((prev) => !prev);
            }}
        />
        <label htmlFor="numberInput" className="text-gray-300 cursor-pointer select-none">Numbers</label>
      </div>

      <div className="flex items-center gap-x-3">
          <input
              type="checkbox"
              checked={includeSymbols}
              id="symbolInput"
              className="w-5 h-5 accent-orange-500 cursor-pointer"
              onChange={() => {
                  setIncludeSymbols((prev) => !prev )
              }}
          />
          <label htmlFor="symbolInput" className="text-gray-300 cursor-pointer select-none">Symbols</label>
      </div>
      
    </div>
  </div>
</div>
    </div>
  )
}

export default App