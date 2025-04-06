// Fungsi untuk mendapatkan parameter dari URL
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
  
  // Fungsi untuk menormalkan teks: menggabungkan spasi dan menghilangkan baris baru
  function normalizeText(text) {
    return text.replace(/\s+/g, ' ').trim();
  }
  
  // Kamus terjemahan dengan parafrase sopan untuk undangan bapak/ibu
  const translations = {
    // Intro
    "Welcome to Our Wedding Luncheon Invitation": "Selamat Datang di Undangan Makan Siang Pernikahan Kami",
    "We are delighted to have you here!": "Kami sangat bersyukur dan senang atas kehadiran Bapak/Ibu sekalian!",
    "Open Invitation": "Buka Undangan",
    
    // Header Invitation
    "Hello, our dearly friend!": "Assalamualaikum, \n Salam sejahtera, Bapak/Ibu yang kami hormati,",
    "We are happy to announce that we’re going to tie the knot soon!": "Dengan penuh sukacita, kami mengumumkan bahwa kami akan segera melangsungkan pernikahan.",
    "There’s no words can describe how happy we are if you could be a part of our special day!": "Tak terungkap betapa bahagianya kami jika Bapak/Ibu berkenan hadir di hari istimewa kami.",
    
    // Section Undangan
    // "Join us": "Mari Bergabung Bersama Kami",
    "FOR THE WEDDING LUNCH OF": "UNTUK ACARA MAKAN SIANG PERNIKAHAN",
    
    // Place
    "Place and date": "Tempat dan Tanggal",
    "Location and Time": "Lokasi dan Waktu",
    
    // Dresscode
    "Dress code for guests": "Pakaian untuk Tamu Undangan",
    "ANY KIND OF NEUTRAL PALETTE": "WARNA NETRAL APAPUN",
    "We’re gonna be so delightful if you choose some of our color palette references to wear to the wedding lunch!":
      "Kami akan sangat berterima kasih jika Bapak/Ibu memilih salah satu warna dari palet yang kami sarankan untuk acara makan siang pernikahan.",
    "Casual looks allow for the wedding lunch; you can wear what makes you comfortable!":
      "Acara ini bersifat santai, silakan mengenakan pakaian yang membuat Bapak/Ibu nyaman.",
    "WE CAN NOT WAIT TO SEE YOUR BEST LOOK!": "Kami sangat menantikan penampilan terbaik Bapak/Ibu!",
    
    // Itinerary
    "Itinerary": "Jadwal Acara",
    "11.00 - Entrance": "11.00 - Masuk",
    "11.05 - Welcome Speech": "11.05 - Sambutan",
    "11.10 - Blessing": "11.10 - Doa Restu",
    "11.15 - Lunch & Mingling": "11.15 - Makan Siang & Ramah Tamah",
    "12.30 - Bouquet toss & Mingling": "12.30 - Lempar Bunga & Ramah Tamah",
    "13.00 - End of Ceremony": "13.00 - Acara Selesai",
    
    // Gift
    "Wedding gift": "Hadiah Pernikahan",
    "Your presence will be the greatest gift for us when we are starting our journey as husband and wife, and we ask for nothing more. Having said that, if you still decide to indulge us, a wishing well has been set up via our bank account. Your generosity is not stipulated, and, yet, well appreciated.":
      "Kehadiran Bapak/Ibu adalah hadiah terindah bagi kami saat memulai perjalanan sebagai pasangan suami istri. Jika Bapak/Ibu berkenan memberikan hadiah, kami telah menyediakan rekening bank sebagai 'wishing well'. \n \n Segala bentuk kebaikan sangat kami hargai.",
    
    // Notes
    "It would be such an honor if you can attend our wedding luncheon.": "Merupakan kehormatan bagi kami jika Bapak/Ibu berkenan menghadiri acara makan siang pernikahan ini.",
    "With love,": "Dengan hormat,"
  };
  
  // Fungsi untuk mengganti teks elemen berdasarkan selector dengan mencocokkan teks yang sudah dinormalisasi
  function translateElements(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(elem => {
      const originalText = elem.innerText;
      const normalizedOriginal = normalizeText(originalText);
      for (const key in translations) {
        if (normalizeText(key) === normalizedOriginal) {
          elem.innerText = translations[key];
          break;
        }
      }
    });
  }
  
  // Fungsi untuk mengganti nilai atribut alt pada elemen gambar
  function translateAltAttributes() {
    document.querySelectorAll('[alt]').forEach(elem => {
      // Jika elemen adalah gambar dengan src "location-and-time.png", jangan ubah alt-nya
      if (elem.tagName.toLowerCase() === 'img' && elem.getAttribute('src') === 'location-and-time.png') {
        return;
      }
      const altText = elem.alt;
      const normalizedAlt = normalizeText(altText);
      for (const key in translations) {
        if (normalizeText(key) === normalizedAlt) {
          elem.alt = translations[key];
          break;
        }
      }
    });
  }
  
  // Fungsi utama untuk menerapkan terjemahan ke seluruh elemen yang diinginkan
  function applyTranslations() {
    // Bagian intro
    translateElements('#intro h1');
    translateElements('#intro p');
    translateElements('#intro button');
    
    // Bagian header invitation
    translateElements('.header h1');
    translateElements('.header p');
    
    // Bagian undangan (section)
    translateElements('.section h2');
    translateElements('.section p');
    translateElements('.section h3');
    
    // Bagian tempat
    translateElements('.place h1');
    
    // Bagian dresscode
    translateElements('.dresscode h5');
    translateElements('.dresscode p');
    
    // Bagian itinerary
    translateElements('.itinerary h6');
    translateElements('.itinerary p');
    
    // Bagian gift
    translateElements('.gift h7');
    translateElements('.gift p');
    
    // Bagian notes
    translateElements('.notes .note-text');
    translateElements('.notes .note-signature');
    
    // Terjemahkan juga atribut alt (kecuali untuk gambar yang dikecualikan)
    translateAltAttributes();
  }
  
  // Pengecekan parameter URL dan pemanggilan fungsi terjemahan
  document.addEventListener('DOMContentLoaded', function() {
    const lang = getParameterByName('lang');
    if (lang && lang.toLowerCase() === 'id') {
      applyTranslations();
    }
  });
  

