export default function Home() {
  return (
    <main>
      {/* HEADER */}
      <header className="header">
        <div className="logo-area">
          <img
            src="/company-profile/LOGO-YAYASAN.png"
            alt="LOGO-YAYASAN.png"
            width={70}
            height={70}
          />

          <div>
            <h2>SMK CITRA</h2>
            <p>Yayasan Pendidikan</p>
          </div>
        </div>

        <nav>
          <a href="#beranda">Beranda</a>
          <a href="#profil">Profil</a>
          <a href="#program">Program</a>
          <a href="#kontak">Kontak</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero" id="beranda">
        <div className="hero-text">
          <p className="welcome">SELAMAT DATANG DI</p>

          <h1>
            Yayasan
            <span> At-Taqwa </span>
            Kemiri Jaya
          </h1>

          <p className="description">
            Membangun generasi yang berilmu, berkarakter, berakhlak,
            kreatif, dan berprestasi untuk masa depan yang lebih baik.
          </p>

          <div className="buttons">
            <a href="#profil" className="button-primary">
              Lihat Profil
            </a>

            <a href="#kontak" className="button-secondary">
              Hubungi Kami
            </a>
          </div>
        </div>

        <div className="hero-logo">
          <img
            src="/company-profile/LOGO-YAYASAN.png"
            alt="Logo Yayasan At-Taqwa Kemiri Jaya"
            width={350}
            height={350}
          />
        </div>
      </section>
  {/* PROFIL */}
<section className="section white" id="profil">

  <p className="section-title">TENTANG KAMI</p>

  <h2>Profil Yayasan</h2>

  <p className="section-description">
    Yayasan At-Taqwa Kemiri Jaya merupakan lembaga pendidikan
    yang berkomitmen memberikan pendidikan terbaik kepada
    peserta didik. Kami mengutamakan ilmu pengetahuan,
    pembentukan karakter, kedisiplinan, dan akhlak yang baik.
  </p>

  <div className="cards">

    {/* PENDIDIKAN */}
    <div className="card">
      <img
        src="/company-profile/bugastin.jpg"
        alt="Kegiatan Pendidikan"
        width={400}
        height={200}
        className="card-image"
      />

      <div className="card-content">
        <h3>Agustin Wijayanti, S.H.,MM</h3>

        <p>
          Ketua BPH
        </p>
      </div>

    </div>


    {/* PRESTASI */}
    <div className="card">
      <img
        src="/company-profile/pahaji.jpg"
        alt="Prestasi Siswa"
        width={400}
        height={200}
        className="card-image"
      />

      <div className="card-content">
      <h3>Drs. H. Nasan MM & Hj. Mutia, S,Pd, M.M</h3>
        <p>
          Penasehat Yayasan YATKJ
        </p>
      </div>

    </div>

    {/* KARAKTER */}
    <div className="card">
      <img
        src="/company-profile/parikzi.jpg"
        alt="Pembentukan Karakter"
        width={400}
        height={200}
        className="card-image"
      />

      <div className="card-content">
        <h3>Dr. M. Rizki Darmaguna Hasan, S.Tr,M.Pd</h3>

        <p>
          Ketua YATKJ
        </p>
      </div>

    </div>

  </div>

</section>

      {/* VISI MISI */}
      <section className="visi-misi">
        <div className="visi">
          <p>01</p>
          <h2>Visi</h2>
          <span>
            Terwujudnya Sekolah Kejuruan yang Religius, Disiplin dan Terampil Dalam Menyongsong Generasi Emas di tahun 2045.
          </span>
        </div>

        <div className="misi">
          <p>02</p>
          <h2>Misi</h2>
          <span>
            • Mewujudkan insan yang taat beribadah, cinta kepada kitab suci, dan pandai dalam dakwah keagamaan.

            •Mewujudkan peserta didik yang berperilaku baik, patuh, dan memiliki jiwa kepemimpinan.

            •Mewujudkan peserta didik yang ahli sesuai dengan kejuruannya, sinkronisasi kurikulum intrakurikuler dengan ekstrakurikuler, serta pengembangan kerja sama dengan dunia industri.
          </span>
        </div>
      </section>

      {/* PROGRAM */}
            {/* PROGRAM */}
      <section className="section" id="program">
        <p className="section-title">PROGRAM</p>

        <h2>Kegiatan Sekolah</h2>

        <div className="program-list">

          {/* KEGIATAN BELAJAR */}
          <div className="program-card">
            <img
              src="/company-profile/kegiatan.jpg"
              alt="Kegiatan Belajar"
              width={400}
              height={220}
              className="program-image"
            />

            <div className="program-content">
              <span>01</span>
              <h3>Kegiatan Belajar</h3>
              <p>
                Kegiatan pembelajaran untuk meningkatkan pengetahuan
                dan keterampilan siswa.
              </p>
            </div>
          </div>

          {/* EKSTRAKURIKULER */}
          <div className="program-card">
            <img
              src="/company-profile/futsal.jpg"
              alt="Kegiatan Ekstrakurikuler"
              width={400}
              height={220}
              className="program-image"
            />

            <div className="program-content">
              <span>02</span>
              <h3>Ekstrakurikuler</h3>
              <p>
                Berbagai kegiatan untuk mengembangkan bakat,
                minat, dan kreativitas peserta didik.
              </p>
            </div>
          </div>

          {/* KEGIATAN KEAGAMAAN */}
          <div className="program-card">
            <img
              src="/company-profile/keagmaan.jpg"
              alt="Kegiatan Keagamaan"
              width={400}
              height={220}
              className="program-image"
            />

            <div className="program-content">
              <span>03</span>
              <h3>Kegiatan Keagamaan</h3>
              <p>
                Kegiatan yang mendukung pembentukan karakter dan
                akhlak peserta didik.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer id="kontak">
        <div className="footer-content">

          <div className="footer-brand">
            <img
              src="/LOGO-YAYASAN.png"
              alt="Citra Negara"
              width={90}
              height={90}
            />

            <h2>AT-TAQWA KEMIRI JAYA</h2>

            <p>
              Membangun generasi berilmu, berkarakter,
              berakhlak, dan berprestasi.
            </p>
          </div>

          <div>
            <h3>Alamat Sekolah</h3>
            <p>
              Jl. Kemiri  Jaya No.99
              <br />
              Depok, Jawa Barat
              <br />
              Indonesia
              <br />
              Kode Pos: 16421
            </p>
          </div>

          <div>
            <h3>Kontak</h3>
            <p>Email:</p>
            <a href="mailto:email@sekolah.sch.id">
              email@citranegara.sch.id
            </a>

            <p className="phone">Telepon: (021) 77201025 </p>
          </div>

          <div>
            <h3>Media Sosial</h3>

            <a href="#" className="social">
              Facebook
            </a>

            <a href="#" className="social">
              TikTok
            </a>

            <a href="#" className="social">
              Instagram
            </a>
          </div>

        </div>

        <div className="copyright">
          © 2026 Citra Negara. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}