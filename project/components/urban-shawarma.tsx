'use client'

import { useMemo, useState } from 'react'
import { ArrowDown, ArrowRight, Clock3, MapPin, Phone, Utensils, X } from 'lucide-react'

const menuItems = [
  { category: 'SHAWARMA & WRAPS', name: 'SMALL CHICKEN SHAWARMA', description: 'Chicken, garlic sauce, pickles and salad.', price: '$6.99' },
  { category: 'SHAWARMA & WRAPS', name: 'REGULAR CHICKEN SHAWARMA', description: 'The full-size wrap, same build.', price: '$8.99' },
  { category: 'SHAWARMA & WRAPS', name: 'SMALL FALAFEL WRAP', description: 'Falafel fried to order, tahini and salad.', price: '$6.99' },
  { category: 'SHAWARMA & WRAPS', name: 'REGULAR FALAFEL WRAP', description: 'The full-size falafel wrap.', price: '$8.99' },
  { category: 'RICE & FRIES', name: 'CHICKEN ON RICE / FRIES', description: 'Chicken over rice or fries, with sauces.', price: '$8.99' },
  { category: 'RICE & FRIES', name: 'FALAFEL ON RICE / FRIES', description: 'Falafel over rice or fries, with sauces.', price: '$9.99' },
  { category: 'BURGERS', name: 'CHICKEN BURGER / WAFFLE CHICKEN BURGER', description: 'Add cheese for $0.99.', price: '$5.99' },
  { category: 'BURGERS', name: 'VEG BURGER / VEG WAFFLE BURGER', description: 'Add cheese for $0.99.', price: '$5.99' },
  { category: 'SNACKS & SIDES', name: 'VEG SAMOSA / CHICKEN SAMOSA', description: '3 pieces.', price: '$2.99' },
  { category: 'SNACKS & SIDES', name: 'GARLIC FRIES', description: 'Fries tossed in garlic sauce.', price: '$4.99' },
  { category: 'PIZZA', name: 'URBAN CHEESE PIZZA MINI', description: 'Personal-size cheese pizza.', price: '$5.99' },
  { category: 'PIZZA', name: 'URBAN VEG / CHICKEN CHEESE PIZZA MINI', description: 'Personal-size, veg or chicken.', price: '$6.99' },
]
const categories = ['ALL', 'SHAWARMA & WRAPS', 'RICE & FRIES', 'BURGERS', 'SNACKS & SIDES', 'PIZZA']
const phone = 'tel:+19056734444'

function Header() {
  return <header className="site-header"><a className="brand" href="#top" aria-label="Urban Shawarma home"><span className="brand-mark"><Utensils size={20} /></span><span>URBAN <b>SHAWARMA &amp; FASTFOOD</b></span></a><nav aria-label="Main navigation"><a href="#menu">MENU</a><a href="#story">OUR STORY</a><a href="#visit">VISIT</a></nav><a className="header-phone" href={phone}><Phone size={15} /> (905) 673-4444</a></header>
}

function Hero() {
  return <section className="hero" id="top"><div className="hero-photo" role="img" aria-label="Chicken shawarma over rice with the Toronto skyline behind" /><Header /><div className="hero-content"><div className="eyebrow"><span className="dot" /> MISSISSAUGA · FAST FOOD, MADE FRESH <span className="halal-tag">100% HALAL</span></div><h1>TOWERING<br /><em>FLAVOUR.</em></h1><p className="hero-copy">Chicken and falafel shawarma piled on rice, samosas, pizza, burgers and fries — cooked fresh all day on the second floor of Westwood Square.</p><div className="hero-actions"><a className="button-primary" href={phone}><Phone size={16} /> CALL (905) 673-4444</a><a className="button-outline" href="#menu">EXPLORE THE MENU <ArrowDown size={15} /></a></div><dl className="hero-facts"><div><dt>WESTWOOD SQUARE</dt><dd>FLOOR 2 · LEFT SIDE</dd></div><div><dt>HOURS</dt><dd>OPEN 7 DAYS A WEEK</dd></div><div><dt>KITCHEN</dt><dd>MADE TO ORDER</dd></div></dl></div></section>
}

function Marquee() {
  const row = ['CHICKEN SHAWARMA', 'FALAFEL ON RICE', 'SAMOSAS', 'PIZZA', 'CHICKEN BURGERS', 'FRIES', 'WESTWOOD SQUARE', 'FLOOR 2 · LEFT SIDE']
  return <div className="ticker" aria-label="Chicken shawarma, falafel on rice, samosas, pizza, chicken burgers, fries"><div className="ticker-track">{[...row, ...row, ...row, ...row].map((item, i) => <span key={i}>{item}<i>✳</i></span>)}</div></div>
}

function Menu() {
  const [active, setActive] = useState('ALL')
  const visible = useMemo(() => active === 'ALL' ? menuItems : menuItems.filter(item => item.category === active), [active])
  return <section className="menu-section section-wrap" id="menu"><div className="section-heading"><div><p className="section-kicker">01 / THE MENU</p><h2>BUILT FOR A<br /><em>BIG APPETITE</em></h2></div><p className="section-intro">Everything is made when you order it. Call ahead for pickup and it will be ready when you step off the escalator.</p></div><div className="signature-card"><img src="https://media.base44.com/images/public/6b031712ef293e5280a145f0/0494357cb_generated_b3ca54ad.png/v1/fill/w_468,h_585,al_c,q_90,usm_0.66_1.00_0.01,enc_auto,quality_auto/0494357cb_generated_b3ca54ad.png" alt="Urban Lava Cheese Shawarma"/><div className="signature-copy"><p className="section-kicker">SIGNATURE</p><h3>URBAN LAVA<br />CHEESE SHAWARMA</h3><p>Chicken or falafel, loaded with molten cheese sauce.</p><strong>$9.99</strong></div><div className="signature-seal"><b>100%<br />HALAL</b><span>ALL CHICKEN AND MEAT<br />CERTIFIED HALAL</span></div></div><div className="category-tabs" role="tablist" aria-label="Menu categories">{categories.map(category => <button key={category} type="button" role="tab" aria-selected={active === category} className={active === category ? 'active' : ''} onClick={() => setActive(category)}>{category}</button>)}</div><div className="menu-grid">{visible.map(item => <article className="menu-item" key={item.name}><div><h3>{item.name}</h3><p>{item.description}</p></div><strong>{item.price}</strong></article>)}</div><div className="menu-note"><span>ADD FRIES &amp; POP FOR $2.99</span><p>Tiffin &amp; catering available — call ahead.</p><a href={phone}>CALL THE COUNTER <ArrowRight size={14} /></a></div></section>
}

