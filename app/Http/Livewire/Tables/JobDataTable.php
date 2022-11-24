<?php

namespace App\Http\Livewire\Tables;

use App\Models\Job;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\DataTableComponent;

class JobDataTable extends DataTableComponent
{
    protected $model = Job::class;

    public function configure(): void
    {
        $this->setPrimaryKey('id');
    }

    public function columns(): array
    {
        return [
            Column::make("Id", "id")
                ->sortable(),
            Column::make("Description")
                ->sortable(),
            Column::make("Payment Type")
                ->sortable(),
            Column::make("Size")
                ->sortable(),
            Column::make("Rate from")
                ->sortable(),
            Column::make("Rate to")
                ->sortable(),
            Column::make("Created at", "created_at")
                ->sortable(),
            Column::make("Updated at", "updated_at")
                ->sortable(),
        ];
    }
    public function builder(): Builder
    {
        return Job::query()
            ->where('user_id', auth()->user()->id)
            ->withCount(['applications']);
    }
}
