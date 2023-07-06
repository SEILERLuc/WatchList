<template>
    <div class="flex flex-col items-center justify-center">
        <img src="/img/UI/about-button.png" class="mt-20 mb-10 relative max-h-80 w-28 sm:w-[150px] sm:max-w-[75%]"
            alt="About" />
        <h1 class="text-center text-sm font-extrabold uppercase text-red-600 mx-4 sm:mb-8 sm:text-2xl md:w-[90%]">
            Why this app ?
        </h1>
        <!--ABOUT: APP PAGES-->
        <div
            class="mt-2 mb-12 flex flex-col items-center text-white text-md px-10 max-w-[350px] sm:px-12 sm:max-w-xl sm:text-xl">
            <div class="flex flex-col items-center my-4">
                <p class="text-center mt-4">
                    This app is here to give a response to problems like this :
                </p>
            </div>
            <div class="flex flex-col items-center my-4">
                <img src="/img/UI/problem.png" class="w-24" alt="HOME PAGE" />
                <p class="text-justify mt-4">
                    <i>"Alice and Bob are TV series enthusiasts. They watch several series in parallel
                        and have a heavy backlog of new series to watch. However, when the time
                        comes to turn on the TV and decide which series to watch, they do not
                        always agree, and the choice can be difficult. Therefore, Alice and Bob
                        would rather rely on a totally impartial third-party to help them make this
                        critical decision."</i>
                </p>
            </div>
            <h1 class="text-center text-sm font-extrabold uppercase text-red-600 mx-4 mt-6  sm:text-2xl md:w-[90%]">
                About this app
            </h1>
            <div class="flex flex-col items-center my-4">
                <p class="text-justify mt-4">
                    This app has been created for help you to choose a show for the night. You can search a show, by search
                    bar or filters with your family or your friends. It is composed by 4 pages :
                </p>
            </div>
            <!--ABOUT THE PAGES OF THE APP-->
            <AboutHome />
            <AboutResearch />
            <AboutMylist />
            <AboutWSWWT />
            <p class="text-center my-4 font-bold">
                !!! You don't need any registration. Your list is saved when you refresh the page or close your browser. !!!
            </p>
        </div>
    </div>
</template>