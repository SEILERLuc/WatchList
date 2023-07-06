<template>
    <div class="flex flex-col items-center">
        <footer class="bottom-0 w-[100%] bg-[#0F0F0F] p-4 pt-10 text-white mt-24 relative">
            <h2 class="mb-5 flex flex-wrap justify-center text-center font-semibold">Thank you for using this app :</h2>
            <!--TECHNO INFOS-->
            <div class="flex flex-col items-center pt-6">
                <h2 class="mb-2 text-center font-semibold">Created with:</h2>
                <h3>Nuxt</h3>
                <h3>NaiveUI</h3>
                <h3>TailWind</h3>
                <h3>SCSS</h3>
                <h3>Pinia</h3>
            </div>

            <NuxtLink to="/#about-anchor" class="sm:px-6 hover:-translate-y-2 duration-300 w-24">
                <div class="flex flex-col items-center my-6">
                    <img src="/img/UI/about.png" class="w-8 mb-2" alt="WSWWT" />
                    <h4>About this app</h4>
                </div>
            </NuxtLink>

            <!--INFO-->
            <div class="flex flex-row justify-between pt-6">
                <h3>2023</h3>
                <h3>Created by Luc Seiler</h3>
            </div>
        </footer>
    </div>
</template>