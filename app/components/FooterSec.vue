<template>
  <footer class="footer text-white">
    <div class="footerContent bg-[#242424] pb-24 pt-14">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-4 grid-cols-1 md:space-y-0 space-y-10">
          <!--  logo and social media -->
          <div class="space-y-5">
            <div class="flex gap-4 items-center justify-start">
              <img
                src="@/assets/images/logo/logo.png"
                class="w-16 h-16"
                alt="FreeStyle Logo"
              />
              <h4 class="text-lg font-bold text-white">FreeStyle</h4>
            </div>
            <p class="text-xs text-gray-400 max-w-xs">
              Premium kalitede özel tişört ve giyim ürünleri. Benzersiz
              tasarımlarımız ve rahat kumaşlarımızla stilinizi ifade edin.
            </p>

            <div class="flex gap-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                class="hover:opacity-80 transition-opacity"
              >
                <faceBook class="w-8 h-8 cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                class="hover:opacity-80 transition-opacity"
              >
                <insta class="w-8 h-8 cursor-pointer" />
              </a>
              <div
                @click="openMail"
                class="hover:opacity-80 transition-opacity"
              >
                <gmail class="w-8 h-8 cursor-pointer" />
              </div>

              <a
                href="http://wa.me/+905517069491"
                target="_blank"
                class="hover:opacity-80 transition-opacity"
              >
                <whatsapp class="w-8 h-8 cursor-pointer" />
              </a>
            </div>
            <hr class="md:hidden block border-gray-600" />
          </div>
          <!--  links -->
          <div class="space-y-5">
            <h3 class="text-2xl font-bold text-white">Hızlı Bağlantılar</h3>
            <ul class="space-y-2">
              <li
                class="cursor-pointer hover:text-yellow-400 transition-colors"
              >
                <NuxtLink to="/">Ana Sayfa</NuxtLink>
              </li>
              <li
                class="cursor-pointer hover:text-yellow-400 transition-colors"
              >
                <NuxtLink to="/products">Ürünler</NuxtLink>
              </li>
              <!-- <li
                class="cursor-pointer hover:text-yellow-400 transition-colors"
              >
                <NuxtLink to="/contact">İletişim</NuxtLink>
              </li> -->
              <li
                class="cursor-pointer hover:text-yellow-400 transition-colors"
              >
                <NuxtLink to="/privacy-policy">Gizlilik Politikası</NuxtLink>
              </li>
              <li
                class="cursor-pointer hover:text-yellow-400 transition-colors"
              >
                <NuxtLink to="/terms-conditions">Kullanım Şartları</NuxtLink>
              </li>
            </ul>
          </div>
          <!--  products -->
          <div class="space-y-5">
            <h3 class="text-2xl font-bold text-white">Ürünlerimiz</h3>
            <ul class="space-y-2">
              <li
                class="cursor-pointer hover:text-yellow-400 transition-colors"
              >
                <NuxtLink to="/products">Temel Tişörtler</NuxtLink>
              </li>
              <li
                class="cursor-pointer hover:text-yellow-400 transition-colors"
              >
                <NuxtLink to="/products">Oversize Tişörtler</NuxtLink>
              </li>
              <li
                class="cursor-pointer hover:text-yellow-400 transition-colors"
              >
                <NuxtLink to="/products">Kapüşonlular</NuxtLink>
              </li>
              <li
                class="cursor-pointer hover:text-yellow-400 transition-colors"
              >
                <NuxtLink to="/products">Özel Tasarımlar</NuxtLink>
              </li>
            </ul>
          </div>
          <!-- contact info -->
          <div class="space-y-5">
            <h3 class="text-2xl font-bold text-white">İletişim Bilgileri</h3>
            <div class="flex gap-2 items-start">
              <mapIcon class="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
              <p class="text-sm text-gray-400">
                Türkiye, İstanbul<br />
                Premium Giyim Mağazası
              </p>
            </div>
            <div class="flex gap-2 items-center">
              <whatsapp class="w-6 h-6 text-yellow-400 flex-shrink-0" />
              <a
                href="http://wa.me/+905517069491"
                target="_blank"
                class="text-sm text-gray-400 hover:text-yellow-400 transition-colors"
              >
                +90 551 706 9491
              </a>
            </div>
            <p class="text-sm text-gray-400">
              Tüm ürünlerimiz için hızlı teslimat ve kalite garantisi.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="footerBotton bg-black py-4 md:text-sm text-xs">
      <div class="container mx-auto px-4">
        <div
          class="flex md:flex-row flex-col md:gap-0 gap-2 justify-between items-center"
        >
          <p class="text-gray-400">
            © {{ currentYear }} FreeStyle. Tüm hakları saklıdır. Geliştiren:
            <a
              href="https://horustech.site/ar"
              target="_blank"
              class="text-yellow-400"
              >Horus Tech</a
            >
          </p>
          <div class="flex gap-4">
            <NuxtLink
              to="/privacy-policy"
              class="cursor-pointer hover:text-yellow-400 transition-colors text-gray-400"
            >
              Gizlilik Politikası
            </NuxtLink>
            <span class="text-gray-400">&</span>
            <NuxtLink
              to="/terms-conditions"
              class="cursor-pointer hover:text-yellow-400 transition-colors text-gray-400"
            >
              Kullanım Şartları
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import faceBook from "@/assets/svgs/faceBook.svg";
import insta from "@/assets/svgs/insta.svg";
import gmail from "@/assets/svgs/gmail.svg";
import whatsapp from "@/assets/svgs/whatsapp.svg";
import mapIcon from "@/assets/svgs/map.svg";

// Get current year
const currentYear = computed(() => new Date().getFullYear());

// Email configuration for FreeStyle
const to = "contact@freestyle.com";
const subject = "FreeStyle Hakkında";
const body = "Ürünleriniz ve hizmetleriniz hakkında bilgi almak istiyorum.";
const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  to
)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const openMail = () => {
  // Open Gmail web interface in a new tab
  window.open(gmailUrl, "_blank");
};
</script>

<style scoped lang="scss">
footer {
  background: url("@/assets/svgs/circles.svg") no-repeat center center;

  li {
    cursor: pointer;
  }
}
</style>
