<template>
  <div class="h-svh w-full relative flex flex-col px-2 md:px-6 pb-8 pt-4">
    <header class="flex justify-between items-center md:items-start">
      <a class="block" href="#">
        <Logo class="max-w-[79px] h-auto md:max-w-full block" />
      </a>
      <button
        class="transition-all text-blue flex items-center hover:text-orange active:text-blue text-[14px] md:text-[1rem]"
        @click="showModal = !showModal"
      >
        <img
          class="mr-1 md:mr-3 max-w-[17px] md:max-w-full"
          src="/images/icons/heart.svg"
          alt="Синия иконка сердца"
          loading="lazy"
        />
        обсудить задачу
      </button>
    </header>

    <img
      class="bg-element md:absolute md:top-5 md:left-5 -z-10 object-cover max-w-full"
      src="/images/background-logo.png"
      alt="элемент на странице"
      loading="lazy"
    />

    <div class="grid md:grid-cols-6 grid-cols-4 md:my-auto">
      <div
        class="col-start-1 col-end-5 md:col-end-7 text-lg md:text-[80px] 2xl:text-5xl uppercase font-extrabold tracking-tighter leading-[90%]"
      >
        <div class="overflow-hidden">
          <div class="title-text">Создаем</div>
        </div>
        <div class="overflow-hidden">
          <div class="title-text">девелоперские</div>
        </div>
      </div>
      <div class="block col-start-2 md:col-start-4 md:col-end-7 col-end-5 relative mb-15 md:mb-0">
        <div
          class="text-lg md:text-[80px] 2xl:text-5xl uppercase font-extrabold tracking-tighter leading-[90%] overflow-hidden"
        >
          <div class="title-text">проекты</div>
        </div>
        <div
          class="md:text-[1rem] text-[14px] overflow-hidden md:absolute right-0 -bottom-4 md:text-right md:pr-13 mt-2 md:mt-0"
        >
          <div class="prompt">для смелых и человечных</div>
        </div>
      </div>
      <div class="col-start-2 md:col-start-4 md:col-end-6 col-end-4 relative">
        <ul class="md:pl-2">
          <li class="overflow-hidden">
            <div class="nav-list-item">
              <nuxt-link class="block font-medium hover:text-orange" to="#"> Исследования </nuxt-link>
            </div>
          </li>
          <li class="overflow-hidden mt-1">
            <div class="nav-list-item">
              <nuxt-link class="block transition-all font-medium hover:text-orange" to="#"> Продукт </nuxt-link>
            </div>
          </li>
          <li class="overflow-hidden mt-1">
            <div class="nav-list-item">
              <nuxt-link class="block transition-all font-medium hover:text-orange" to="#"> Архитектура </nuxt-link>
            </div>
          </li>
          <li class="overflow-hidden mt-1">
            <div class="nav-list-item">
              <nuxt-link class="block transition-all font-medium hover:text-orange" to="#"
                >Стртегии и креатив</nuxt-link
              >
            </div>
          </li>
          <li class="overflow-hidden mt-1">
            <div class="nav-list-item">
              <nuxt-link class="block transition-all font-medium hover:text-orange" to="#"> Брендинг </nuxt-link>
            </div>
          </li>
          <li class="overflow-hidden mt-1">
            <div class="nav-list-item">
              <nuxt-link class="block transition-all font-medium hover:text-orange" to="#"> Сайты </nuxt-link>
            </div>
          </li>
          <li class="overflow-hidden mt-1">
            <div class="nav-list-item">
              <nuxt-link class="block transition-all font-medium hover:text-orange" to="#">
                Реклама и контент
              </nuxt-link>
            </div>
          </li>
          <li class="overflow-hidden mt-1">
            <div class="nav-list-item">
              <nuxt-link class="block transition-all font-medium hover:text-orange" to="#"> Продажи </nuxt-link>
            </div>
          </li>
        </ul>
      </div>
      <footer class="absolute bottom-0 left-0 w-full p-4">
        <nav>
          <ul class="flex items-center md:grid md:grid-cols-6">
            <li class="md:col-start-1 md:col-end-3">
              <div class="footer-list-item">
                <a
                  class="block transition-all text-blue hover:text-orange md:text-[1rem] text-[14px]"
                  href="#"
                  target="_blank"
                >
                  познакомиться поближе
                </a>
              </div>
            </li>
            <li class="ml-auto md:ml-0 md:col-start-4 md:col-end-6">
              <div class="footer-list-item">
                <a
                  class="block transition-all text-blue hover:text-orange md:text-[1rem] text-[14px]"
                  href="https://t.me/suchkovbureau"
                  target="_blank"
                >
                  <span class="hidden md:block">записаться на свидание</span>
                  <span class="md:hidden">TG</span>
                </a>
              </div>
            </li>
            <li class="md:ml-0 ml-5 md:col-start-6 md:col-end-7 text-right">
              <div class="footer-list-item">
                <a
                  class="block transition-all text-blue hover:text-orange md:text-[1rem] text-[14px]"
                  href="https://dprofile.ru/bureausuchkov"
                  target="_blank"
                >
                  <span class="hidden md:block">посмотреть кейсы</span>
                  <span class="md:hidden">DP</span>
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  </div>

  <modals-callback :sucess="sucessModal" :show="showModal" @close="closeModal" />

  <Transition name="fade">
    <loader v-if="load" />
  </Transition>
</template>

<script setup lang="ts">
  const load = ref(true);
  const showModal = ref(false);
  const sucessModal = ref(false);

  function closeModal() {
    showModal.value = false;
    sucessModal.value = false;
  }

  const { $gsap } = useNuxtApp();

  onMounted(() => {
    nextTick(() => {
      setTimeout(() => {
        load.value = false;
      }, 2000);
      setTimeout(() => {
        $gsap.from(".bg-element", 1, {
          y: -100,
          opacity: 0,
          ease: "power4.out",
          delay: 0.5,
          skewY: -7,
          stagger: {
            amount: 0.3,
          },
        });
        $gsap.from(".title-text", 1.5, {
          y: 100,
          opacity: 0,
          height: 0,
          ease: "power4.out",
          delay: 1,
          skewY: 7,
          stagger: {
            amount: 0.3,
          },
        });
        $gsap.from(".nav-list-item", 2.5, {
          y: -100,
          opacity: 0,
          height: 0,
          ease: "power4.out",
          delay: 1.5,
          skewY: -7,
          stagger: {
            amount: 0.3,
          },
        });
        $gsap.from(".prompt", 3.5, {
          y: -100,
          opacity: 0,
          height: 0,
          ease: "power4.out",
          delay: 2,
          skewY: -7,
          stagger: {
            amount: 0.3,
          },
        });
        $gsap.from(".footer-list-item", 4, {
          y: -100,
          opacity: 0,
          height: 0,
          ease: "power4.out",
          delay: 2,
          skewY: -7,
          stagger: {
            amount: 0.3,
          },
        });
      }, 1000);
    });
  });
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
