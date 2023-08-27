
const Newslatter = () => {

    return (
        <div className='justify-center pt-56 m-auto items-center text-center space-y-4 h-[70vh] text-gray-700'>
            <div>
                <h6 className='text-3xl md:text-4xl font-bold'>
                    Subscribe Our Newsletter
                </h6>
            </div>
            <div className="text-center">
                <p className='text-center text-lg font-medium'>
                    Get The latest information and params offers directly
                </p>
            </div>
            <div className='flex max-w-[30rem] border m-auto text-center gap-4 flex-wrap items-center justify-center'>
                <input type="text" placeholder='Email address' className='border border-gray-600 py-1 px-2 md:px-4 flex flex-grow w-80' />
                <button className='text-white bg-gray-900 border border-gray-800 px-4 py-2'>
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default Newslatter;