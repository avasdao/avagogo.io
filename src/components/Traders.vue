<template>
    <!-- Activity feed -->
    <div class="bg-gray-50 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0">
        <div class="pl-6 lg:w-80">
            <div class="pt-6 pb-2">
                <h2 class="text-sm font-semibold">TOP TRADERS</h2>
            </div>

            <div>
                <ul role="list" class="divide-y divide-gray-200">
                    <li class="py-4">
                        <div class="flex space-x-3">
                            <img class="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80" alt="" />
                            <div class="flex-1 space-y-1">
                                <div class="flex items-center justify-between">
                                    <h3 class="text-sm font-medium">Colony Accelerator (@colony)</h3>
                                    <p class="text-sm text-gray-500">#1</p>
                                </div>

                                <p class="text-sm text-gray-500">Top 10 Avalanche projects by market cap.</p>

                                <div class="text-sm">
                                    Followers: <span class="text-yellow-500 font-medium">100</span>
                                </div>

                                <div class="text-sm">
                                    TVL: <span class="text-red-500 font-medium">$6.32M</span>
                                </div>
                            </div>

                        </div>
                    </li>

                    <li class="py-4">
                        <div class="flex space-x-3">
                            <img class="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80" alt="" />

                            <div class="flex-1 space-y-1">
                                <div class="flex items-center justify-between">
                                    <h3 class="text-sm font-medium">Shomari (@nyusternie)</h3>
                                    <p class="text-sm text-gray-500">#2</p>
                                </div>

                                <p class="text-sm text-gray-500">Deployed Workcation (2d89f0c8 in master) to production</p>

                                <div>Followers: 20</div>
                            </div>

                        </div>
                    </li>

                    <!-- More items... -->
                </ul>

                <div class="py-4 text-sm border-t border-gray-200">
                    <a href="#" class="text-indigo-600 font-semibold hover:text-indigo-900">View all activity <span aria-hidden="true">&rarr;</span></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>