function Story() {
  return <section className="story-section" id="story"><div className="story-image" role="img" aria-label="Mississauga city centre skyline lit orange at night"><span>MISSISSAUGA, ON</span><small>43.5890° N / 79.6441° W</small></div><div className="story-copy"><p className="section-kicker">02 / OUR STORY</p><h2>FROM THE SECOND<br /><em>FLOOR, UP.</em></h2><p>Urban Shawarma started with a simple idea: the kind of food you find on a Toronto street corner at midnight, served properly — hot, fast and made in front of you.</p><p>We are tucked inside Westwood Square, on the second floor to the left. Follow the smell of the spit. Halal chicken carved to order, falafel dropped in the fryer when you ask for it, and rice that never sits around waiting.</p><dl className="story-facts"><div><dt>THE SPIT</dt><dd>Chicken stacked and roasted through the day</dd></div><div><dt>THE RICE</dt><dd>Seasoned, steamed, never sitting long</dd></div><div><dt>THE SAUCES</dt><dd>Garlic, tahini and hot — made in house</dd></div></dl></div></section>
}

function Visit() {
  const hours = [['SUNDAY', '12 p.m. – 5 p.m.'], ['MONDAY', '10 a.m. – 7:30 p.m.'], ['TUESDAY', '10 a.m. – 6 p.m.'], ['WEDNESDAY', '10 a.m. – 6 p.m.'], ['THURSDAY', '10 a.m. – 7:30 p.m.'], ['FRIDAY', '10 a.m. – 7:30 p.m.'], ['SATURDAY', '10 a.m. – 6 p.m.']]
  return <section className="visit-section section-wrap" id="visit"><div className="section-heading"><div><p className="section-kicker">03 / VISIT</p><h2>FIND THE<br /><em>COUNTER</em></h2></div><span className="status"><i /> CLOSED NOW</span></div><div className="visit-grid"><div className="address-card"><div className="address-icon"><MapPin /></div><p className="section-kicker">WESTWOOD SQUARE</p><h3>7215 Goreway Dr #2b10<br />Mississauga, ON L4T 0B4</h3><p className="visit-instruction">INSIDE WESTWOOD SQUARE — TAKE THE ESCALATOR UP TO THE FOOD COURT</p><a className="button-primary" href="https://maps.google.com/?q=7215+Goreway+Dr+Mississauga+ON+L4T+0B4" target="_blank" rel="noreferrer">GET DIRECTIONS <ArrowRight size={15} /></a><div className="call-block"><p className="section-kicker">CALL THE COUNTER</p><a href={phone}><Phone size={16} /> (905) 673-4444</a></div></div><div className="hours-card"><div className="hours-title"><p className="section-kicker">HOURS</p><Clock3 size={17}/></div><p className="timezone">EST</p><ul>{hours.map(([day, time], i) => <li key={day}><span>{day}</span>{i === 0 && <small>TODAY</small>}<b>{time}</b></li>)}</ul><p className="hours-note">Hours can change on holidays. Give us a ring before you make the trip.</p></div></div><div className="location-photos"><figure><div className="location-photo plaza" role="img" aria-label="Westwood Square"/><figcaption><b>WESTWOOD SQUARE</b><span>7215 Goreway Dr — look for the Shops marquee</span></figcaption></figure><figure><div className="location-photo foodcourt" role="img" aria-label="Food court upstairs"/><figcaption><b>FOOD COURT UPSTAIRS</b><span>Ride the escalator up — we are on the left</span></figcaption></figure></div></section>
}

function Footer() {
  return <footer className="site-footer"><div className="footer-main"><div className="footer-brand"><a href="#top"><span className="brand-mark"><Utensils size={19}/></span><b>URBAN <em>SHAWARMA</em></b></a><p>100% halal fast food done right — shawarma, pizza, burgers and snacks made to order in Mississauga.</p></div><div><p className="footer-label">FIND US</p><p>7215 Goreway Dr #2b10<br/>Mississauga, ON L4T 0B4<br/>Westwood Square · Floor 2, left side</p></div><div><p className="footer-label">ORDER</p><a href={phone}>(905) 673-4444</a><p>Call ahead for pickup.</p><a className="footer-call" href={phone}><Phone size={15}/> CALL NOW · (905) 673-4444</a></div></div><div className="footer-bottom"><span>© URBAN SHAWARMA · MISSISSAUGA, ON</span><span>MADE FRESH · SERVED FAST</span></div></footer>
}

export default function UrbanShawarma() {
  const [badgeVisible, setBadgeVisible] = useState(true)
  return <><main><Hero/><Marquee/><Menu/><Story/><Visit/></main><Footer/>{badgeVisible && <aside className="base-badge"><span className="badge-dot"/> Edit with <b>Base44</b><button aria-label="Close badge" onClick={() => setBadgeVisible(false)}><X size={14}/></button></aside>}</>
}
