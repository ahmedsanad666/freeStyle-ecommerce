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
          <h1 class="text-3xl font-bold text-gray-800">Gizlilik Politikası</h1>
          <p class="text-gray-600 mt-2">Son güncelleme: {{ currentDate }}</p>
        </div>

        <div class="prose max-w-none">
          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
              1. Topladığımız Bilgiler
            </h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              Hesap oluşturduğunuzda, satın alma yaptığınızda veya destek için
              bizimle iletişime geçtiğinizde olduğu gibi, doğrudan bize
              sağladığınız bilgileri topluyoruz.
            </p>
            <h3 class="text-xl font-medium text-gray-800 mb-3">
              Kişisel Bilgiler:
            </h3>
            <ul class="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>
                Ad ve iletişim bilgileri (e-posta adresi, telefon numarası)
              </li>
              <li>Kargo ve fatura adresleri</li>
              <li>
                Ödeme bilgileri (ödeme ortaklarımız aracılığıyla güvenli şekilde
                işlenir)
              </li>
              <li>Hesap kimlik bilgileri</li>
            </ul>
            <h3 class="text-xl font-medium text-gray-800 mb-3">
              Kullanım Bilgileri:
            </h3>
            <ul class="list-disc pl-6 text-gray-700 space-y-2">
              <li>Cihaz bilgileri ve IP adresi</li>
              <li>Tarayıcı türü ve sürümü</li>
              <li>Ziyaret edilen sayfalar ve web sitemizde geçirilen süre</li>
              <li>Yönlendiren web sitesi bilgileri</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
              2. Bilgilerinizi Nasıl Kullanıyoruz
            </h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              Topladığımız bilgileri hizmetlerimizi sağlamak, sürdürmek ve
              geliştirmek için kullanıyoruz:
            </p>
            <ul class="list-disc pl-6 text-gray-700 space-y-2">
              <li>Siparişlerinizi işlemek ve yerine getirmek</li>
              <li>Müşteri desteği sağlamak ve sorguları yanıtlamak</li>
              <li>
                Sipariş onayları, kargo güncellemeleri ve teslimat bildirimleri
                göndermek
              </li>
              <li>
                Web sitemizin işlevselliğini ve kullanıcı deneyimini geliştirmek
              </li>
              <li>
                Pazarlama iletişimleri göndermek (izin verdiğiniz takdirde)
              </li>
              <li>
                Yasal yükümlülüklerimizi yerine getirmek ve haklarımızı korumak
              </li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
              3. Bilgi Paylaşımı
            </h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              Aşağıdaki durumlar dışında, kişisel bilgilerinizi rızanız olmadan
              üçüncü taraflara satmaz, takas etmez veya başka şekilde
              aktarmayız:
            </p>
            <ul class="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Hizmet Sağlayıcıları:</strong> Web sitemizi işletmemize,
                ödemeleri işlememize veya müşteri hizmeti sağlamamıza yardımcı
                olan güvenilir üçüncü taraflarla bilgi paylaşırız
              </li>
              <li>
                <strong>Kargo Ortakları:</strong> Siparişlerinizi yerine
                getirmek için kargo bilgilerini teslimat hizmetleriyle
                paylaşırız
              </li>
              <li>
                <strong>Yasal Gereklilikler:</strong> Yasa gereği veya
                haklarımızı ve güvenliğimizi korumak için bilgi açıklayabiliriz
              </li>
              <li>
                <strong>İş Transferleri:</strong> Birleşme veya devralma
                durumunda, bilgileriniz iş varlıklarının bir parçası olarak
                aktarılabilir
              </li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
              4. Veri Güvenliği
            </h2>
            <p class="text-gray-700 leading-relaxed">
              Kişisel bilgilerinizi yetkisiz erişime, değiştirmeye, açıklamaya
              veya yok etmeye karşı korumak için uygun güvenlik önlemleri
              uyguluyoruz. Ancak, internet üzerinden iletişim veya elektronik
              depolama yöntemlerinden hiçbiri %100 güvenli değildir ve mutlak
              güvenlik garanti edemeyiz.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
              5. Çerezler ve Takip
            </h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              Tarama deneyiminizi geliştirmek ve web sitesi trafiğini analiz
              etmek için çerezler ve benzer takip teknolojileri kullanıyoruz.
              Çerez ayarlarını tarayıcı tercihleriniz aracılığıyla kontrol
              edebilirsiniz.
            </p>
            <h3 class="text-xl font-medium text-gray-800 mb-3">
              Çerez Türleri:
            </h3>
            <ul class="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Gerekli Çerezler:</strong> Web sitesi işlevselliği için
                gerekli
              </li>
              <li>
                <strong>Analitik Çerezler:</strong> Ziyaretçilerin sitemizi
                nasıl kullandığını anlamamıza yardımcı olur
              </li>
              <li>
                <strong>Pazarlama Çerezleri:</strong> İlgili reklamları sunmak
                için kullanılır
              </li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
              6. Haklarınız
            </h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              Kişisel bilgileriniz konusunda belirli haklarınız vardır:
            </p>
            <ul class="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Erişim:</strong> Hakkınızda tuttuğumuz kişisel
                bilgilerin bir kopyasını talep etmek
              </li>
              <li>
                <strong>Düzeltme:</strong> Yanlış veya eksik bilgilerin
                düzeltilmesini talep etmek
              </li>
              <li>
                <strong>Silme:</strong> Kişisel bilgilerinizin silinmesini talep
                etmek
              </li>
              <li>
                <strong>Taşınabilirlik:</strong> Verilerinizin başka bir hizmete
                aktarılmasını talep etmek
              </li>
              <li>
                <strong>İtiraz:</strong> Kişisel bilgilerinizin işlenmesine
                itiraz etmek
              </li>
              <li>
                <strong>Rızanın Geri Çekilmesi:</strong> Pazarlama iletişimleri
                için verilen rızayı geri çekmek
              </li>
            </ul>
            <p class="text-gray-700 leading-relaxed mt-4">
              Bu hakları kullanmak için, lütfen aşağıda verilen bilgileri
              kullanarak bizimle iletişime geçin.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
              7. Veri Saklama
            </h2>
            <p class="text-gray-700 leading-relaxed">
              Bu gizlilik politikasında belirtilen amaçları yerine getirmek için
              gerekli olduğu sürece kişisel bilgilerinizi saklarız, yasa
              tarafından daha uzun bir saklama süresi gerekli veya izin verilmiş
              olmadıkça. Bilgilerinize artık ihtiyacımız olmadığında, bunları
              güvenli bir şekilde sileriz veya anonimleştiririz.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
              8. Uluslararası Veri Transferleri
            </h2>
            <p class="text-gray-700 leading-relaxed">
              Bilgileriniz ikamet ettiğiniz ülkeden farklı ülkelere
              aktarılabilir ve orada işlenebilir. Bu tür transferlerin geçerli
              veri koruma yasalarına uygun olarak yapıldığını ve uygun güvenlik
              önlemlerinin mevcut olduğunu sağlıyoruz.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
              9. Çocukların Gizliliği
            </h2>
            <p class="text-gray-700 leading-relaxed">
              Hizmetlerimiz 13 yaşın altındaki çocuklara yönelik değildir.
              Bilerek 13 yaşın altındaki çocuklardan kişisel bilgi toplamayız.
              13 yaşın altında bir çocuktan kişisel bilgi topladığımızı fark
              edersek, bu bilgileri silmek için adımlar atarız.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
              10. Bu Politikadaki Değişiklikler
            </h2>
            <p class="text-gray-700 leading-relaxed">
              Bu gizlilik politikasını zaman zaman güncelleyebiliriz.
              Değişiklikleri yeni politikayı bu sayfaya yayınlayarak ve "Son
              güncelleme" tarihini güncelleyerek size bildireceğiz. Bu
              politikayı değişiklikler için periyodik olarak gözden geçirmenizi
              teşvik ediyoruz.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
              11. Bizimle İletişime Geçin
            </h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              Bu gizlilik politikası veya veri uygulamalarımız hakkında herhangi
              bir sorunuz varsa, lütfen bizimle iletişime geçin:
            </p>
            <div class="mt-4 p-4 bg-gray-100 rounded-lg">
              <p class="text-gray-700">
                <strong>E-posta:</strong> privacy@freestyle.com
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
  title: "Gizlilik Politikası - FreeStyle",
  meta: [
    {
      name: "description",
      content:
        "FreeStyle giyim mağazası için gizlilik politikası. Kişisel bilgilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu öğrenin.",
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

.prose h3 {
  color: #374151;
  font-weight: 500;
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

.prose strong {
  color: #1f2937;
  font-weight: 600;
}
</style>
