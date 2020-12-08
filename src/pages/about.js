import React from 'react';
import Typography from '@material-ui/core/Typography';

const About = () => {
  return (
    <React.Fragment>
      <Typography gutterBottom variant="h5" component="h2">
        Tentang Kami
      </Typography>
      <Typography variant="body2" component="p">
        Website ini dibangun oleh Adinugraha, web developer tunanetra yang telah
        mengikuti pelatihan Javascript di Yayasan Mitra Netra. Project ini
        dibuat untuk memudahkan pengguna tunanetra untuk mencari dan mengajukan
        permintaan buku elektronik versi EPUB dengan mudah.
      </Typography>
      <Typography variant="body2" component="p">
        Dengan kumpulan data yang disediakan, Pihak perpustakaan penyedia EPUB
        juga dapat menggunakan website ini sebagai acuan dalam proses
        produksinya. Setiap pengguna dapat melihat daftar buku apa saja yang
        telah diminta dan mengurutkan berdasarkan jumlah permintaan dan waktu
        permintaan.
      </Typography>
      <Typography variant="body2" component="p">
        Secara teknis, website ini adalah aplikasi yang terbagimenjadi 2
        lapisan:
        <ul>
          <li>
            Back-end yang dibangun dengan Node JS, GraphQl untuk servernya, dan
            PostgreSQL sebagai Databasenya.
          </li>
          <li>Front-end yang dibangun dengan React dan Material UI design</li>
        </ul>
      </Typography>
    </React.Fragment>
  );
};
export default About;
