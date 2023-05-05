import React from 'react';
import {useState} from 'react';
const Index = () => {
    const [text, setText] = useState('sadf kfks@mga.com');
    function extractEmail() {
        const emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;
        const matches = text.match(emailRegex);
        console.log(matches);
        matches && setText(matches.join('\n'));
        return matches ? matches : [];
    }

    return (
        <div className='flex justify-center '>
            <div className='mx-40'>
                <div>
                    <h1 className='text-3xl font-bold text-green-400'>Hi, I am Sai Win Oo</h1>
                    <div>
                        <textarea value={text} onChange={(e)=> setText(e.target.value)} className='w-[400px] focus:border-green-400 border h-[300px] '></textarea>
                    </div>
                    <button onClick={extractEmail} className='bg-green-400 text-white px-5 py-2'>Extract Email</button>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Index;