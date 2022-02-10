<template>
    <!-- Activity feed -->
    <div class="bg-gray-50 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0">
        <div class="pl-6 lg:w-80">
            <div class="pt-6 pb-2">
                <h2 class="text-xl text-gray-900 font-medium text-center">
                    TOP Fund Managers
                </h2>
            </div>

            <div>
                <ul role="list" class="divide-y divide-gray-200">
                    <li class="py-4" v-for="(manager, index) of managers" :key="manager.id">
                        <div class="flex space-x-3">
                            <img class="h-6 w-6 rounded-full" :src="manager.avatar" alt="" />

                            <div class="flex-1 space-y-1">
                                <div class="flex items-center justify-between">
                                    <h3 class="text-sm font-medium">{{manager.title}}</h3>
                                    <p class="text-sm text-gray-500">#{{(index + 1)}}</p>
                                </div>

                                <p class="text-sm text-gray-500">
                                    {{manager.summary}}
                                </p>

                                <div class="text-sm">
                                    Followers: <span class="text-yellow-500 font-medium">{{manager.numFollowers}}</span>
                                </div>

                                <div class="text-sm">
                                    TVL:
                                    <span class="text-red-500 font-medium">
                                        {{tvlDisplay(manager.tvl)}}
                                    </span>
                                </div>
                            </div>

                        </div>
                    </li>
                </ul>

                <div class="py-4 text-sm border-t border-gray-200">
                    <a href="javascript://" class="text-indigo-600 font-semibold hover:text-indigo-900">View all activity <span aria-hidden="true">&rarr;</span></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* Import modules. */
import numeral from 'numeral'

export default {
    props: {
        msg: String,
    },
    data: () => {
        return {
            managers: null,
        }
    },
    methods: {
        tvlDisplay(_tvl) {
            return numeral(_tvl).format('$0.00a')
        },
        
    },
    created: function () {
        /* Initialize managers. */
        this.managers = []

        this.managers.push({
            id: '1234',
            title: 'Colony Accelerator (@colony)',
            summary: `Top 10 Avalanche projects by market cap.`,
            avatar: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
            numFollowers: 100,
            followers: [{

            }],
            tvl: 6320000,
            createdAt: 1234567890,
        })

        this.managers.push({
            id: '2222',
            title: 'Shomari (@nyusternie)',
            summary: `Deployed Workcation (2d89f0c8 in master) to production`,
            avatar: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
            numFollowers: 20,
            tvl: 1337000,
            createdAt: 1234567890,
        })

    },
}
</script>
