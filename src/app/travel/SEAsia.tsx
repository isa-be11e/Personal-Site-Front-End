import food_bank from "../../../public/food_bank.jpeg";
import food_bank_1 from "../../../public/food_bank_1.jpeg";
import AccordionDetailBody from '../../components/accordion/AccordionDetailBody';

const pics = [
   {source: food_bank_1, alt: 'Volunteers at the Toronto Vegetarian Food Bank'},
   {source: food_bank, alt: 'fruits and vegetables on a table'},
 ];

const resources = [
  {href:'https://www.vegfoodbank.com/', text:'Food Bank Website'},
  {href:'https://www.instagram.com/veganfoodbank/', text:'Food Bank Instagram'}
];

const sections = [
  {
    title: 'Why South East Asia?',
    body: <AccordionDetailBody>
      I did a yoga retreat in Bali, Indonesia in 2019 and I knew I wanted to go back as I had such an amazing time.
      I've always wanted to go to Thailand, Cambodia and Vietnam as I'd heard such great things from people that travelled there and I love these cuisines.
      I loved the experience of getting to see so many places and learn about so many cultures.
    </AccordionDetailBody>
  },
{
    title: 'Vietnam',
    body: <AccordionDetailBody>
      I landed in Hanoi and it was quite the culture shock, as Vietnam's capital city it's an incredibly and crossing the street is an endeavor of its own.
      After a three day tour of the Ha Giang loop, I visited Ha Long Bay and Cat Ba Island, both have a remarkable landscape littered with limestone karsts.
      I visited a city called Ninh Binh where I had a lovely bike trip and saw the largest Buddha statue in all of Vietnam.
      I got on a night bus to head to Hoi An where I would extend my stay because it was such a great place.
      Hoi An is known for it's tailors, tourists flock to get prom and wedding attire made, I of course bought a matching linen top and pant set!
    </AccordionDetailBody>
  },
  {
    title: 'Cambodia',
    body: <AccordionDetailBody>
      Flying in to the Siem Reap airport was I was immediately greeted with my first ride in a tuk tuk.
      In addition to seeing the amazing Angkor Wat temple complex, I also saw the circus and visited a floating village.
      After a busy few weeks it was time to decompress in a yoga retreat near Phnom Penh, Cambodia's capital city.
      The retreat was in such a gorgeous location and I met some lovely people there.
      I visited Phnom Penh after the retreat and went to the genocide museum where I learned more about Cambodia unfortunately recent tragic history.
      My last stop before heading to Thailand was Kampot, it was a nice place to explore and spend a few rainy days.
    </AccordionDetailBody>
  },
  {
    title: 'Thailand',
    body: <AccordionDetailBody>
      I landed in Bangkok and explored the city but was mostly looking forward to Chiang Mai and the islands.
      After a 14 hour overnight train I made it to Chiang Mai,
    </AccordionDetailBody>
  },
  {
    title: 'Singapore & Indonesia',
    body: <AccordionDetailBody>
      Singapore was the most similar to Toronto, both in price and atmosphere.
    </AccordionDetailBody>
  },
];

export default sections;