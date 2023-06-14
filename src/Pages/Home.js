import React from 'react';

function Home(props) {
    return (                
        <div className='flex  h-screen items-center'>      
            <div className='w-1/2 ml-2'>
                <img src="young-woman-g8841b98b4_1280.jpg" />
            </div>   
            <div className='w-1/2 '>
                <div className='text-3xl text-center mb-5'>
                    Library Management ver:1.0
                </div>
                <div className='m-3'>
                    A library is a collection of resources, typically in the form of books and other printed materials, organized and made available for people to borrow or use for reference. Libraries play a crucial role in providing access to information, promoting literacy, and supporting education and research.
                    Traditionally, libraries have physical locations where people can visit and browse the collections. These buildings often have reading areas, study spaces, and various amenities to facilitate learning and research. In addition to books, libraries may also offer other media such as magazines, newspapers, audio recordings, videos, and digital resources.
                    Libraries are not limited to public institutions. Academic libraries are found in educational institutions, such as universities and colleges, and they focus on supporting the research and learning needs of students, faculty, and staff. Specialized libraries cater to specific topics or industries, such as law libraries or medical libraries.
                    With the advancement of technology, many libraries have expanded their services to include digital resources and online access to their collections. Digital libraries provide electronic books, articles, journals, databases, and other digital materials that can be accessed remotely via computers and mobile devices.
                    Libraries also serve as community hubs, offering various programs and services beyond lending materials. They may organize events, workshops, lectures, and exhibitions to promote literacy, cultural awareness, and community engagement.
                    Overall, libraries are valuable institutions that contribute to the dissemination of knowledge, intellectual growth, and lifelong learning.
                </div>           
                <div className='flex justify-center'>
                    <img className='w-44' src="girl-g1f8c722a1_1280.png" />
                </div>     
                <div className='flex justify-center text-center mt-5'>
                    <div className='w-1/2 flex'>
                        <div className='bg-blue-500 rounded-xl w-1/2 text-white p-1 hover:bg-blue-700 cursor-pointer'>
                            REGISTER    
                        </div>
                        <div className='bg-blue-500 rounded-xl w-1/2 text-white p-1 hover:bg-blue-700 cursor-pointer'>
                            LOGIN
                        </div>
                    </div>                    
                </div>
                <div className='border-t-2 ml-2 mt-1 font-bold pb-1'>New Arrival</div>
                <div className='flex justify-around'>
                    <div className='w-20 bg-slate-300 rounded-lg text-center p-3'>Book 1</div>
                    <div className='w-20 bg-slate-300 rounded-lg text-center p-3'>Book 2</div>
                    <div className='w-20 bg-slate-300 rounded-lg text-center p-3'>Book 3</div>
                    <div className='w-20 bg-slate-300 rounded-lg text-center p-3'>Book 4</div>
                    <div className='w-20 bg-slate-300 rounded-lg text-center p-3'>Book 5</div>
                    <div className='w-20 bg-slate-300 rounded-lg text-center p-3'>Book 6</div>
                </div>
            </div>   
        </div>
    );
}

export default Home;