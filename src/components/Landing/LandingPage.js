import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainContext } from '../MainContext';
import mainShortLogo from '../../assets/img/mainShortLogo.png';
import bgHero from '../../assets/img/james-baltz-_pBBkarmFTs-unsplash.jpg';
import dir1 from '../../assets/img/cows.jpg';
import dir2 from '../../assets/img/wheat-background.jpg';
import dir3 from '../../assets/img/dir3.png';
import dir4 from '../../assets/img/carrot.jpg';

// ─── COLORS ──────────────────────────────────────────────────────────────────

const AMBER      = '#D4920F';   // үндсэн accent — алтлаг amber
const AMBER_GLOW = '#f7c94b';   // hover, indicator
const CREAM      = '#fffcf0';   // дулаан цагаан дэвсгэр
const DARK       = '#5a4f40';   // footer, тексний харанхуй

// ─── DATA ────────────────────────────────────────────────────────────────────

const carouselSlides = [
    {
        img: bgHero,
        category: 'Газар тариалан',
        title: 'Тариаланг\nтаны гарт',
        desc: 'Хөрс боловсруулалтаас ургац хураалт хүртэл зардлаа хар, гүйцэтгэлээ хяна.',
    },
    {
        img: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=1600&auto=format&fit=crop',
        category: 'Мал аж ахуй',
        title: 'Мал аж ахуйгаа\nухаалгаар бүртгэ',
        desc: 'Мал бүрээр тэжээл, вакцин, үржил, борлуулалтын зардлыг хөтлөн, ашиг шимийг хяна.',
    },
    {
        img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop',
        category: 'Хүлэмжийн аж ахуй',
        title: 'Хүлэмжийн\nноогоо хяна',
        desc: 'Сорт бүрийн зардлыг ялган бүртгэж, нийт өртөг болон ургацын ашигт ажиллагааг гарга.',
    },
    {
        img: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1600&auto=format&fit=crop',
        category: 'Зарын платформ',
        title: 'Бүтээгдэхүүнээ\nшууд зар',
        desc: 'Үр, бордоо, техник, мал, газар зэрэг бүх төрлийн зарыг нэг дороос байршуул.',
    },
];

const directionTabs = [
    { id: 1, img: dir2, title: 'Үр тариа', desc: 'Хөрс боловсруулалтаас ургац хураалт хүртэл зардлаа хар, гүйцэтгэлээ хяна.' },
    { id: 2, img: dir3, title: 'Хүлэмжийн аж ахуй', desc: 'Хүлэмжийн нөхцөлд ургах ургамал бүрийн зардал, гүйцэтгэлийг нарийвчлан хөтөлж ашигт ажиллагааг тооцоол.' },
    { id: 3, img: dir4, title: 'Хүнсний ногоо', desc: 'Сорт тус бүрийн үр, бордоо, хөрс, усалгааны зардлыг ялган бүртгэж нийт өртөг болон ургацын ашигт ажиллагааг гарга.' },
    { id: 4, img: dir1, title: 'Мал аж ахуй', desc: 'Мал бүрээр тэжээл, вакцин, үржил, борлуулалтын зардлыг хөтлөн, ашиг шимийг тоогоор хянаж сүргийн өсөлтийг шинжил.' },
];

