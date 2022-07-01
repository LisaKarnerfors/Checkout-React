# CheckOut-React
School project in React and TypeScript

Uppgiftsbeskrivning:
Det ni ska skapa är en e-handel sida som presenterar ett antal olika produkter. Vilka typer av produkter som säljs är valfritt men det ska vara seriöst och välgjort. ✅ 

Det ska vara möjligt att klicka på en produkt för att kunna läsa mer om den. ✅ 

Från både startsidan och produktsidan ska det vara möjligt att lägga till produkter i en kundvagn och det ska tydlig framgå för användaren när produkten läggs till i kundvagnen. ✅ 

Utcheckningsflödet skall ligga på en egen sida och innehålla delarna Kundvagn, Dina uppgifter, Fraktsätt & Betalsätt. ✅ 


Hur projektet startas och körs: ✅ 

För att köra igång Vite-projektet i VS behöver du installera Vite, detta gör du genom att först och främst öppna terminalen i VS. Därefter matar du in "npm create vite@latest my-vue-app --template vue". "My-vue-app" representerar mappens namn och där ställer du in var din mapps namn och var projektet skall ligga. Efter att du klickat på enter får du flera alternativ att välja på, där väljer du vanilla & nästa steg väljer du vanilla.ts. Därefter skall du skriva in "cd & projektets namn". Efter att du klickat på enter skriver du in "npm install" som installerar de grundläggande mallar för ramverk till ditt projekt. Slutligen skriver du in "npm run dev" som ger dig URLen där projektet körs. För att köra om projektet behöver du skriva "npm run dev" varje gång. 


En bra guid hur du installerar Vite:
https://vitejs.dev/guide/#scaffolding-your-first-vite-project


Länk tll Github-repot:
https://github.com/Andersson76/CheckOut-React/

Utcheckningsflödet(G):

Kundvagn ska lista tillagda produkter (bild & titel), antal, pris och kundvagnens totalpris. Det ska vara möjligt att uppdatera kundvagnen - dvs ändra antalet av en produkt eller ta bort en produkt helt från kundvagnen. Totalpriset ska alltid uppdateras och vara korrekt. ✅ 

Dina uppgifter: Ska vara ett formulär där man fyller i namn, mail, telefonnummer och adress. ✅ 

Fraktsätt: Det ska gå att välja mellan minst tre olika fraktsätt där det tydligt framgår vem som är leverantören, kostnaden för frakten samt leveransdatumet. Leveransdatumet ska baseras på hur lång tid det tar för en leverantör att leverera din order från det aktuella datumet. (leverantör 1 tar 24h, leverantör 2 tar 48h osv). ✅ 

Betalsätt: Det ska även här gå att välja mellan minst tre olika betalsätt (kort & Swish skall finnas). Varje betalsätt ska innehålla ett formulär för nödvändig information. Fälten i formuläret ska gå att automatisk fyllas i. När alla delarna i utcheckningsflödet har fyllts i ska det finns en ”Slutför köp” knapp tillsammans med totalpriset (inklusive frakt och moms). När man väljer att slutföra sitt köp skall detta endast gå om samtlig information är rätt ifylld. Vid genomfört köp skall en bekräftelse visas på köpet. Tänk på att det inte ska gå att placera ordern två gånger, även om man navigerar tillbaka på sidan! ✅ 



Krav för godkänt:
1.Git & GitHub har använts ✅ 

2.Projektmappen innehåller en README.md fil - (läs ovan för mer info) ✅ 

3.Uppgiften lämnas in innan deadline! ✅ 

4.Ett designsystem används ✅ 

5.React Router skall användas som navigation. Exempelvis så skall produkten som visas på produktsidan ska baseras på en parameter i url’en. ✅ 

6.React context skall användas för hantering av kundvagnen. ✅ 

7.Samtliga fält ska ha valideringsregler (tips, se Material UI:s dokumentation) ✅ 

8.Sidan ska vara fullt responsiv ✅ 

9.Mockade produkter ska ligga i en egen fil och vara typade med ett TS interface ✅ 

