# basit_lisans
basit şekilde yazdığınız bir paket programı uzaktan çalışmasına izin vermeye yarar.


basit şekilde yazdığınız bir paket programı uzaktan çalışmasına izin vermeye yarar.

____________
değişkenler
____________
tg_token: telegram bot apisi

spreadsheetId: google sheet urlsinin içindeki 
token örnek parantez içinde olan kısım : https://docs.google.com/spreadsheets/d/'''1XbH9N65i2BI4WLGkpnYlMJC3EFPkU9wmvD'''/edit#gid=0

TELEGRAM ID: telegram hesabıbızın id'si.


_______________
çalışma mantığı
_______________

1 - google script ile dosyayı yayınlandıktan sonra verilen url'ye windows makinenin uuid değeri url'ye parametre atanır.
      script.google.com/macros/s/AKfycbybE6CTR22ecctPx-l6s6tALQmtspUdaqlk3UkmOD7w43SSAIhgGik4MZDhN70j7KxvOA/exec + ?id=MAKİNENİN ID'si
    
2 - oluşturulan parametreli url get isteği yapılır. telegram botu size url sonundaki id parametresini bildirir.

3 - get isteği true veya false döner. 

4 - true: makinenin id'si google sheet dosyasının içinde olduğunu bildirir.
    false: makinenin id'si google sheet dosyasının içinde olmadığını bildirir.

6 - istediğiniz windows makinede çalışmasını istediğiniz zaman google sheet 1. kolona o makinenin uuid değerini yazın.birden fazlası için alt alta yazın.

5 - bu dönen veriye göre herhangi bir programlama dilinde get isteği yapılanabilir.örnek olarak python dosyası projenin içinde.
