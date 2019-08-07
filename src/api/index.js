// import { socket } from '../index.js';
// const subscribeToTimer = async (cb) => {
//   await socket.on('timer', async  (timestamp) => {
//     console.log('TIMETIMETIMETIME', timestamp)

//    return cb(null, timestamp);
//   });
//   await socket.on('someEvent', async (data) => {
//   await console.log(data, 'fej;oiawjefo;iawjho;iawj;oiawjfe;onafewoeowa');
//   })


//   let time = new Date();
//   // console.log(time.getUTCHours() + ':' + time.getUTCMinutes());
//   let utcTime = time.getUTCHours() + ':' + time.getUTCMinutes();

//   console.log(utcTime, '123')

//   socket.on('time', async (data) => {
    
//     time = new Date()
//     // console.log('TIMETIMETIMETIME', time)
//     let utcTime = time.getUTCHours() + ':' + time.getUTCMinutes();

//     time = time.toLocaleTimeString();



//     socket.emit('localTime', {time: time, utcTime: utcTime})
//   })

 


//  await socket.emit('subscribeToTimer', 1000);
// }
// export { subscribeToTimer };

import { socket } from '../index.js';
const subscribeToTimer = async (cb) => {
  await socket.on('timer', async  (timestamp) => {
   return cb(null, timestamp);
  });
  await socket.on('someEvent', async (data) => {
  await console.log(data, 'fej;oiawjefo;iawjho;iawj;oiawjfe;onafewoeowa');
  })

 await socket.emit('subscribeToTimer', 1000);
}
export { subscribeToTimer };
