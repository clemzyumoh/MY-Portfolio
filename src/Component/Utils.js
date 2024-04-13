


export const validateEmail = (email) => {
   return String(email)
    .toLowerCase()
   .match(
       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


  // Utils.js
// export const validateEmail = (email) => {
//   // Regular expression for basic email validation
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   if (!emailRegex.test(email)) {
//     return 'Invalid email address';
//   }

//   return null;
// };
