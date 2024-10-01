let langCode = prompt('Please enter a language code')

if(langCode == 'en') {
    document.write('Hello World translated in English is: Hello World')
} else if (langCode == 'es') {
    document.write('Hello World translated in Spanish is: Hola Mundo')
} else if (langCode == 'de') {
    document.write('Hello World translated in German is: Hallo Welt')
} else if (langCode == 'fr') {
    document.write('Hello World translated in French is: Bonjour Le Monde')
} else {
    document.write('Hello World translated in English is: Hello World')
}