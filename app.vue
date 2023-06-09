<template>
  <NConfigProvider :locale="frFR" :date-locale="dateFrFR">
    <NDialogProvider>
      <NMessageProvider>
        <NNotificationProvider>
          <NuxtLayout>
            <NuxtLoadingIndicator :height="4" />
            <NuxtPage />
          </NuxtLayout>
        </NNotificationProvider>
      </NMessageProvider>
    </NDialogProvider>
  </NConfigProvider>
</template>


<script setup>
import '@unocss/reset/tailwind.css'
import { frFR, dateFrFR } from 'naive-ui'
import { setDefaultOptions } from 'date-fns'
import { fr } from 'date-fns/locale'

setDefaultOptions({ locale: fr })
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
