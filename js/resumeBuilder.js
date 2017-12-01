/*
This is empty on purpose! Your code to build the resume will go here. */

var email = 'vamsyk9@gmail.com'
var newemail = email.replace('gmail', 'hotmail')

console.log(email)

console.log(newemail)

var aws = 'I am vamsy and I have awsome thoughts'

var funThoughts = aws.replace('awsome', 'fun')

console.log(funThoughts)

var bio = {
    'name': 'Vamsy Krishna Reddy',
    'Role': 'SDE1',
    'mail': 'kvamsy@gmail.com',
    'Contact': '+91 8884671679',
    'image': '/Users/vamsydeepthi/Documents/GitHub/frontend-nanodegree-resume/images/fry.jpg'
}
var formattedname = HTMLheaderName.replace('%data%', bio.name)
var formatrole = HTMLheaderRole.replace('%data%', bio.Role)
var formatmail = HTMLemail.replace('%data%', bio.mail)
var formatcontact = HTMLmobile.replace('%data%', bio.Contact)

$('#header').append(formattedname)
$('#header').append(formatrole)
$('#header').append(formatmail)
$('#header').append(formatcontact)