<template>
    <div class="flex flex-col items-center justify-center">
        <img src="/img/UI/about-button.png" class="mt-20 mb-10 relative max-h-80 w-28 sm:w-[150px] sm:max-w-[75%]"
            alt="About" />
        <!--<img src="/img/UI/WSWWT-logo-v2.png" class="mb-10 relative max-h-80 w-[150px] max-w-[75%]" alt="background" />-->
        <h1 class="text-center text-sm font-extrabold uppercase text-red-600 mx-4 sm:mb-8 sm:text-2xl md:w-[90%]">
            About this app
        </h1>
        <!--ABOUT: APP PAGES-->
        <div
            class="mt-2 mb-12 flex flex-col items-center text-white text-md px-10 max-w-[350px] sm:px-12 sm:max-w-xl sm:text-xl">
            <!--ABOUT: HOME PAGE-->
            <div class="flex flex-col items-center my-4">
                <img src="/img/UI/home.png" class="w-8" alt="HOME PAGE" />
                <p class="text-justify mt-4">
                    This app has been created for help you to choose a show for the night. You can search a show, by search
                    bar or filters with your family or your friends. The page Home show you some of shows availables, from
                    the
                    beginning of the API (the first 250 shows). They are suggestions for you.
                </p>
            </div>
            <!--ABOUT: RESEARCH PAGE-->
            <div class="flex flex-col items-center my-4">
                <img src="/img/UI/research.png" class="w-10" alt="RESEARCH PAGE" />
                <p class="text-justify my-4">
                    You can research your own shows in the <i><b>Research</b></i> page. When you tap a name, the app make a
                    research to the API and show you the returned response. There is a <i><b>limit result of 10</b></i>.
                </p>
                <p class="text-justify">
                    Then, you can choose to find more informations by clicking the show. You can access to the title, the
                    rating and the summary. You can choose to add the show to your list too, by clicking the button.
                </p>
            </div>
            <!--ABOUT: YOUR LIST PAGE-->
            <div class="flex flex-col items-center my-4">
                <img src="/img/UI/list.png" class="w-8" alt="RESEARCH PAGE" />
                <p class="text-justify my-4">
                    The number of shows in your list increase when you add them to your list. Here, you can <i><b>see all
                            the shows registered</b></i>, and can choose to <i><b>keep them or not</b></i>. You can also
                    choose to
                    clear all the list !
                </p>
            </div>
            <!--ABOUT: CHOSEN SHOW PAGE-->
            <div class="flex flex-col items-center my-4">
                <img src="/img/UI/pop-corn.png" class="w-8" alt="CHOSEN SHOW" />
                <p class="text-justify my-4">
                    This page appears at the moment you choose your first show, and add it to your list. This page
                    <i><b>choose for you a random show</b></i>, between all of them from your list. But you can restart the
                    choice if you do not like it.
                </p>
            </div>
            <p class="text-center my-4">
                !!! You don't need any registration. Your list is saved when you refresh the page or close your browser. !!!
            </p>
        </div>
    </div>
</template>