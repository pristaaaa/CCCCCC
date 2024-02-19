// Set the source for the iframe
document.getElementById('streamIframe').src = 'https://finscorpio.com/stream/ch1.php';

// Your existing script logic can go here
document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('formContainer').style.display = 'none';
    document.getElementById('logo').style.display = 'block';
});

function openForm() {
    document.getElementById('formContainer').style.display = 'block';
    document.getElementById('logo').style.display = 'none';
}

var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
    backdrop: 'static'
});
myModal.show();
