Använde mig av socket.io för att vi gjort det vid tidigare kurstillfällen.
Tycker det funkar ganska bra att använda, men behöver mer erfarenhet för att känna mig någorlunda bekväm med det.

Skapade fem slumpmässigt genererade värden som jag la i en array.
Denna array skickades sedan till klienten med ett satt intervall.
Använde mig av en emit, för att skicka värdena till alla sockets.

dependencies:
    body-parser - för att skicka/läsa data i jsonformat.
    cors - för att hantera data mellan client och server
    express
    socket.io - för att skicka slumpmässiga priser till klienten.