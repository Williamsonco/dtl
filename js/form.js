console.log('>> form.js')

// const onPhotoChange = (event) => {
//     console.log('++ onPhotoChange', donationPhoto.files)
// }

// const donationPhoto = document.getElementById('donationPhoto');
// donationPhoto.addEventListener('change', onPhotoChange, false);

const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log('hello form');
    
    //  Get all values from elements on the DOM / document and set them to variable
    var categoryValue = document.getElementById("category").value;
    console.log('categoryValue', categoryValue)
    
    const emailValue = document.getElementById('emailInput').value;
    console.log('emailValue', emailValue)

    //  Add info to a data object
    const dataToSendToEmail = {
        category: categoryValue,
        email: emailValue
    }

    //  Call Firebase function to submit email data
    //      This will be the function you do in the tutorial
    //      https://medium.com/@edigleyssonsilva/cloud-functions-for-firebase-sending-e-mail-1f2631d1022e
}

const donationForm = document.getElementById('contact-form');
donationForm.addEventListener('submit', onSubmitHandler)