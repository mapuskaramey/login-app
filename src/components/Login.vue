<template>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div class="relative transform overflow-hidden rounded-lg bg-gray-50 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                            <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                <!-- put sign in icon here -->
                            </div>
                            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">Sign in now!</h3>
                                <div class="mt-2">
                                    <p class="text-sm text-gray-500">Are you not sign up yet?, click to, 
                                        <u>
                                            <a href="/">sign up</a>
                                        </u> 
                                    </p>
                                </div>
                                <div class="mt-2">
                                    <form autocomplete="off">
                                        <label
                                            for="email-address"
                                            class="sr-only">
                                            Email address
                                        </label>
                                        <input
                                            id="email-address"
                                            name="email"
                                            type="email"

                                            class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Email address"
                                        >
                                        <label
                                            for="password"
                                            class="sr-only">
                                            Password
                                        </label>
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"

                                            class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Password"
                                        >
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button 
                        type="button" 
                        class="mt-3 flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                        sign in
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
</template>

<script>
export default {

}
</script>