import { useEffect, useState } from 'react';
import Script from 'next/script';
import { Modal } from 'antd';

export default function Map() {
 let k = 0;
 const [showPopout, setShowPopout] = useState(false);

 useEffect(() => {
  if (k == 0) {
   k++;
   try {
    ymaps.ready(init);
   } catch (e) {}
  }
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
   <Modal title="Basic Modal" visible={false}>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
   </Modal>
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
