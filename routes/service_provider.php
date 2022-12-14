<?php

use App\Http\Controllers\ServiceProvider\ChatController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ServiceProvider\JobController;
use App\Http\Controllers\ServiceProvider\DashboardController;

Route::controller(DashboardController::class)
    ->middleware(['auth', 'service_provider'])
    ->prefix('service-provider')
    ->name('service-provider.')
    ->group(function () {
        Route::get('/', 'index')->name('index');

        Route::controller(JobController::class)
            ->prefix('job')
            ->name('job.')
            ->group(function () {
                Route::get('/', 'index')->name('index');
                Route::post('/apply', 'apply')->name('apply');
                Route::get('/liked', 'likedJobs')->name('liked');
            });
        Route::controller(ChatController::class)
            ->prefix('chat')
            ->name('chat.')
            ->group(function () {
                Route::get('/', 'index')->name('index');
                Route::get('messages', 'messages')->name('messages');
                Route::get('load-message', 'loadMessages')->name('load-messages');
                Route::post('send-message', 'sendMessages')->name('send-messages');
            });
    });
