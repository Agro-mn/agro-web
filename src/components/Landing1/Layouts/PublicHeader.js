import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/img/agro_logo_gradient.png";

export default function PublicHeader({ onLoginClick }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
    };

    const navItems = [
        { label: "Нүүр", id: "home" },
        { label: "Чиглэл", id: "direction" },
        { label: "Систем", id: "system" },
        { label: "Хамтрагч", id: "company" },
        { label: "Холбоо барих", id: "contact" },
    ];

    return (
        <header style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 50 }}>
            {/* Top bar */}
            <div style={{ backgroundColor: "white", borderBottom: "1px solid #e7eadf" }}>
                <div style={{
                    maxWidth: "1280px", margin: "0 auto", padding: "0 2rem",
                    height: "2rem", display: "flex", alignItems: "center", justifyContent: "space-between"
                }}>
                    <div style={{ display: "flex", gap: "1.5rem", fontSize: "11px", color: "#5b6a61" }}>
                        <span>Газар тариалан</span>
                        <span>Мал аж ахуй</span>
                        <span>Эрчимжсэн Мал аж ахуй</span>
                        <span>Зарын нэгдсэн платформ</span>
                    </div>
                    <div style={{ fontSize: "11px", color: "#5b6a61" }}>Agro Mongolia</div>
                </div>
            </div>

            {/* Main nav */}
            <nav style={{
                backgroundColor: "rgba(11, 59, 46, 0.97)",
                backdropFilter: "blur(12px)",
                borderBottom: "1px solid rgba(255,255,255,0.1)"
            }}>
                <div style={{
                    maxWidth: "1280px", margin: "0 auto", padding: "0 2rem",
                    height: "4rem", display: "flex", alignItems: "center", justifyContent: "space-between"
                }}>
                    {/* Logo + Nav links */}
                    <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
                        <img
                            src={logo}
                            alt="logo"
                            style={{ height: "1.75rem", cursor: "pointer" }}
                            onClick={() => navigate("/")}
                        />
                        <div style={{ display: "flex", gap: "1.75rem" }}>
                            {navItems.map((item) => (
                                <NavButton key={item.id} label={item.label} onClick={() => scrollTo(item.id)} />
                            ))}
                        </div>
                    </div>

                    {/* Auth buttons */}
                    <div style={{ display: "flex", gap: "0.75rem" }}>
                        <button
                            onClick={onLoginClick}
                            style={{
                                padding: "0.45rem 1.1rem",
                                borderRadius: "9999px",
                                border: "1px solid rgba(255,255,255,0.25)",
                                background: "rgba(255,255,255,0.05)",
                                color: "white",
                                fontSize: "13px",
                                cursor: "pointer",
                                fontFamily: "var(--main-font)",
                            }}
                        >
                            Нэвтрэх
                        </button>
                        <button
                            style={{
                                padding: "0.45rem 1.1rem",
                                borderRadius: "9999px",
                                background: "#f7a91b",
                                color: "#173126",
                                fontWeight: "bold",
                                fontSize: "13px",
                                border: "none",
                                cursor: "pointer",
                                fontFamily: "var(--main-font)",
                            }}
                        >
                            Бүртгүүлэх
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div style={{
                        padding: "0 1rem 1rem",
                        background: "#0b3b2e",
                        borderTop: "1px solid rgba(255,255,255,0.1)"
                    }}>
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollTo(item.id)}
                                style={{
                                    display: "block", width: "100%", textAlign: "left",
                                    padding: "0.6rem 0", background: "none", border: "none",
                                    color: "rgba(255,255,255,0.9)", cursor: "pointer",
                                    fontFamily: "var(--main-font)", fontSize: "14px",
                                }}
                            >
                                {item.label}
                            </button>
                        ))}
                        <button
                            onClick={onLoginClick}
                            style={{
                                marginTop: "0.5rem", width: "100%", padding: "0.6rem",
                                borderRadius: "9999px", background: "#f7a91b",
                                color: "#173126", fontWeight: "bold", border: "none",
                                cursor: "pointer", fontFamily: "var(--main-font)",
                            }}
                        >
                            Нэвтрэх
                        </button>
                    </div>
                )}
            </nav>
        </header>
    );
}

function NavButton({ label, onClick }) {
    const [hovered, setHovered] = useState(false);
    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: "none", border: "none",
                color: hovered ? "#f7a91b" : "white",
                fontSize: "14px", cursor: "pointer",
                fontFamily: "var(--main-font)", padding: 0,
                transition: "color 0.2s",
            }}
        >
            {label}
        </button>
    );
}
