<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="container mx-auto px-4 max-w-4xl">
      <div class="bg-white rounded-lg shadow-lg p-8">
        <div class="text-center mb-8">
          <img
            src="@/assets/images/logo/logo.png"
            class="h-16 mx-auto mb-4"
            alt="FreeStyle Logo"
          />
          <h1 class="text-3xl font-bold text-gray-800">Kullanım Şartları</h1>
          <p class="text-gray-600 mt-2">Son güncelleme: {{ currentDate }}</p>
        </div>

        <div class="prose max-w-none">
          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
              1. Şartların Kabulü
            </h2>
            <p class="text-gray-700 leading-relaxed">
              FreeStyle'ın web sitesi ve hizmetlerine erişerek ve kullanarak, bu
              anlaşmanın şartlarını ve hükümlerini kabul etmiş ve bunlara uymayı
              taahhüt etmiş olursunuz. Yukarıdakileri kabul etmiyorsanız, lütfen
              bu hizmeti kullanmayın.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
              2. Kullanım Lisansı
            </h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              FreeStyle web sitesindeki materyallerden kişisel, ticari olmayan
              geçici görüntüleme amacıyla tek kopya indirme izni verilmiştir. Bu
              bir lisans verme işlemidir, mülkiyet devri değildir ve bu lisans
              altında şunları yapamazsınız:
            </p>
            <ul class="list-disc pl-6 text-gray-700 space-y-2">
              <li>materyalleri değiştirmek veya kopyalamak</li>
              <li>
                materyalleri herhangi bir ticari amaçla veya herhangi bir kamu
                gösterimi için (ticari veya ticari olmayan) kullanmak
              </li>
              <li>
                web sitesinde bulunan herhangi bir yazılımı derleyici açma veya
                tersine mühendislik yapmaya çalışmak
              </li>
              <li>
                materyallerden telif hakkı veya diğer mülkiyet notlarını
                kaldırmak
              </li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
              3. Ürün Bilgileri
            </h2>
            <p class="text-gray-700 leading-relaxed">
              Doğru ürün açıklamaları ve görseller sağlamaya çalışıyoruz. Ancak
              ürün açıklamalarının veya diğer içeriklerin doğru, eksiksiz,
              güvenilir, güncel veya hatasız olduğunu garanti etmiyoruz. Renkler
              monitör ayarları ve baskı süreçleri nedeniyle hafifçe farklılık
              gösterebilir.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
              4. Fiyatlandırma ve Ödeme
            </h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              Tüm fiyatlar önceden haber verilmeksizin değiştirilebilir.
              Ürünleri istediğimiz zaman değiştirme veya durdurma hakkını saklı
              tutuyoruz. Siparişinizin işlenmesinden önce ödemenin tamamı
              yapılmalıdır. Ödeme sırasında gösterilen çeşitli ödeme
              yöntemlerini kabul ediyoruz.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
              5. Kargo ve Teslimat
            </h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              Türkiye içindeki adreslere kargo gönderiyoruz. Teslimat süreleri
              konumunuz ve ürün müsaitliğine bağlı olarak değişebilir. Kargo
              firmaları veya gümrük nedeniyle oluşan gecikmelerden sorumlu
              değiliz.
            </p>
            <ul class="list-disc pl-6 text-gray-700 space-y-2">
              <li>Standart kargo: 3-5 iş günü</li>
              <li>Hızlı kargo: 1-2 iş günü</li>
              <li>500 TL üzeri siparişlerde ücretsiz kargo</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
              6. İade ve Geri Ödeme
            </h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              Orijinal ambalajında kullanılmamış ürünler için 30 günlük iade
              politikası sunuyoruz. İade için uygun olmak üzere, ürününüz
              kullanılmamış ve aldığınız durumda olmalıdır.
            </p>
            <ul class="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                Ürünler satın alındıktan sonra 30 gün içinde iade edilmelidir
              </li>
              <li>
                Ürünler etiketleriyle birlikte orijinal durumunda olmalıdır
              </li>
              <li>Özel veya kişiselleştirilmiş ürünler iade edilemez</li>
              <li>İade kargo ücretleri müşterinin sorumluluğundadır</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
              7. Fikri Mülkiyet
            </h2>
            <p class="text-gray-700 leading-relaxed">
              Site içeriği, organizasyonu, grafikleri, tasarımı, derlemesi,
              manyetik çevirisi, dijital dönüşümü ve site ile ilgili diğer
              konular geçerli telif hakkı, ticari marka ve diğer mülkiyet
              hakları altında korunmaktadır. Bu tür konuların veya sitenin
              herhangi bir bölümünün sizin tarafınızdan kopyalanması, yeniden
              dağıtılması, kullanılması veya yayınlanması kesinlikle yasaktır.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
              8. Sorumluluk Sınırlaması
            </h2>
            <p class="text-gray-700 leading-relaxed">
              Hiçbir durumda FreeStyle veya tedarikçileri, FreeStyle web
              sitesindeki materyallerin kullanımından veya kullanılamamasından
              kaynaklanan herhangi bir zarardan (veri kaybı veya kar kaybı
              zararları veya iş kesintisi dahil ancak bunlarla sınırlı olmamak
              üzere) sorumlu olmayacaktır, FreeStyle veya yetkili temsilcisinin
              böyle bir zararın olasılığı konusunda sözlü veya yazılı olarak
              bilgilendirilmiş olması durumunda bile.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
              9. Uygulanacak Hukuk
            </h2>
            <p class="text-gray-700 leading-relaxed">
              Bu kullanım şartları Türkiye kanunlarına göre yönetilir ve
              yorumlanır ve siz geri alınamaz şekilde o eyaletteki veya
              konumdaki mahkemelerin münhasır yetkisine tabi olursunuz.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
              10. İletişim Bilgileri
            </h2>
            <p class="text-gray-700 leading-relaxed">
              Bu Kullanım Şartları hakkında herhangi bir sorunuz varsa, lütfen
              bizimle iletişime geçin:
            </p>
            <div class="mt-4 p-4 bg-gray-100 rounded-lg">
              <p class="text-gray-700">
                <strong>E-posta:</strong> contact@freestyle.com
              </p>
              <p class="text-gray-700">
                <strong>Telefon:</strong> +90 551 706 9491
              </p>
              <p class="text-gray-700">
                <strong>Adres:</strong> Türkiye, İstanbul
              </p>
            </div>
          </section>

          <div class="text-center mt-8 pt-8 border-t border-gray-200">
            <NuxtLink
              to="/"
              class="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <svg
                class="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                ></path>
              </svg>
              Ana Sayfaya Dön
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Set page title and meta
useHead({
  title: "Kullanım Şartları - FreeStyle",
  meta: [
    {
      name: "description",
      content:
        "FreeStyle giyim mağazası için kullanım şartları. Politikalarımız, kargo, iadeler ve daha fazlası hakkında bilgi edinin.",
    },
  ],
});

// Get current date for last updated
const currentDate = computed(() => {
  return new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});
</script>

<style scoped>
.prose h2 {
  color: #1f2937;
  font-weight: 600;
}

.prose p {
  color: #374151;
  line-height: 1.7;
}

.prose ul {
  color: #374151;
}

.prose li {
  margin-bottom: 0.5rem;
}
</style>
