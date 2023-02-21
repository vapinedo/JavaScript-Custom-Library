var a = G$('Victor', 'Pinedo');

a.greet().setLang('es').greet(true).log();

$('#login').click(function() {
    var loginGreetr = G$('John', 'Doe');

    $('#logindiv').hide();

    loginGreetr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});