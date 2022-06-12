import { useEffect } from 'react';
import Script from 'next/script';

export default function Map() {
 let k = 0;

 useEffect(() => {
  // if (k == 0) {
  //  k++;
  //  ymaps.ready(init);
  // }
 }, []);

 function init() {
  var myMap = new ymaps.Map(
    'map-container',
    {
     center: [54.83, 37.11],
     zoom: 5,
    },
    {
     searchControlProvider: 'yandex#search',
    }
   ),
   myPlacemark = new ymaps.Placemark([55.907228, 31.260503], {
    click: () => {
     alert('f');
    },
   });
  myPlacemark.events.add(['click', 'deselect'], function (e) {
   alert('f');
  });

  myMap.geoObjects.add(myPlacemark);
 }

 return (
  <div
   style={{
    height: '100%',
    width: '100%',
    borderRadius: '4px',
   }}>
   <Script
    src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=a8693c98-e820-425a-948f-17952a243766"
    type="text/javascript"
    onLoad={(e) => {
     ymaps.ready(init);
    }}></Script>

   <div
    id={'map-container'}
    style={{
     height: '100%',
     width: '100%',
     borderRadius: '4px',
    }}></div>
  </div>
 );
}
