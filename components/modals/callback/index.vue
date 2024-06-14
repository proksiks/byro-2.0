<template>
  <Transition name="fade">
    <div class="fixed w-full h-full top-0 left-0 z-20 overflow-auto" v-if="show">
      <div class="absolute w-full h-full pointer-events-none bg-blue-dark opacity-60"></div>
      <div class="relative h-full bg-white md:mt-0 mt-[15%] rounded-t-lg md:rounded-none">
        <div class="px-4 pt-15 max-w-[1100px] relative md:static bg-white" v-if="!sucess">
          <div class="w-[40px] h-[2px] absolute left-[50%] translate-x-[-50%] top-2 bg-gray-base rounded-sm"></div>
          <h2 class="text-[27px] lg:text-xl font-extrabold uppercase md:mb-10 mb-5">Поработать вместе</h2>
          <div class="md:flex mb-12 gap-5">
            <p class="text-[14px] lg:text-md font-medium max-w-[516px]">
              Наши клиенты — смелые, требовательные и талантливые команды, общими проектами с которыми мы гордимся.
            </p>
            <p class="text-[14px] mt-5 md:mt-0 lg:text-md font-medium max-w-[516px]">
              Мы забираем продукт на стадии участка земли и помогаем понять, что с ним делать. Придумать, как он будет
              выглядеть, что будет внутри и как его продать с премией к рынку — задача для Бюро.
            </p>
          </div>
          <div>
            <div class="text-[14px] md:text-md text-blue mb-5 max-w-[515px]">
              Расскажите о задаче подробнее — мы свяжемся с вами и ответим на все вопросы.
            </div>

            <div class="flex gap-2 flex-wrap">
              <label
                v-for="(tag, i) in tags"
                class="transition-all cursor-pointer has-[:checked]:bg-blue has-[:checked]:text-white text-blue-dark border border-blue px-3.5 py-2.5 rounded-xl leading-none"
                :for="`tag-${i}`"
              >
                <input
                  v-model="form.tags"
                  type="checkbox"
                  class="absolute pointer-events-none opacity-0 -left-[10000px]"
                  :id="`tag-${i}`"
                  :value="tag"
                />
                <span class="text-[12px] md:text-xs hidden md:block">{{ tag.text }}</span>
                <span class="text-[12px] md:text-xs md:hidden">{{ tag.mobileText ? tag.mobileText : tag.text }}</span>
              </label>
            </div>
            <form @submit.prevent="submitForm">
              <div class="mt-8 mb-3">
                <lable class="w-full text-md relative block">
                  <input
                    v-model="form.name"
                    class="placeholder:text-blue-dark text-[14px] md:text-md transition-all border-b outline-none py-2 border-gray-light focus:border-blue w-[inherit] h-[inherit] bg-transparent"
                    placeholder="Имя"
                    type="text"
                  />
                  <span v-if="!isFormCorrect && !v$.form.name.required.$response" class="text-sm text-orange">
                    {{ v$.form.name.required.$message }}
                  </span>
                  <span v-else-if="!isFormCorrect && !v$.form.name.isValidString.$response" class="text-sm text-orange">
                    {{ v$.form.name.isValidString.$message }}
                  </span>
                </lable>

                <lable class="w-full mt-8 w-full text-md relative block">
                  <input
                    v-model="form.company"
                    class="placeholder:text-blue-dark text-[14px] md:text-md transition-all border-b outline-none py-2 border-gray-light focus:border-blue w-[inherit] h-[inherit] bg-transparent"
                    placeholder="Компания"
                    type="text"
                  />
                  <span v-if="!isFormCorrect && !v$.form.company.required.$response" class="text-sm text-orange">
                    {{ v$.form.company.required.$message }}
                  </span>
                </lable>
                <lable class="w-full mt-8 w-full text-md relative block">
                  <input
                    v-model="form.phone"
                    v-maska
                    data-maska="+7 (###) ###-##-##"
                    class="placeholder:text-blue-dark text-[14px] md:text-md transition-all border-b outline-none py-2 border-gray-light focus:border-blue w-[inherit] h-[inherit] bg-transparent"
                    placeholder="Телефон"
                    type="text"
                  />
                  <div v-if="!isFormCorrect && !v$.form.phone.required.$response" class="text-sm text-orange">
                    {{ v$.form.phone.required.$message }}
                  </div>
                  <div v-else-if="!isFormCorrect && !v$.form.phone.minLength.$response" class="text-sm text-orange">
                    {{ v$.form.phone.minLength.$message }}
                  </div>
                </lable>
                <lable class="w-full mt-8 w-full text-md relative block">
                  <input
                    v-model="form.messanger"
                    class="placeholder:text-blue-dark text-[14px] md:text-md transition-all border-b outline-none py-2 border-gray-light focus:border-blue w-[inherit] h-[inherit] bg-transparent"
                    placeholder="Телеграм"
                    type="text"
                  />
                  <span v-if="!isFormCorrect && !v$.form.messanger.required.$response" class="text-sm text-orange">
                    {{ v$.form.messanger.required.$message }}
                  </span>
                </lable>
                <lable class="w-full mt-8 w-full text-md relative block">
                  <textarea
                    v-model="form.description"
                    class="placeholder:text-blue-dark text-[14px] md:text-md transition-all border-b outline-none py-2 border-gray-light focus:border-blue w-[inherit] h-[inherit] bg-transparent resize-none"
                    placeholder="Немного о проекте"
                    type="text"
                  />
                  <span v-if="!isFormCorrect && !v$.form.description.required.$response" class="text-sm text-orange">
                    {{ v$.form.description.required.$message }}
                  </span>
                </lable>
              </div>

              <div class="flex items-center justify-between pb-5 md:pb-0">
                <button class="transition-all text-blue hover:text-orange active:text-blue mb-3">
                  Отправить заявку
                </button>
                <img
                  class="max-w-[87px] xl:max-w-full relative md:absolute md:right-5 md:bottom-5"
                  src="/images/icons/big-heart.svg"
                  alt="Иконка большого синего сердца"
                />
              </div>
            </form>
          </div>
        </div>
        <Transition name="fade">
          <div class="absolute w-full h-full bg-white top-0 left-0 z-30 overflow-auto" v-if="sucess">
            <div class="w-[40px] h-[2px] absolute left-[50%] translate-x-[-50%] top-2 bg-gray-base rounded-sm"></div>
            <div class="relative h-full">
              <img
                class="max-w-[87px] xl:max-w-full absolute right-5 md:bottom-5 bottom-20"
                src="/images/icons/big-red-heart.svg"
                alt="Иконка большого красного сердца"
              />
              <div class="px-4 pt-15">
                <h2
                  class="text-lg md:text-xl font-extrabold uppercase mb-10 tracking-tighter leading-[80%] max-w-[675px] pr-2"
                >
                  <span class="text-blue">спасибо, все приняли!</span> ответим в течение часа
                </h2>
              </div>
            </div>
          </div>
        </Transition>
        <button
          class="absolute md:fixed right-5 md:right-12 top-3 md:top-5 z-50 text-blue hover:text-orange active:text-blue transition-all"
          @click="$emit('close')"
        >
          закрыть
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
  import useVuelidate from "@vuelidate/core";
  import { required, minLength, helpers, maxLength } from "@vuelidate/validators";

  const sucess = ref(false);
  const tagValue = ref([]);
  const isFormCorrect = ref(true);

  const tags = [
    {
      text: "Бренд девелопера",
    },
    {
      text: "Бренд ЖК",
    },
    {
      text: "Разработка продукта",
    },
    {
      text: "Исследования: какой будет новостройка через 10 лет",
      mobileText: "Исследования",
    },
    {
      text: "Маркетинговая стратегия",
    },
    {
      text: "Сайт девелопера",
    },
    {
      text: "Сайт ЖК",
    },
    {
      text: "Коммуникационная стратегия",
    },
    {
      text: "Продажи",
    },
    {
      text: "Big Idea",
    },
    {
      text: "Креативная РК",
    },
    {
      text: "Продвижение в соцсетях",
    },
    {
      text: "Лидогенерация ",
    },
    {
      text: "Агрегаторы и классифайды",
    },
    {
      text: "Концепция застройки",
    },
    {
      text: "Качественная архитектура ЖК",
    },
    {
      text: "Квартирография и эффективные ТЭПы",
    },
  ];

  const props = defineProps({
    show: {
      type: Boolean,
      default: false,
    },
  });

  const form = ref({
    tags: [],
    name: "",
    company: "",
    phone: "",
    messanger: "",
    description: "",
  });

  const isValidString = (string) => {
    const reg = /^[а-яА-ЯёЁa-zA-Z/\s]+$/;
    return reg.test(string);
  };

  const rules = computed(() => ({
    form: {
      name: {
        required: helpers.withMessage("Поле обязательно к заполнению", required),
        isValidString: helpers.withMessage("Недопустимо использование цифр", isValidString),
        maxLength: helpers.withMessage("Максимальная длина поля 50 символов", maxLength(50)),
      },
      company: {
        required: helpers.withMessage("Поле обязательно к заполнению", required),
      },
      messanger: {
        required: helpers.withMessage("Поле обязательно к заполнению", required),
      },
      description: {
        required: helpers.withMessage("Поле обязательно к заполнению", required),
      },
      phone: {
        required: helpers.withMessage("Поле обязательно к заполнению", required),
        minLength: helpers.withMessage("Введите корректный номер телефона", minLength(18)),
      },
    },
  }));

  const v$ = useVuelidate(rules, { form });

  const submitForm = async () => {
    isFormCorrect.value = await v$.value.$validate();

    if (!isFormCorrect.value) return;

    console.log(form);
    sucess.value = true;
  };
</script>
