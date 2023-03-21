import React from "react";
import NavbarAdmin from "./navbar";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <NavbarAdmin />
                <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-5">
                    <img src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-5" />

                    <div class="relative isolate px-6 pt-14 lg:px-8">
                        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                            <svg class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
                                <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                                <defs>
                                    <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#2563eb" />
                                        <stop offset="1" stop-color="#7dd3fc" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                            <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                            </div>
                            <div class="text-center">
                                <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Selamat Datang di Sass Hotel</h1>
                                <p class="mt-6 text-lg leading-8 text-white ">Tempat ternyaman dan disertai keindahan alam ada disini. Sass Hotel selalu siap melayani anda</p>
                                <div class="mt-10 flex items-center justify-center gap-x-6">
                                    <a href="http://localhost:3000/admin/tipe_kamar" class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Lihat Kamar</a>
                                </div>
                            </div>
                        </div>
                        <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                            <svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
                                <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                                <defs>
                                    <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#2563eb" />
                                        <stop offset="1" stop-color="#7dd3fc" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    </div>
                </div>
                )
    }
}
                // <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                //     <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
                //     <svg viewBox="0 0 1097 845" aria-hidden="true" class="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]">
                //         <path fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)" fill-opacity=".2" d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z" />
                //         <defs>
                //             <linearGradient id="10724532-9d81-43d2-bb94-866e98dd6e42" x1="1097.04" x2="-141.165" y1=".22" y2="363.075" gradientUnits="userSpaceOnUse">
                //                 <stop stop-color="#776FFF" />
                //                 <stop offset="1" stop-color="#FF4694" />
                //             </linearGradient>
                //         </defs>
                //     </svg>
                //     <svg viewBox="0 0 1097 845" aria-hidden="true" class="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
                //         <path fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)" fill-opacity=".2" d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z" />
                //         <defs>
                //             <linearGradient id="8ddc7edb-8983-4cd7-bccb-79ad21097d70" x1="1097.04" x2="-141.165" y1=".22" y2="363.075" gradientUnits="userSpaceOnUse">
                //                 <stop stop-color="#776FFF" />
                //                 <stop offset="1" stop-color="#FF4694" />
                //             </linearGradient>
                //         </defs>
                //     </svg>
                //     <div class="mx-auto max-w-7xl px-6 lg:px-8">
                //         <div class="mx-auto max-w-2xl lg:mx-0">
                //             <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2>
                //             <p class="mt-6 text-lg leading-8 text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                //         </div>
                //         <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                //             <div class="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                //                 <a href="#">Open roles <span aria-hidden="true">&rarr;</span></a>

                //                 <a href="#">Internship program <span aria-hidden="true">&rarr;</span></a>

                //                 <a href="#">Our values <span aria-hidden="true">&rarr;</span></a>

                //                 <a href="#">Meet our leadership <span aria-hidden="true">&rarr;</span></a>
                //             </div>
                //             <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                //                 <div class="flex flex-col-reverse">
                //                     <dt class="text-base leading-7 text-gray-300">Offices worldwide</dt>
                //                     <dd class="text-2xl font-bold leading-9 tracking-tight text-white">12</dd>
                //                 </div>

                //                 <div class="flex flex-col-reverse">
                //                     <dt class="text-base leading-7 text-gray-300">Full-time colleagues</dt>
                //                     <dd class="text-2xl font-bold leading-9 tracking-tight text-white">300+</dd>
                //                 </div>

                //                 <div class="flex flex-col-reverse">
                //                     <dt class="text-base leading-7 text-gray-300">Hours per week</dt>
                //                     <dd class="text-2xl font-bold leading-9 tracking-tight text-white">40</dd>
                //                 </div>

                //                 <div class="flex flex-col-reverse">
                //                     <dt class="text-base leading-7 text-gray-300">Paid time off</dt>
                //                     <dd class="text-2xl font-bold leading-9 tracking-tight text-white">Unlimited</dd>
                //                 </div>
                //             </dl>
                //         </div>
                //     </div>
                // </div>

                    {/* <header class="absolute inset-x-0 top-0 z-50">
                        <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                            <div class="flex lg:flex-1">
                                <a href="#" class="-m-1.5 p-1.5">
                                    <span class="sr-only">Your Company</span>
                                    <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
                                </a>
                            </div>
                            <div class="flex lg:hidden">
                                <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                                    <span class="sr-only">Open main menu</span>
                                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </button>
                            </div>
                            <div class="hidden lg:flex lg:gap-x-12">
                                <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Product</a>

                                <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Features</a>

                                <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Marketplace</a>

                                <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Company</a>
                            </div>
                            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                                <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
                            </div>
                        </nav>
                        <!-- Mobile menu, show/hide based on menu open state. -->
                        <div class="lg:hidden" role="dialog" aria-modal="true">
                            <!-- Background backdrop, show/hide based on slide-over state. -->
                            <div class="fixed inset-0 z-50"></div>
                            <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                                <div class="flex items-center justify-between">
                                    <a href="#" class="-m-1.5 p-1.5">
                                        <span class="sr-only">Your Company</span>
                                        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
                                    </a>
                                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                                        <span class="sr-only">Close menu</span>
                                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div class="mt-6 flow-root">
                                    <div class="-my-6 divide-y divide-gray-500/10">
                                        <div class="space-y-2 py-6">
                                            <a href="#" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Product</a>

                                            <a href="#" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>

                                            <a href="#" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>

                                            <a href="#" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
                                        </div>
                                        <div class="py-6">
                                            <a href="#" class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header> */}