document.addEventListener('scroll', function() {
    const section = document.querySelector('.section');
    const place = document.querySelector('.place');
    const dresscode = document.querySelector('.dresscode');
    const itinerary = document.querySelector('.itinerary');
    const gift = document.querySelector('.gift');
    const notes = document.querySelector('.notes');
    const sectionPosition = section.getBoundingClientRect().top;
    const placePosition = place.getBoundingClientRect().top;
    const dresscodePosition = dresscode.getBoundingClientRect().top;
    const itineraryPosition = itinerary.getBoundingClientRect().top;
    const giftPosition = gift.getBoundingClientRect().top;
    const notesPosition = notes.getBoundingClientRect().top;
    const placeHeight = place.getBoundingClientRect().height;
    const dresscodeHeight = dresscode.getBoundingClientRect().height;
    const itineraryHeight = itinerary.getBoundingClientRect().height;
    const giftHeight = gift.getBoundingClientRect().height;
    const notesHeight = notes.getBoundingClientRect().height;
    const screenPosition = window.innerHeight / 1.3;
    const flowers = document.querySelectorAll('.flower');
    const header = document.querySelector('.header');
    const placeFlowers = place.querySelectorAll('.flower.place-left-bottom, .flower.place-right-bottom');
    const dresscodeFlowers = dresscode.querySelectorAll('.flower.dresscode-left-bottom, .flower.dresscode-right-bottom');
    const itineraryFlowers = itinerary.querySelectorAll('.flower.itinerary-left-bottom, .flower.itinerary-right-bottom, .flower.itinerary-right-top');
    const giftFlowers = gift.querySelectorAll('.flower.gift-left-bottom, .flower.gift-right-bottom, .flower.gift-left-top');
    const notesFlowers = notes.querySelectorAll('.flower.notes-left-bottom, .flower.notes-right-bottom');

    if (sectionPosition < screenPosition) {
        section.classList.add('visible');
        flowers.forEach(flower => {
            flower.style.transition = 'opacity 1s';
            flower.style.opacity = '0';
        });
        header.style.opacity = '0';
    } else {
        flowers.forEach(flower => {
            flower.style.opacity = '1';
        });
        header.style.opacity = '1';
    }

    if (placePosition < window.innerHeight / 2 && placePosition > -placeHeight / 2) {
        placeFlowers.forEach(flower => {
            flower.style.transition = 'opacity 1s';
            flower.style.opacity = '1';
        });
        place.style.opacity = '1';
    } else {
        placeFlowers.forEach(flower => {
            flower.style.transition = 'opacity 1s';
            flower.style.opacity = '0';
        });
        place.style.opacity = '0';
    }

    if (dresscodePosition < window.innerHeight / 2 && dresscodePosition > -dresscodeHeight / 2) {
        dresscodeFlowers.forEach(flower => {
            flower.style.transition = 'opacity 1s';
            flower.style.opacity = '1';
        });
        dresscode.style.opacity = '1';
    } else {
        dresscodeFlowers.forEach(flower => {
            flower.style.transition = 'opacity 1s';
            flower.style.opacity = '0';
        });
        dresscode.style.opacity = '0';
    }

    if (itineraryPosition < window.innerHeight / 2 && itineraryPosition > -itineraryHeight / 2) {
        itineraryFlowers.forEach(flower => {
            flower.style.transition = 'opacity 1s';
            flower.style.opacity = '1';
        });
        itinerary.style.opacity = '1';
    } else {
        itineraryFlowers.forEach(flower => {
            flower.style.transition = 'opacity 1s';
            flower.style.opacity = '0';
        });
        itinerary.style.opacity = '0';
    }

    if (giftPosition < window.innerHeight / 2 && giftPosition > -giftHeight / 2) {
        giftFlowers.forEach(flower => {
            flower.style.transition = 'opacity 1s';
            flower.style.opacity = '1';
        });
        gift.style.opacity = '1';
    } else {
        giftFlowers.forEach(flower => {
            flower.style.transition = 'opacity 1s';
            flower.style.opacity = '0';
        });
        gift.style.opacity = '0';
    }

    if (notesPosition < window.innerHeight / 2 && notesPosition > -notesHeight / 2) {
        notesFlowers.forEach(flower => {
            flower.style.transition = 'opacity 1s';
            flower.style.opacity = '1';
        });
        notes.style.opacity = '1';
    } else {
        notesFlowers.forEach(flower => {
            flower.style.transition = 'opacity 1s';
            flower.style.opacity = '0';
        });
        notes.style.opacity = '0';
    }
});

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Account number copied to clipboard: ' + text);
}

document.addEventListener('DOMContentLoaded', function() {
    const backgroundMusic = document.getElementById('backgroundMusic');

    // Coba memulai pemutaran musik
    backgroundMusic.play().catch(error => {
        console.log('Autoplay tidak diizinkan oleh browser. Musik akan diputar setelah interaksi pengguna.');
    });

    // Tambahkan event listener untuk memulai musik setelah interaksi pengguna
    document.addEventListener('click', function() {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
        }
    });
});

function openInvitation() {
    const intro = document.getElementById('intro');
    intro.classList.add('fade-out');
    setTimeout(() => {
        intro.style.display = 'none';
        document.getElementById('invitation').style.display = 'block';
    }, 1000);
}