const coreSystems = [
    { emoji: '🌾', title: 'Нэгдсэн систем', desc: 'Agro Mongolia – Монголын хөдөө аж ахуйн бүх салбарыг хамарсан тариаланч, фермер, малчин бүрт зориулсан тоон дэмжлэгтэй цогц шийдэл.' },
    { emoji: '📌', title: 'Төлөвлөгөө & хяналт', desc: 'Хөрс боловсруулалтаас тариа хураалт хүртэл ажлын төлөвлөгөөг хялбар үүсгэх, бодит өгөгдөл дээр үндэслэн хэрэгжилтийг хянах.' },
    { emoji: '🛒', title: 'Зарын нэгдсэн орчин', desc: 'Үр, бордоо, техник, мал, газар, ажиллах хүч зэрэг бүх төрлийн зарыг нэг дороос байршуулах. Ашигтай зар, амжилттай арилжаа энд эхэлнэ.' },
    { emoji: '📊', title: 'Ухаалаг тайлан', desc: 'Зардлаа өдөр бүр хялбар бүртгэж, улирлын болон жилийн тайлангаа автоматаар гаргах. Автомат тайлан, ухаалаг графикууд.' },
    { emoji: '💰', title: 'Зээлийн үйлчилгээ', desc: 'Тариаланч таны онцлогт зориулсан хөдөө аж ахуйн уян хатан зээлийн үйлчилгээ. Таны хөдөлмөрийг дэмжих санхүүгийн шийдэл.' },
    { emoji: '📱', title: 'Хаанаас ч нэвтрэх', desc: 'Апп болон вэбээр хэзээ ч, хаанаас ч хялбар нэвтрэх боломжтой. iOS болон Android аппаар ухаалаг гар утсандаа ашиглаарай.' },
];

const navItems = [
    { label: 'Нүүр', id: 'hero' },
    { label: 'Чиглэл', id: 'direction' },
    { label: 'Систем', id: 'system' },
    { label: 'Холбоо барих', id: 'contact' },
];

// ─── HEADER ──────────────────────────────────────────────────────────────────

function Header({ onLoginClick }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
    };

    return (
        <header style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50 }}>
            {/* Top bar */}
            <div style={{ background: CREAM, borderBottom: '1px solid #ede8d5' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', height: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', gap: '1.5rem', fontSize: '11px', color: '#7a6a40' }}>
                        <span>Газар тариалан</span>
                        <span>Мал аж ахуй</span>
                        <span>Хүлэмжийн аж ахуй</span>
                        <span>Зарын нэгдсэн платформ</span>
                    </div>
                    <div style={{ fontSize: '11px', color: '#7a6a40' }}>Agro Mongolia</div>
                </div>
            </div>

            {/* Nav */}
            <nav style={{ backgroundColor: '#ffffff', borderBottom: `3px solid ${AMBER}`, boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
                        <img src={mainShortLogo} alt='logo' style={{ height: '2rem', cursor: 'pointer' }} onClick={() => scrollTo('hero')} />
                        <div style={{ display: 'flex', gap: '1.75rem' }}>
                            {navItems.map((item) => (
                                <HoverNavBtn key={item.id} label={item.label} onClick={() => scrollTo(item.id)} />
                            ))}
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                        <button
                            onClick={onLoginClick}
                            style={{ padding: '0.45rem 1.2rem', borderRadius: '9999px', border: `1.5px solid ${AMBER}`, background: 'white', color: AMBER, fontWeight: 600, fontSize: '13px', cursor: 'pointer', fontFamily: 'var(--main-font)' }}
                        >
                            Нэвтрэх
                        </button>
                        <button
                            style={{ padding: '0.45rem 1.2rem', borderRadius: '9999px', background: AMBER, color: 'white', fontWeight: 'bold', fontSize: '13px', border: 'none', cursor: 'pointer', fontFamily: 'var(--main-font)', boxShadow: `0 2px 8px ${AMBER}55` }}
                        >
                            Бүртгүүлэх
                        </button>
                    </div>
                </div>

                {mobileOpen && (
                    <div style={{ padding: '0 1rem 1rem', background: 'white', borderTop: `1px solid ${AMBER}33` }}>
                        {navItems.map((item) => (
                            <button key={item.id} onClick={() => scrollTo(item.id)} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '0.6rem 0', background: 'none', border: 'none', color: '#3a3a2a', cursor: 'pointer', fontFamily: 'var(--main-font)', fontSize: '14px' }}>
                                {item.label}
                            </button>
                        ))}
                        <button onClick={onLoginClick} style={{ marginTop: '0.5rem', width: '100%', padding: '0.6rem', borderRadius: '9999px', background: AMBER, color: 'white', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontFamily: 'var(--main-font)' }}>
                            Нэвтрэх
                        </button>
                    </div>
                )}
            </nav>
        </header>
    );
}

