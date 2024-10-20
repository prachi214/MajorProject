import React, { useEffect } from 'react';
import { Card, Text } from '@mantine/core'; 
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Loader = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' }); // Initialize AOS
  }, []);

  return (
    <div 
      className="w-[70vw] sm:w-[60vw] flex flex-col space-y-8 border-4 rounded-br-lg p-8 bg-red-200 rounded-t-lg transition-transform duration-300 ease-in-out hover:!scale-[1.02] hover:!shadow-[0_0_10px_1px_#e7f52c] md:max-w-2xl md:m-10 "  
data-aos="zoom-in"
    >
      <h1 className="text-4xl font-bold text-center text-black">
        Hello Users 🤗
      </h1>

  
  
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <div className="text-black">
              <Text c="dimmed" className="!text-white-500" size="lg">
                Text-to-speech software, or TTS, will read the text of documents
                and web pages aloud. Most have different voice options to choose
                from, and allow you to customize the speed and pitch of the voice.
                They can also highlight the word currently being read, allowing
                users to follow along visually.
              </Text>
            </div>
          </Card.Section>
        </Card>
 
    </div>
  );
};

export default Loader;















// import React from 'react';
// import { Card, Text } from '@mantine/core';  // Importing Mantine components
// import AOS from 'aos';  // Importing AOS library
// import 'aos/dist/aos.css'; 
// const Loader = () => {
//   return (

//     <div  className=" w-[70vw] sm:w-[60vw] flex flex-col   space-y-8 border-4 rounded-br-lg p-8 bg-red-200  rounded-t-lg transition-transform duration-300 ease-in-out hover:!scale-[1.02] hover:!shadow-[0_0_10px_1px_#e7f52c] md:max-w-2xl md:m-10">
//       <h1 className="text-4xl font-bold text-center text-black">Hello Users 🤗
      
//       </h1>
//       <Card shadow="sm" padding="lg" radius="md" withBorder >
//         <Card.Section>
//           <div className="text-black">
//             <Text c="dimmed" className="!text-white-500" size="lg">
//               Text-to-speech software, or TTS, will read the text of documentss
//               and web pages aloud. Most have different voice options to choose
//               from, and allow you to customize the speed and pitch of the voice.
//               They can also highlight the word currently being read, allowing
//               users to follow along visually.
//             </Text>
//           </div>
//         </Card.Section>
//       </Card>
//     </div>



//   );
// };

// export default Loader;
