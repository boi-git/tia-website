import React,{useState} from 'react'

const Shop = () => {

const [displayH1, setDisplayH1] = useState({
h1_1: false,
h1_2: true,
h1_3: true,
h1_4: true,
});

const handleLogo = (h1Key) => {
setDisplayH1(prevState => ({
...Object.keys(prevState).reduce((acc, key) => {
acc[key] = key !== h1Key; // Set h1Key to true and others to false
return acc;
}, {})
}));
};

const x = 'w-24 h-16 flex items-center justify-center mr-2.5 ';
return (

<div className='flex'>
    <div className='flex items-center justify-between w-3/4 px-2'>
        <div className='flex items-center'>
            <div className={x} onClick={()=> handleLogo('h1_1')}>
                <img src="/nba.png" alt="" className='w-full h-auto ' />
            </div>
            <h1 className={!displayH1.h1_1?'w-64 font-normal text-xs p-3':'hidden'}>Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
                Necessitatibus
                iste ipsa quasi facer.</h1>

        </div>
        <div className='flex items-center'>
            <div className={x} onClick={()=> handleLogo('h1_2')}>
                <img src="/ne.png" alt="" className='w-full h-auto ' />
            </div>
            <h1 className={!displayH1.h1_2?'w-64 font-normal text-xs p-3':'hidden'}>Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
                Necessitatibus
                iste ipsa quasi facer.</h1>

        </div>

        <div className='flex items-center'>
            <div className={x}onClick={()=> handleLogo('h1_3')}>
                <img src="/hrc.png" alt="" className='w-full h-auto ' />
            </div>
            <h1 className={!displayH1.h1_3?'w-64 font-normal text-xs p-3':'hidden'}>Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
                Necessitatibus
                iste ipsa quasi facer.</h1>

        </div>
        <div className='flex items-center'>
            <div className={x}onClick={()=> handleLogo('h1_4')}>
                <img src="/nfl.png" alt="" className='w-auto h-full ' />
            </div>
            <h1 className={!displayH1.h1_4?'w-64 font-normal text-xs p-3':'hidden'}>Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
                Necessitatibus
                iste ipsa quasi facer.</h1>

        </div>
    </div>
    <button className='bg-pink-900 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Discover More</button>

</div>

) }

export default Shop