function HoverNavBtn({ label, onClick }) {
    const [hovered, setHovered] = useState(false);
    return (
        <button onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
            style={{ background: 'none', border: 'none', color: hovered ? AMBER : '#3a3a2a', fontSize: '14px', cursor: 'pointer', fontFamily: 'var(--main-font)', padding: 0, transition: 'color 0.2s', fontWeight: hovered ? 600 : 400 }}>
            {label}
        </button>
    );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function HeroSection({ onLoginClick }) {
    const [slideIndex, setSlideIndex] = useState(0);
    const [displayIndex, setDisplayIndex] = useState(0);
    const [textVisible, setTextVisible] = useState(true);

    const goToSlide = (next) => {
        setTextVisible(false);
        setTimeout(() => { setSlideIndex(next); setDisplayIndex(next); setTextVisible(true); }, 350);
    };

    useEffect(() => {
        const t = setInterval(() => {
            setSlideIndex((prev) => {
                const next = (prev + 1) % carouselSlides.length;
                setTextVisible(false);
                setTimeout(() => { setDisplayIndex(next); setTextVisible(true); }, 350);
                return next;
            });
        }, 5000);
        return () => clearInterval(t);
    }, []);

    return (
        <section id='hero' style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
            {carouselSlides.map((slide, i) => (
                <div key={i} style={{
                    position: 'absolute', inset: 0, opacity: i === slideIndex ? 1 : 0, transition: 'opacity 1s ease',
                    backgroundImage: `linear-gradient(90deg, rgba(10,10,8,0.80) 0%, rgba(10,10,8,0.58) 35%, rgba(10,10,8,0.15) 65%, transparent 100%), url("${slide.img}")`,
                    backgroundSize: 'cover', backgroundPosition: 'center',
                }} />
            ))}

            <div style={{ position: 'relative', maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', width: '100%' }}>
                <div style={{ maxWidth: '672px', color: 'white', paddingTop: '2rem', paddingBottom: '4rem', opacity: textVisible ? 1 : 0, transition: 'opacity 0.35s ease' }}>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: AMBER_GLOW, marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--main-font)' }}>
                        {carouselSlides[displayIndex].category}
                    </div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '1.5rem', whiteSpace: 'pre-line', fontFamily: 'var(--main-font)', color: AMBER_GLOW }}>
                        {carouselSlides[displayIndex].title}
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', maxWidth: '540px', marginBottom: '2rem', lineHeight: 1.85, fontFamily: 'var(--main-font)' }}>
                        {carouselSlides[displayIndex].desc}
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                        <button onClick={onLoginClick} style={{ padding: '0.9rem 2rem', borderRadius: '9999px', background: AMBER, color: 'white', fontWeight: 'bold', border: 'none', cursor: 'pointer', boxShadow: `0 4px 18px ${AMBER}66`, fontFamily: 'var(--main-font)', fontSize: '14px' }}>
                            Нэвтрэх
                        </button>
                        <button onClick={() => document.getElementById('direction')?.scrollIntoView({ behavior: 'smooth' })} style={{ padding: '0.9rem 2rem', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(4px)', color: 'white', fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--main-font)', fontSize: '14px' }}>
                            Дэлгэрэнгүй
                        </button>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem', maxWidth: '800px' }}>
                        {carouselSlides.map((slide, i) => (
                            <button key={i} onClick={() => goToSlide(i)} style={{ textAlign: 'left', paddingTop: '0.75rem', background: 'none', border: 'none', borderTop: `2px solid ${i === slideIndex ? AMBER_GLOW : 'rgba(255,255,255,0.25)'}`, color: i === slideIndex ? 'white' : 'rgba(255,255,255,0.55)', cursor: 'pointer', fontFamily: 'var(--main-font)', fontSize: '12px', fontWeight: 500, transition: 'all 0.3s' }}>
                                {slide.category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── DIRECTION SECTION ────────────────────────────────────────────────────────

function DirectionSection() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <section id='direction' style={{ padding: '6rem 0', background: CREAM, width: '100%' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
                <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.25em', color: `${AMBER}99`, marginBottom: '1rem', fontFamily: 'var(--main-font)' }}>
                    ШИЙДЛҮҮД
                </div>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'bold', color: DARK, marginBottom: '2.5rem', fontFamily: 'var(--main-font)' }}>
                    Үйл ажиллагааны чиглэл
                </h2>

                <div style={{ display: 'inline-flex', borderRadius: '9999px', background: `${AMBER}18`, padding: '0.25rem', marginBottom: '2.5rem' }}>
                    <button style={{ padding: '0.5rem 1.25rem', borderRadius: '9999px', background: AMBER, color: 'white', fontWeight: 600, fontSize: '13px', border: 'none', cursor: 'pointer', fontFamily: 'var(--main-font)' }}>
                        Дэлгэрэнгүй
                    </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'center' }}>
                    <div style={{ background: 'white', borderRadius: '1rem', border: `1px solid ${AMBER}28`, boxShadow: '0 1px 6px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
                        {directionTabs.map((item) => (
                            <button key={item.id} onClick={() => setActiveTab(item.id)} style={{ width: '100%', textAlign: 'left', padding: '1.4rem 2rem', background: activeTab === item.id ? `${AMBER}0d` : 'white', border: 'none', borderBottom: `1px solid ${AMBER}22`, borderLeft: `3px solid ${activeTab === item.id ? AMBER : 'transparent'}`, cursor: 'pointer', display: 'block', transition: 'all 0.2s' }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <span style={{ fontSize: '12px', fontWeight: 600, color: activeTab === item.id ? AMBER : '#b0a888', minWidth: '2rem', fontFamily: 'var(--main-font)', paddingTop: '2px' }}>
                                        {String(item.id).padStart(2, '0')}
                                    </span>
                                    <div>
                                        <div style={{ fontWeight: 600, color: DARK, fontSize: '15px', fontFamily: 'var(--main-font)' }}>
                                            {item.title}
                                        </div>
                                        {activeTab === item.id && (
                                            <p style={{ color: '#6c776f', marginTop: '0.5rem', fontSize: '13px', lineHeight: 1.75, fontFamily: 'var(--main-font)' }}>
                                                {item.desc}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    <div style={{ background: 'white', borderRadius: '1.5rem', boxShadow: `0 10px 30px ${AMBER}22`, border: `1px solid ${AMBER}28`, padding: '1rem' }}>
                        <img
                            src={directionTabs.find(t => t.id === activeTab)?.img}
                            alt='direction'
                            style={{ width: '100%', height: '360px', objectFit: 'cover', borderRadius: '0.75rem', display: 'block', transition: 'opacity 0.3s' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── SYSTEM SECTION ───────────────────────────────────────────────────────────

function SystemSection() {
    const navigate = useNavigate();
    const { setSystem } = useContext(MainContext);

    const openPortal = () => {
        localStorage.setItem('system', 'portal');
        setSystem('portal');
        navigate('/');
    };

    return (
        <section id='system' style={{ padding: '6rem 0', background: 'white', position: 'relative', overflow: 'hidden' }}>
            {/* Amber top accent */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${AMBER}, ${AMBER_GLOW}, ${AMBER})` }} />

            <div style={{ position: 'relative', maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                        <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.25em', color: `${AMBER}99`, marginBottom: '0.75rem', fontFamily: 'var(--main-font)' }}>
                            ХОЛБОГДОХ СИСТЕМҮҮД
                        </div>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'bold', fontFamily: 'var(--main-font)', margin: 0, color: DARK }}>
                            Үндсэн функцууд
                        </h2>
                    </div>
                    <button onClick={openPortal} style={{ padding: '0.65rem 1.4rem', borderRadius: '9999px', border: 'none', background: AMBER, color: 'white', fontSize: '13px', fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--main-font)', display: 'flex', alignItems: 'center', gap: '0.4rem', boxShadow: `0 3px 12px ${AMBER}50` }}>
                        Системд нэвтрэх →
                    </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                    {coreSystems.map((item, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.25rem', background: CREAM, borderRadius: '0.75rem', border: `1px solid ${AMBER}28` }}>
                            <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.5rem', background: `${AMBER}18`, border: `1px solid ${AMBER}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
                                {item.emoji}
                            </div>
                            <div>
                                <h3 style={{ fontWeight: 600, fontSize: '15px', marginBottom: '0.4rem', fontFamily: 'var(--main-font)', color: DARK }}>
                                    {item.title}
                                </h3>
                                <p style={{ color: '#6c7a6e', fontSize: '13px', lineHeight: 1.75, fontFamily: 'var(--main-font)', margin: 0 }}>
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ borderRadius: '1rem', overflow: 'hidden', position: 'relative' }}>
                    <img
                        src='https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop'
                        alt='Agro Mongolia system'
                        style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65), transparent 60%)' }} />
                    <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', color: 'white' }}>
                        <div style={{ fontWeight: 'bold', fontSize: '18px', fontFamily: 'var(--main-font)' }}>
                            Хөдөө аж ахуйн үйлдвэрлэгчдийн нэгдсэн систем
                        </div>
                        <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)', fontFamily: 'var(--main-font)', marginTop: '0.25rem' }}>
                            💡 Agro Mongolia – Хөдөө аж ахуйн салбарт ажиллагсдад зориулагдсан нэгдсэн систем
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── CONTACT / CTA SECTION ────────────────────────────────────────────────────

function ContactSection({ onLoginClick }) {
    return (
        <section id='contact' style={{ padding: '6rem 2rem', background: CREAM, borderTop: `1px solid ${AMBER}28` }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

                {/* CTA banner */}
                <div style={{ background: 'white', border: `1px solid ${AMBER}44`, borderRadius: '1.5rem', padding: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', marginBottom: '4rem' }}>
                    <div>
                        <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: AMBER_GLOW, marginBottom: '0.75rem', fontFamily: 'var(--main-font)' }}>
                            AGRO MONGOLIA
                        </div>
                        <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: AMBER, fontFamily: 'var(--main-font)', margin: 0, lineHeight: 1.15 }}>
                            Бидэнтэй нэгдэж байгаарай
                        </h2>
                        <p style={{ color: 'black', marginTop: '0.75rem', fontFamily: 'var(--main-font)', fontSize: '14px', lineHeight: 1.7, maxWidth: '420px' }}>
                            Өнөөдрөөс эхлэн хөдөө аж ахуйгаа ухаалгаар удирдаарай.
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                        <input type='email' placeholder='И-мэйл хаягаа оруулна уу' style={{ padding: '0.85rem 1.25rem', borderRadius: '0.75rem', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.18)', outline: 'none', fontFamily: 'var(--main-font)', fontSize: '14px', minWidth: '220px' }} />
                        <button onClick={onLoginClick} style={{ padding: '0.85rem 1.75rem', borderRadius: '0.75rem', background: AMBER, color: 'white', fontWeight: 700, border: 'none', cursor: 'pointer', fontFamily: 'var(--main-font)', fontSize: '14px', whiteSpace: 'nowrap', boxShadow: `0 4px 14px ${AMBER}55` }}>
                            Нэвтрэх →
                        </button>
                    </div>
                </div>

                {/* Contact info cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                    {[
                        { icon: '📍', label: 'Хаяг', value: 'Сүхбаатар дүүрэг, 1-р хороо,\nЦентрал тауэр, 333 тоот' },
                        { icon: '📞', label: 'Утас', value: '+976 70113344\n+976 99063344' },
                        { icon: '✉️', label: 'И-мэйл', value: 'support@agromongolia.mn' },
                        { icon: '📱', label: 'Апп татах', value: 'App Store · Google Play' },
                    ].map((item) => (
                        <div key={item.label} style={{ background: 'white', borderRadius: '1rem', padding: '1.5rem', border: `1px solid ${AMBER}28`, boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                            <div style={{ fontSize: '22px', marginBottom: '0.75rem' }}>{item.icon}</div>
                            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', color: AMBER, fontWeight: 600, fontFamily: 'var(--main-font)', marginBottom: '0.4rem' }}>
                                {item.label}
                            </div>
                            <div style={{ color: '#4a4030', fontSize: '13px', lineHeight: 1.75, fontFamily: 'var(--main-font)', whiteSpace: 'pre-line' }}>
                                {item.value}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

function Footer() {
    return (
        <footer style={{ backgroundColor: DARK, color: 'white', paddingTop: '4rem', paddingBottom: '2rem' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>

                {/* Main grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
                    <div>
                        <div style={{ fontSize: '20px', fontWeight: 800, color: AMBER_GLOW, fontFamily: 'var(--main-font)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                            Agro Mongolia
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: 1.8, fontFamily: 'var(--main-font)', maxWidth: '260px' }}>
                            Монголын хөдөө аж ахуйн үйлдвэрлэгчдийн нэгдсэн дижитал платформ.
                        </p>
                        <div style={{ display: 'flex', gap: '0.6rem', marginTop: '1.5rem' }}>
                            {['App Store', 'Google Play'].map((s) => (
                                <div key={s} style={{ padding: '0.45rem 0.9rem', border: `1px solid ${AMBER}55`, borderRadius: '0.5rem', fontSize: '12px', color: AMBER_GLOW, cursor: 'pointer', fontFamily: 'var(--main-font)' }}>
                                    {s}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 700, marginBottom: '1.25rem', fontFamily: 'var(--main-font)', fontSize: '14px', color: 'white', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Үйлчилгээ</h4>
                        {['Газар тариалан', 'Мал аж ахуй', 'Хүлэмжийн аж ахуй', 'Зарын платформ'].map((l) => (
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <a key={l} href='#' style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: 'var(--main-font)', textDecoration: 'none', marginBottom: '0.6rem', lineHeight: 1.6 }}>{l}</a>
                        ))}
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 700, marginBottom: '1.25rem', fontFamily: 'var(--main-font)', fontSize: '14px', color: 'white', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Компани</h4>
                        {['Бидний тухай', 'Мэдээ мэдээлэл', 'Ажлын байр', 'Нөхөрлөл'].map((l) => (
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <a key={l} href='#' style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: 'var(--main-font)', textDecoration: 'none', marginBottom: '0.6rem', lineHeight: 1.6 }}>{l}</a>
                        ))}
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 700, marginBottom: '1.25rem', fontFamily: 'var(--main-font)', fontSize: '14px', color: 'white', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Холбоо барих</h4>
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: 1.9, fontFamily: 'var(--main-font)' }}>
                            support@agromongolia.mn<br />+976 70113344<br />+976 99063344<br />Централ тауэр, 333 тоот
                        </p>
                    </div>
                </div>

                {/* Bottom bar */}
                <div style={{ borderTop: `1px solid rgba(255,255,255,0.08)`, paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', fontSize: '12px', color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--main-font)' }}>
                    <div>© {new Date().getFullYear()} Agro Mongolia LLC. Бүх эрх хуулиар хамгаалагдсан.</div>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href='#' style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>Үйлчилгээний нөхцөл</a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href='#' style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>Нууцлалын бодлого</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

function LandingPage({ onLoginClick }) {
    return (
        <div style={{ background: CREAM, minHeight: '100vh' }}>
            <Header onLoginClick={onLoginClick} />
            <main style={{ paddingTop: '6rem' }}>
                <HeroSection onLoginClick={onLoginClick} />
                <DirectionSection />
                <SystemSection />
                <ContactSection onLoginClick={onLoginClick} />
            </main>
            <Footer />
        </div>
    );
}

export default LandingPage;
