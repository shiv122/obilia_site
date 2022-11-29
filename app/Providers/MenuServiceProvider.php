<?php

namespace App\Providers;

use View;
use Illuminate\Support\ServiceProvider;

class MenuServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {

        $clientMenuJson = file_get_contents(base_path('resources/data/client-menu.json'));
        $clientMenuData = json_decode($clientMenuJson);
        $serviceProviderJson = file_get_contents(base_path('resources/data/service-provider-menu.json'));
        $serviceProviderData = json_decode($serviceProviderJson);

        // Share all menuData to all the views
        View::share('menu_provider', [
            'client' => $clientMenuData->menu,
            'service_provider' => $serviceProviderData->menu
        ]);
    }
}
