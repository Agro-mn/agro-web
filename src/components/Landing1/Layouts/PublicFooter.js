export default function PublicFooter() {
    return (
        <footer style={{ backgroundColor: "#0b3b2e", color: "white", paddingTop: "3.5rem", paddingBottom: "2rem" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2.5rem", marginBottom: "3rem" }}>
                    {/* Холбоо барих */}
                    <div>
                        <h3 style={{ fontWeight: "bold", marginBottom: "1rem", fontFamily: "var(--main-font)", fontSize: "15px" }}>
                            Холбоо барих
                        </h3>
                        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px", lineHeight: 1.75, fontFamily: "var(--main-font)" }}>
                            support@agromongolia.mn
                        </p>
                        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px", lineHeight: 1.75, fontFamily: "var(--main-font)" }}>
                            +976 70113344
                        </p>
                        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px", lineHeight: 1.75, fontFamily: "var(--main-font)" }}>
                            +976 99063344
                        </p>
                    </div>

                    {/* Хаяг */}
                    <div>
                        <h3 style={{ fontWeight: "bold", marginBottom: "1rem", fontFamily: "var(--main-font)", fontSize: "15px" }}>
                            Хаяг
                        </h3>
                        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px", lineHeight: 1.75, fontFamily: "var(--main-font)" }}>
                            Сүхбаатар дүүрэг,<br />
                            1-р хороо,<br />
                            Централ тауэр, 333 тоот
                        </p>
                    </div>

                    {/* Тусламж */}
                    <div>
                        <h3 style={{ fontWeight: "bold", marginBottom: "1rem", fontFamily: "var(--main-font)", fontSize: "15px" }}>
                            Тусламж
                        </h3>
                        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px", lineHeight: 1.75, fontFamily: "var(--main-font)", cursor: "pointer" }}>
                            Санал хүсэлт илгээх
                        </p>
                        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px", lineHeight: 1.75, fontFamily: "var(--main-font)", cursor: "pointer" }}>
                            Заавар видео
                        </p>
                        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px", lineHeight: 1.75, fontFamily: "var(--main-font)", cursor: "pointer" }}>
                            Түгээмэл асуулт
                        </p>
                    </div>

                    {/* Апп татах */}
                    <div>
                        <h3 style={{ fontWeight: "bold", marginBottom: "1rem", fontFamily: "var(--main-font)", fontSize: "15px" }}>
                            Апп татах
                        </h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                            <div style={{
                                display: "inline-block", padding: "0.5rem 1rem",
                                border: "1px solid rgba(255,255,255,0.25)",
                                borderRadius: "0.5rem", fontSize: "13px",
                                color: "white", cursor: "pointer",
                                fontFamily: "var(--main-font)",
                            }}>
                                App Store
                            </div>
                            <div style={{
                                display: "inline-block", padding: "0.5rem 1rem",
                                border: "1px solid rgba(255,255,255,0.25)",
                                borderRadius: "0.5rem", fontSize: "13px",
                                color: "white", cursor: "pointer",
                                fontFamily: "var(--main-font)",
                            }}>
                                Google Play
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div style={{
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    paddingTop: "1.5rem",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "1rem",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.55)",
                    fontFamily: "var(--main-font)",
                }}>
                    <div>© {new Date().getFullYear()} Agro Mongolia LLC. All Rights Reserved.</div>
                    <div style={{ display: "flex", gap: "1.25rem" }}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Үйлчилгээний нөхцөл</a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Нууцлалын бодлого</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
