import { useState, useEffect } from 'react';
import aut1 from '../../assets/img/james-baltz-_pBBkarmFTs-unsplash.jpg';

const carouselSlides = [
    {
        img: aut1,
        category: "Газар тариалан",
        title: "Тариаланг\nтаны гарт",
        desc: "Хөрс боловсруулалтаас ургац хураалт хүртэл зардлаа хар, гүйцэтгэлээ хяна.",
    },
    {
        img: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=1600&auto=format&fit=crop",
        category: "Мал аж ахуй",
        title: "Мал аж ахуйгаа\nухаалгаар бүртгэ",
        desc: "Мал бүрээр тэжээл, вакцин, үржил, борлуулалтын зардлыг хөтлөн, ашиг шимийг хяна.",
    },
    {
        img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop",
        category: "Хүлэмжийн аж ахуй",
        title: "Хүлэмжийн\nноогоо хяна",
        desc: "Сорт бүрийн зардлыг ялган бүртгэж, нийт өртөг болон ургацын ашигт ажиллагааг гарга.",
    },
    {
        img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1600&auto=format&fit=crop",
        category: "Зарын платформ",
        title: "Бүтээгдэхүүнээ\nшууд зар",
        desc: "Үр, бордоо, техник, мал, газар зэрэг бүх төрлийн зарыг нэг дороос байршуул.",
    },
];

const HomeImage = ({ themeData }) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [displayIndex, setDisplayIndex] = useState(0);
    const [textVisible, setTextVisible] = useState(true);

    const goToSlide = (next) => {
        setTextVisible(false);
        setTimeout(() => {
            setSlideIndex(next);
            setDisplayIndex(next);
            setTextVisible(true);
        }, 350);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setSlideIndex((prev) => {
                const next = (prev + 1) % carouselSlides.length;
                setTextVisible(false);
                setTimeout(() => {
                    setDisplayIndex(next);
                    setTextVisible(true);
                }, 350);
                return next;
            });
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const openLogin = () => {
        document.dispatchEvent(new CustomEvent('openLoginModal'));
    };

    return (
        <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", width: "100vw" }}>
            {/* Background slides */}
            {carouselSlides.map((slide, i) => (
                <div
                    key={i}
                    style={{
                        position: "absolute", inset: 0,
                        opacity: i === slideIndex ? 1 : 0,
                        transition: "opacity 1s ease",
                        backgroundImage: `
                            linear-gradient(90deg, rgba(7,52,41,0.88) 0%, rgba(7,52,41,0.72) 30%, rgba(7,52,41,0.20) 60%, rgba(7,52,41,0.06) 100%),
                            url("${typeof slide.img === 'string' ? slide.img : slide.img}")
                        `,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
            ))}

            {/* Content */}
            <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", padding: "0 2rem", width: "100%" }}>
                <div style={{
                    maxWidth: "672px", color: "white",
                    paddingTop: "2rem", paddingBottom: "4rem",
                    opacity: textVisible ? 1 : 0,
                    transition: "opacity 0.35s ease",
                }}>
                    <div style={{ fontSize: "12px", fontWeight: 600, color: "#d9e6d5", marginBottom: "1rem", letterSpacing: "0.05em", fontFamily: "var(--main-font)" }}>
                        {carouselSlides[displayIndex].category}
                    </div>

                    <h1 style={{
                        fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                        fontWeight: 800,
                        lineHeight: 1.05,
                        letterSpacing: "-0.02em",
                        marginBottom: "1.5rem",
                        whiteSpace: "pre-line",
                        fontFamily: "var(--main-font)",
                    }}>
                        {carouselSlides[displayIndex].title}
                    </h1>

                    <p style={{
                        fontSize: "1.1rem", color: "#dbe7df",
                        maxWidth: "576px", marginBottom: "2rem",
                        lineHeight: 1.85, fontFamily: "var(--main-font)",
                    }}>
                        {carouselSlides[displayIndex].desc}
                    </p>

                    {/* CTA buttons */}
                    <div style={{ display: "flex", gap: "1rem", marginBottom: "3rem", flexWrap: "wrap" }}>
                        <button
                            onClick={openLogin}
                            style={{
                                padding: "0.9rem 2rem", borderRadius: "9999px",
                                background: "#f7a91b", color: "#173126",
                                fontWeight: "bold", border: "none", cursor: "pointer",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                                fontFamily: "var(--main-font)", fontSize: "14px",
                            }}
                        >
                            Нэвтрэх
                        </button>
                        <button
                            onClick={() => document.getElementById("direction")?.scrollIntoView({ behavior: "smooth" })}
                            style={{
                                padding: "0.9rem 2rem", borderRadius: "9999px",
                                border: "1px solid rgba(255,255,255,0.3)",
                                background: "rgba(255,255,255,0.1)",
                                backdropFilter: "blur(4px)",
                                color: "white", fontWeight: 600,
                                cursor: "pointer",
                                fontFamily: "var(--main-font)", fontSize: "14px",
                            }}
                        >
                            Дэлгэрэнгүй
                        </button>
                    </div>

                    {/* Category tabs */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem", maxWidth: "800px" }}>
                        {carouselSlides.map((slide, i) => (
                            <button
                                key={i}
                                onClick={() => goToSlide(i)}
                                style={{
                                    textAlign: "left",
                                    paddingTop: "0.75rem",
                                    background: "none", border: "none",
                                    borderTop: `2px solid ${i === slideIndex ? "#f7a91b" : "rgba(255,255,255,0.2)"}`,
                                    color: i === slideIndex ? "white" : "rgba(255,255,255,0.55)",
                                    cursor: "pointer",
                                    fontFamily: "var(--main-font)", fontSize: "12px", fontWeight: 500,
                                    transition: "all 0.3s",
                                }}
                            >
                                {slide.category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeImage;
