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
                            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left title">
                                <h2 class="leading-6 text-gray-900">Sign in now!</h2>
                                <div class="mt-2">
                                    <p class="text-sm text-gray-500">Are you not sign up yet?, click 
                                        <u>
                                            <a href="/">sign up</a>
                                        </u> 
                                    </p>
                                </div>
                                <div class="mt-5">
                                    <form 
                                    id="login"
                                    autocomplete="off">
                                        <validation-provider
                                        rules="required"
                                        v-slot="{ errors }"
                                        >
                                            <label
                                                for="email-address"
                                                class="sr-only">
                                                Email address
                                            </label>
                                            <input
                                                id="email-address"
                                                name="email"
                                                type="email"
                                                v-model="login.email"
                                                class="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                placeholder="Email address"
                                            >
                                            <span class="error">{{ errors[0] }}</span>
                                        </validation-provider>

                                        <label
                                            for="password"
                                            class="sr-only">
                                            Password
                                        </label>
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"

                                            class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Password"
                                        >
                                    </form>
                                    <div class="circule circule2 mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"></div>
                                    <div class="circule circule3 mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"></div>
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
import { ValidationProvider } from 'vee-validate'
import Login from '../mixins/login'

export default {
    
    components: {
        ValidationProvider
    },

    data () {
        return {
            login: {
                email: null
            }
        }
    },
    mixins: [ Login ]
}
</script>
<style scoped>
#login input {
    box-sizing: border-box;
    border-radius: 0;
    margin-top: 10px;
}
.circule {
    z-index: -1;
    position: absolute;
}
.circule2{
    top: -18px;
}
.circule3 {
    bottom: -18px;
}
</style>