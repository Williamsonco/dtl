console.log('>> form.js')

const onPhotoChange = (event) => {
    console.log('++ onPhotoChange', donationPhoto.files)
}

const donationPhoto = document.getElementById('donationPhoto');
donationPhoto.addEventListener('change', onPhotoChange, false);

const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log('++ event.target', event.target)
    const formData = new FormData(event.target.value)
    const { values } = formData;
    console.log('++ TODO: save the form data to the database', values)
}

donationForm.addEventListener('submit', onSubmitHandler)