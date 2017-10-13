/**
 * Created by marina on 03.10.17.
 */

function openAssesment() {
    document.getElementById('assesment').style.display = 'block';
    document.getElementById('assesmentButt').style.borderColor = 'lightgrey';
    document.getElementById('assesmentButt').style.backgroundColor = 'white';
    document.getElementById('assesmentButtA').style.color = '#777';

    document.getElementById('profile').style.display = 'none';
    document.getElementById('profileButt').style.borderColor = '#59068a';
    document.getElementById('profileButt').style.backgroundColor = '#59068a';
    document.getElementById('profileButtA').style.color = 'white';

    document.getElementById('editButt').style.display = 'none';
}

function openProfile() {
    document.getElementById('profile').style.display = 'block';
    document.getElementById('profileButt').style.borderColor = 'lightgrey';
    document.getElementById('profileButt').style.backgroundColor = 'white';
    document.getElementById('profileButtA').style.color = '#777';

    document.getElementById('assesment').style.display = 'none';
    document.getElementById('assesmentButt').style.borderColor = '#59068a';
    document.getElementById('assesmentButt').style.backgroundColor = '#59068a';
    document.getElementById('assesmentButtA').style.color = 'white';

    document.getElementById('editButt').style.display = 'inline-block';
}

