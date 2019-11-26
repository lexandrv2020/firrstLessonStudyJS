 //command   
 const command = () => {
     const photoCommand = document.querySelectorAll('.command__photo');
     //console.log('photoCommand: ', photoCommand);

     photoCommand.forEach((elem) => {
         elem.addEventListener('mouseenter', (event) => {
             let originalSrc = event.target.src;
             event.target.src = event.target.dataset.img;
             event.target.dataset.img = originalSrc;

         })
         elem.addEventListener('mouseleave', (event) => {
             let datasetSrc = event.target.src;
             event.target.src = event.target.dataset.img;
             event.target.dataset.img = datasetSrc;
         })
     })
 }
 export default command;