import React, { useState,useEffect } from 'react'


const Calculator = () => {
    const [input,setInput] = useState('');
    const [result,setResult] = useState('');
    const handleChange  = (value) =>{
        setInput(input+value);
    };

    const handleClear = () =>{
        setInput('');
        setResult('');
    };

    const handleBackspace = () =>{
        setInput(input.slice(0,-1));
    }

    const handleSubmit = () =>{
        setResult(eval(input));
    };

    return (
        <>
            <div className='min-h-screen flex items-center justify-center'>
                <div className='bg-white rounded-lg shadow p-6 w-96'>
                    <div className='mb-4 p-2 bg-gray-100 rounded-lg text-right text-xl'>
                        <div className='text-gray-500'>{input}</div>
                        <div className='font-bold'>{result}</div>
                    </div>

                    <div className='grid grid-cols-4 gap-8'>

                        <button className='bg-gray-300 col-span-2 p-4 rounded-lg hover:bg-gray-400 transition duration-300' onClick={() => handleClear()}>C</button>

                        <button className='bg-yellow-500 col-span-2 p-4 rounded-lg hover:bg-yellow-600 transition duration-300' onClick={() => handleBackspace()}>&larr;</button>

                        {['1','2','3','+'].map(value => (
                            <button className='bg-gray-300 p-4 rounded-lg hover:bg-gray-400 transition duration-300' onClick={() => handleChange(value)}>{value}</button>
                        ))}

                        {['4','5','6','-'].map(value => (
                            <button className='bg-gray-300 p-4 rounded-lg hover:bg-gray-400 transition duration-300' onClick={() => handleChange(value)}>{value}</button>
                        ))}

                        {['7','8','9','*'].map(value => (
                            <button className='bg-gray-300 p-4 rounded-lg hover:bg-gray-400 transition duration-300' onClick={() => handleChange(value)}>{value}</button>
                        ))}
                        
                        <button className='bg-gray-300 p-4 rounded-lg hover:bg-gray-400 transition duration-300' onClick={() => handleChange('0')}>0</button>
                        <button className='bg-gray-300 p-4 rounded-lg hover:bg-gray-400 transition duration-300' onClick={() => handleChange('/')}>/</button>
                        <button className='bg-gray-300 col-span-2 p-4 rounded-lg hover:bg-gray-400 transition duration-300' onClick={() => handleSubmit()}>=</button>
                    </div>
                </div>   
            </div>
        </>
    )
}

export default Calculator
